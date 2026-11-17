// Gestione del modulo di richiesta: verifica l'antispam (Turnstile)
// e inoltra la richiesta via email (Resend).
//
// Segreti da impostare su Cloudflare (Worker > Settings > Variables and Secrets):
//   TURNSTILE_SECRET_KEY  chiave segreta di Turnstile
//   RESEND_API_KEY        chiave API di Resend
// MAIL_TO e MAIL_FROM sono in wrangler.jsonc (non sono segreti).

export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  MAIL_TO: string;
  MAIL_FROM: string;
}


const LIMITI: Record<string, number> = {
  nome: 120, azienda: 160, email: 200, telefono: 40, settore: 60,
  sito: 200, messaggio: 2000, tempistiche: 60, pacchetto: 40,
};
const OBBLIGATORI = ['nome', 'azienda', 'email', 'settore', 'messaggio', 'tempistiche'];

function vaiA(request: Request, percorso: string): Response {
  return Response.redirect(new URL(percorso, request.url).toString(), 303);
}

function errore(request: Request, motivo: string): Response {
  console.log('Modulo rifiutato:', motivo);
  return vaiA(request, '/contatti/?esito=errore#modulo');
}

function escape(testo: string): string {
  return testo.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

export async function gestisciRichiesta(request: Request, env: Env): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return errore(request, 'corpo non valido');
  }

  // Trappola per bot: un umano non vede né compila questo campo.
  if (String(form.get('sito_web_2') ?? '').trim() !== '') {
    return vaiA(request, '/grazie/');
  }

  const dati: Record<string, string> = {};
  for (const [campo, max] of Object.entries(LIMITI)) {
    dati[campo] = String(form.get(campo) ?? '').trim().slice(0, max);
  }

  for (const campo of OBBLIGATORI) {
    if (!dati[campo]) return errore(request, `campo mancante: ${campo}`);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(dati.email)) return errore(request, 'email non valida');
  if (form.get('privacy') !== 'si') return errore(request, 'privacy non accettata');

  // Verifica Turnstile
  const token = String(form.get('cf-turnstile-response') ?? '');
  if (!token) return errore(request, 'token antispam mancante');
  const verifica = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  });
  const esito = (await verifica.json()) as { success: boolean };
  if (!esito.success) return errore(request, 'antispam non superato');

  // Invio email
  const righe = [
    ['Nome', dati.nome],
    ['Studio/azienda', dati.azienda],
    ['Email', dati.email],
    ['Telefono', dati.telefono || '—'],
    ['Settore', dati.settore],
    ['Pacchetto', dati.pacchetto || 'Non indicato'],
    ['Sito attuale', dati.sito || '—'],
    ['Tempistiche', dati.tempistiche],
  ];
  const testo = righe.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMessaggio:\n${dati.messaggio}\n\nPrivacy: accettata`;
  const html =
    '<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">' +
    righe.map(([k, v]) => `<tr><td style="color:#55646B">${k}</td><td><strong>${escape(v)}</strong></td></tr>`).join('') +
    `</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-line">${escape(dati.messaggio)}</p>`;

  const invio = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.MAIL_TO],
      reply_to: dati.email,
      subject: `Nuova richiesta: ${dati.azienda} (${dati.settore})`,
      text: testo,
      html,
    }),
  });

  if (!invio.ok) {
    return errore(request, `invio email fallito: ${invio.status} ${await invio.text()}`);
  }
  return vaiA(request, '/grazie/');
}
