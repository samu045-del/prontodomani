// =====================================================================
// CONTENUTI E IMPOSTAZIONI DI PRONTODOMANI
// Prezzi, pacchetti, promozione, dati aziendali e testi condivisi.
// I contenuti dei tre settori sono in src/data/settori.ts.
// =====================================================================

// --- Stato del lancio ------------------------------------------------
// true = il sito chiede a Google di NON indicizzarlo. Mettilo a false
// solo quando P.IVA, privacy e condizioni sono completi.
export const preLancio = true;

// --- Dati aziendali (obbligatori prima del lancio) ---------------------
export const azienda = {
  nome: 'ProntoDomani',
  titolare: '', // es. 'Mario Rossi' — vuoto = non mostrato
  piva: '04411700232',
  indirizzo: '', // sede — vuoto = non mostrata
  email: 'samuele@prontodomani.it',
  emailDiretta: 'samuele@prontodomani.it',
  telefono: '', // es. '+39 333 1234567' — vuoto = non mostrato
  whatsapp: '', // es. '393331234567' (solo cifre, con prefisso) — vuoto = non mostrato
};

// Nota fiscale mostrata sotto i prezzi. Da confermare col commercialista.
export const notaIva = 'Prezzi finali: operiamo in regime forfettario (L. 190/2014), l’IVA non è applicata.';

// --- Pacchetti -------------------------------------------------------------
// Prezzi e contenuti NON vanno cambiati senza decisione commerciale.
// "base" sono le voci valide per tutti i settori; le voci specifiche per
// settore stanno in settori.ts (campo pacchettiExtra).
export type Pacchetto = {
  id: 'start' | 'plus' | 'premium';
  nome: string;
  prezzo: number;
  pagine: string;
  perChi: string;
  base: string[];
  inEvidenza?: boolean;
};

export const pacchetti: Pacchetto[] = [
  {
    id: 'start',
    nome: 'START',
    prezzo: 590,
    pagine: 'Fino a 4 pagine',
    perChi: 'Per presentarti online in modo chiaro e professionale.',
    base: [
      'Design personalizzato e responsive',
      'Modulo contatti',
      'Collegamenti a telefono, email e WhatsApp',
      'Google Maps, dove serve',
      'SEO tecnica di base',
      'Configurazione Google Search Console',
      'Collegamento del dominio e pubblicazione',
      '2 cicli di revisione',
    ],
  },
  {
    id: 'plus',
    nome: 'PLUS',
    prezzo: 790,
    pagine: 'Fino a 6 pagine',
    perChi: 'Per chi ha più da raccontare e vuole più spazio.',
    base: ['Tutto quanto previsto da START', 'Sezioni aggiuntive personalizzate', 'Gallerie fotografiche'],
    inEvidenza: true,
  },
  {
    id: 'premium',
    nome: 'PREMIUM',
    prezzo: 1190,
    pagine: 'Fino a 8 pagine',
    perChi: 'Per realtà strutturate, con più aree e aggiornamenti.',
    base: [
      'Tutto quanto previsto da PLUS',
      'Maggiore personalizzazione',
      'Sezione news',
      'Calendario informativo di eventi',
      'Supporto nell’organizzazione dei contenuti iniziali',
    ],
  },
];

// --- Promozione di lancio --------------------------------------------------
// Riguarda SOLO il pacchetto START. Il limite va rispettato davvero: al
// 30° cliente START metti attiva: false.
export const promo = {
  attiva: true,
  pacchetto: 'start' as const,
  prezzo: 490,
  prezzoListino: 590,
  limite: 30,
};

// --- Care: gestione tecnica annuale -----------------------------------------
export const care = {
  prezzo: 149,
  inclusi: ['Hosting', 'Certificato SSL', 'Backup periodici', 'Monitoraggio del sito', 'Assistenza per problemi tecnici'],
  esclusi: ['Nuove pagine o sezioni', 'Modifiche ai contenuti continuative', 'Nuove funzionalità', 'Restyling'],
};

// --- Antispam del modulo (Cloudflare Turnstile) -----------------------------
// Chiave PUBBLICA (Site key) del widget "ProntoDomani modulo".
// La chiave segreta va solo nei segreti del Worker (TURNSTILE_SECRET_KEY).
export const turnstileSiteKey = '0x4AAAAAAGIjttuey5yvNFwh';

export const opzioniSettore = ['Società sportiva o associazione', 'Psicologo o psicoterapeuta', 'Studio dentistico', 'Altro'];

// --- Utilità ------------------------------------------------------------------
export const euro = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}\u00a0€`;

export function prezzoMostrato(p: Pacchetto) {
  return promo.attiva && p.id === promo.pacchetto ? promo.prezzo : p.prezzo;
}
