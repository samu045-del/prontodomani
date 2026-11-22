// =====================================================================
// CONTENUTI E IMPOSTAZIONI DI PRONTODOMANI
// Prezzi, pacchetti, promozione, dati aziendali e testi condivisi.
// Dal 22/11/2026 ProntoDomani è solo per società sportive (ASD e SSD).
// =====================================================================

// --- Stato del lancio ------------------------------------------------
// true = il sito chiede a Google di NON indicizzarlo. Mettilo a false
// solo quando P.IVA, privacy e condizioni sono completi.
export const preLancio = false;

// --- Dati aziendali (obbligatori prima del lancio) ---------------------
// ProntoDomani è un servizio di LESGO S.R.L.S. (dati dal Registro Imprese).
export const azienda = {
  nome: 'ProntoDomani',
  ragioneSociale: 'LESGO S.R.L.S.',
  piva: '12415510960',
  rea: 'MI-2660224',
  indirizzo: 'Via Marciano 4, 20133 Milano (MI)',
  email: 'samuele@prontodomani.it',
  emailDiretta: 'samuele@prontodomani.it',
  telefono: '', // es. '+39 333 1234567' — vuoto = non mostrato
  whatsapp: '', // es. '393331234567' (solo cifre, con prefisso) — vuoto = non mostrato
};

// Nota fiscale mostrata sotto i prezzi. Fattura LESGO S.R.L.S.: prezzi IVA inclusa (decisione del 22/11/2026).
export const notaIva = 'Tutti i prezzi sono IVA inclusa.';

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
    perChi: 'Per la società che deve farsi trovare: chi siete, dove giocate, come iscriversi.',
    base: [
      'Colori e stemma della società, su misura',
      'Perfetto da smartphone',
      'Modulo per iscrizioni e informazioni',
      'Telefono, email, WhatsApp e social a un tocco',
      'Mappa del campo e indicazioni',
      'SEO tecnica di base e Google Search Console',
      'Dominio collegato e sito pubblicato',
      '2 giri di modifiche',
    ],
  },
  {
    id: 'plus',
    nome: 'PLUS',
    prezzo: 790,
    pagine: 'Fino a 6 pagine',
    perChi: 'Per il club con più squadre e sponsor da mettere in vetrina.',
    base: [
      'Tutto quanto previsto da START',
      'Squadre, settore giovanile e sponsor in pagine dedicate',
      'Gallerie foto di partite ed eventi',
    ],
    inEvidenza: true,
  },
  {
    id: 'premium',
    nome: 'PREMIUM',
    prezzo: 1190,
    pagine: 'Fino a 8 pagine',
    perChi: 'Per la società strutturata, con più discipline e una stagione da raccontare.',
    base: [
      'Tutto quanto previsto da PLUS',
      'Personalizzazione più spinta',
      'News del club',
      'Calendario delle partite e degli eventi',
      'Ti aiuto a mettere in ordine i contenuti iniziali',
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

export const opzioniSettore = ['Calcio', 'Calcio a 5', 'Pallavolo', 'Basket', 'Rugby', 'Nuoto', 'Arti marziali e sport da combattimento', 'Palestra o polisportiva', 'Altro sport'];

// --- Utilità ------------------------------------------------------------------
export const euro = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}\u00a0€`;

export function prezzoMostrato(p: Pacchetto) {
  return promo.attiva && p.id === promo.pacchetto ? promo.prezzo : p.prezzo;
}
