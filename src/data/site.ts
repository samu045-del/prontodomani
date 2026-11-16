// =====================================================================
// CONTENUTI E IMPOSTAZIONI DI PRONTODOMANI
// Questo è il file da modificare per aggiornare prezzi, posti del mese,
// dati aziendali e testi. La grafica sta nei componenti, non qui.
// =====================================================================

// --- Stato del lancio ------------------------------------------------
// true = il sito chiede a Google di NON indicizzarlo (anteprima, dati
// legali mancanti). Mettilo a false solo quando P.IVA, privacy e
// condizioni sono completi.
export const preLancio = true;

// --- Contatore posti del mese -----------------------------------------
// Aggiornalo a ogni contratto firmato. Deve essere un dato reale.
export const posti = {
  mese: 'novembre',
  totale: 30,
  occupati: 0,
  // Il contatore compare solo da questa soglia di posti occupati in su.
  // Sotto la soglia appare il messaggio "Prossima demo disponibile".
  mostraDaOccupati: 10,
};

// --- Prezzi -------------------------------------------------------------
export const prezzi = {
  sito: 399,
  manutenzione: 149,
  // Testo sull'IVA: da confermare con i dati fiscali definitivi.
  notaIva: '[NOTA IVA DA DEFINIRE: es. "Operazione in regime forfettario, IVA non dovuta"]',
  // I 149 €/anno comprendono il rinnovo del dominio?
  rinnovoDominioIncluso: true,
};

// --- Dati aziendali (obbligatori prima del lancio) ---------------------
export const azienda = {
  nome: 'ProntoDomani',
  titolare: '[NOME E COGNOME / RAGIONE SOCIALE]',
  piva: '[P.IVA DA INSERIRE]',
  indirizzo: '[SEDE DA INSERIRE]',
  email: 'info@prontodomani.it',
  telefono: '', // lascia vuoto se non vuoi mostrarlo
};

// --- Antispam del modulo (Cloudflare Turnstile) -------------------------
// Chiave PUBBLICA del widget (Site key). La chiave segreta va SOLO nelle
// variabili d'ambiente di Cloudflare, mai qui.
// Quella sotto è la chiave di prova ufficiale di Cloudflare: passa sempre.
export const turnstileSiteKey = '1x00000000000000000000AA';

// --- Settori ---------------------------------------------------------------
export type Settore = {
  titolo: string;
  testo: string;
  icona: 'sport' | 'documento' | 'medico';
};

export const settori: Settore[] = [
  {
    titolo: 'Società sportive',
    testo: 'Squadre e staff, calendari, iscrizioni, sponsor e news della stagione.',
    icona: 'sport',
  },
  {
    titolo: 'Studi commercialisti',
    testo: 'Servizi chiari, team, aree di competenza e un contatto diretto senza giri.',
    icona: 'documento',
  },
  {
    titolo: 'Studi medici e dentistici',
    testo: 'Servizi, équipe, orari e collegamento al tuo sistema di prenotazione. Testi informativi, come richiede la pubblicità sanitaria.',
    icona: 'medico',
  },
];

// --- Lavori online -----------------------------------------------------------
// Mostra un progetto SOLO dopo il consenso scritto del cliente:
// metti consenso: true e aggiungi lo screenshot in /public/esempi/.
export type Progetto = {
  nome: string;
  url: string;
  settore: string;
  funzioni: string;
  immagine?: string; // es. '/esempi/fccds.webp'
  consenso: boolean;
};

export const progetti: Progetto[] = [
  {
    nome: 'fccds.it',
    url: 'https://fccds.it',
    settore: 'Società sportiva',
    funzioni: 'squadre, calendario, contatti',
    consenso: false,
  },
  {
    nome: 'emada.it',
    url: 'https://emada.it',
    settore: 'Studio di commercialisti',
    funzioni: 'servizi, team, contatti',
    consenso: false,
  },
];

// --- Incluso / escluso -------------------------------------------------------
export const incluso = [
  'Fino a 4 pagine con design su misura',
  'Ottimizzato per smartphone, tablet e computer',
  'Modulo contatti, telefono, email e WhatsApp',
  'SEO tecnico di base: titoli, descrizioni, sitemap',
  'Dominio .it intestato a te e hosting per 12 mesi',
  'Certificato SSL, configurazione e pubblicazione',
  'Due giri di revisione',
];

export const escluso = [
  'Pagine oltre la quarta, e-commerce, aree riservate',
  'Scrittura dei testi e servizi fotografici',
  'SEO continuativa, pubblicità, gestione social',
  'Funzionalità su misura e modifiche illimitate',
];

// --- FAQ -------------------------------------------------------------------------
export const faq = [
  {
    d: 'Davvero ricevo una demo entro 24 ore?',
    r: 'Sì, dal momento in cui abbiamo brief completo, testi, logo e immagini. Se manca qualcosa ti avvisiamo subito e il conteggio parte quando arriva.',
  },
  {
    d: `Perché solo ${posti.totale} siti al mese?`,
    r: 'Perché ogni sito è seguito da una persona. Oltre questa soglia non potremmo garantire le 24 ore. Se i posti del mese sono finiti, ti mettiamo in lista per il mese successivo.',
  },
  {
    d: 'Quando viene pubblicato il sito?',
    r: 'Solo dopo la tua approvazione. Fino ad allora la demo resta su un indirizzo di prova.',
  },
  {
    d: 'Posso chiedere modifiche?',
    r: 'Sono inclusi due giri di revisione. Dopo la pubblicazione, la manutenzione comprende 30 minuti di piccole modifiche a trimestre.',
  },
  {
    d: 'Il dominio rimane mio?',
    r: "Sì, è intestato a te fin dall'inizio, anche se il primo anno lo paghiamo noi.",
  },
  {
    d: 'Posso collegare MioDottore o un altro sistema di prenotazione?',
    r: 'Sì, con un pulsante o un link al tuo profilo. Integrazioni più profonde vanno valutate a parte.',
  },
  {
    d: 'Cosa succede se non rinnovo la manutenzione?',
    r: 'Il sito resta online fino alla scadenza. Poi ti consegniamo i file e ti aiutiamo a trasferire il dominio dove preferisci.',
  },
];

export const opzioniSettore = [
  'Società sportiva',
  'Studio commercialista',
  'Studio medico o dentistico',
  'Altro',
];
