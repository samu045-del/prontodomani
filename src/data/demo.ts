// =====================================================================
// BOZZE RISERVATE PER L'OUTREACH
// Ogni voce diventa una pagina prontodomani.it/demo/<slug>, non
// indicizzata e non presente nella sitemap.
// Le immagini vanno in public/demo/<slug>/ (parte-1.webp, parte-2.webp...).
//
// SCADENZA: la bozza resta visibile per GIORNI_VALIDITA giorni dalla data
// in "inviata" (compresa). Dopo, il link mostra "bozza non più disponibile".
// Lascia inviata vuota ('') finché non mandi la mail: la pagina resta attiva.
// =====================================================================

export const GIORNI_VALIDITA = 7;

export type Demo = {
  slug: string;
  club: string;
  immagini: string[];
  larghezza: number; // larghezza in px delle immagini
  altezze: number[]; // altezza in px di ogni immagine, stesso ordine
  inviata: string; // data di invio della mail, formato 'AAAA-MM-GG', oppure ''
};

// Ultimo giorno di validità ('AAAA-MM-GG'), o null se non ancora inviata.
export function ultimoGiorno(d: Demo): string | null {
  if (!d.inviata) return null;
  const data = new Date(`${d.inviata}T12:00:00Z`);
  data.setUTCDate(data.getUTCDate() + GIORNI_VALIDITA - 1);
  return data.toISOString().slice(0, 10);
}

// Data di oggi in Italia, formato 'AAAA-MM-GG'.
export function oggiInItalia(adesso = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome' }).format(adesso);
}

export function scaduta(d: Demo, adesso = new Date()): boolean {
  const fine = ultimoGiorno(d);
  return fine !== null && oggiInItalia(adesso) > fine;
}

export const demo: Demo[] = [
  {
    slug: 'libertas-san-bartolomeo',
    club: 'Libertas San Bartolomeo',
    immagini: ['parte-1.webp', 'parte-2.webp', 'parte-3.webp'],
    larghezza: 1636,
    altezze: [2080, 2105, 2088],
    inviata: '',
  },
  {
    slug: 'asd-lenno',
    club: 'A.S.D. Lenno',
    immagini: ['parte-1.webp', 'parte-2.webp', 'parte-3.webp'],
    larghezza: 1636,
    altezze: [2668, 2668, 2669],
    inviata: '',
  },
  {
    slug: 'valeria-lazzarini',
    club: 'Valeria Lazzarini',
    immagini: ['parte-1.webp', 'parte-2.webp', 'parte-3.webp'],
    larghezza: 1800,
    altezze: [2886, 2886, 2886],
    inviata: '',
  },
];
