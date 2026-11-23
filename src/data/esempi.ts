// =====================================================================
// SITI DI ESEMPIO (società INVENTATE) da mandare come esempio insieme a fccds.it.
// Ognuno diventa prontodomani.it/esempi/<slug>/ : non indicizzato, con la
// fascia "Sito di esempio · società inventata". Nomi, persone, sponsor e
// risultati sono di fantasia.
// =====================================================================

export type Esempio = {
  slug: string;
  nome: string; // nome breve
  nomeCompleto: string;
  sigla: string; // 2-3 lettere per lo stemma
  sport: string;
  sportIcona: 'volley' | 'basket';
  fondata: number;
  citta: string;
  impianto: string;
  indirizzo: string;
  claim: string;
  sottotitolo: string;
  tema: { fondo: string; scuro: string; accento: string; chiaro: string; testo: string; font: 'barlow' | 'anton'; buio: boolean };
  numeri: { n: string; l: string }[];
  prossima: { campionato: string; casa: string; ospite: string; ora: string; luogo: string };
  squadre: { nome: string; eta: string; allenamenti: string }[];
  risultati: { campionato: string; casa: string; ospite: string; punteggio: string; vinta: boolean }[];
  classifica: { squadra: string; punti: number; noi?: boolean }[];
  rosa: { numero: number; nome: string; ruolo: string }[];
  rosaTitolo: string;
  sponsor: string[];
  iscrizioni: { titolo: string; testo: string; punti: string[] };
  news: { data: string; titolo: string; testo: string }[];
};

export const esempi: Esempio[] = [
  {
    slug: 'volley-valdoro',
    nome: 'Volley Valdoro',
    nomeCompleto: 'A.S.D. Volley Valdoro',
    sigla: 'VV',
    sport: 'Pallavolo',
    sportIcona: 'volley',
    fondata: 2009,
    citta: 'Valdoro',
    impianto: 'Palazzetto dei Tigli',
    indirizzo: 'Via dei Tigli 12, Valdoro',
    claim: 'Si gioca insieme.',
    sottotitolo: 'Pallavolo femminile e maschile, dal minivolley alla Serie C. Da quindici anni nel palazzetto dei Tigli.',
    tema: { fondo: '#F6F4EF', scuro: '#14213D', accento: '#FCA311', chiaro: '#E5E9F2', testo: '#2B3448', font: 'barlow', buio: false },
    numeri: [
      { n: '6', l: 'squadre' },
      { n: '140', l: 'atleti tesserati' },
      { n: '2009', l: 'anno di fondazione' },
    ],
    prossima: { campionato: 'Serie C femminile · 9ª giornata', casa: 'Volley Valdoro', ospite: 'Pallavolo Castelmonte', ora: '20:30', luogo: 'Palazzetto dei Tigli' },
    squadre: [
      { nome: 'Serie C femminile', eta: 'Prima squadra', allenamenti: 'Lun · Mer · Ven 20:30' },
      { nome: 'Serie D maschile', eta: 'Prima squadra', allenamenti: 'Mar · Gio 21:00' },
      { nome: 'Under 18 femminile', eta: '2008-2010', allenamenti: 'Mar · Gio 18:30' },
      { nome: 'Under 16 femminile', eta: '2010-2012', allenamenti: 'Lun · Mer 18:00' },
      { nome: 'Under 14 misto', eta: '2012-2014', allenamenti: 'Mar · Ven 17:00' },
      { nome: 'Minivolley', eta: '6-11 anni', allenamenti: 'Sab 10:00' },
    ],
    risultati: [
      { campionato: 'Serie C F', casa: 'Volley Valdoro', ospite: 'Atletica Prato Lungo', punteggio: '3-1', vinta: true },
      { campionato: 'Serie C F', casa: 'Pallavolo San Rocco', ospite: 'Volley Valdoro', punteggio: '3-2', vinta: false },
      { campionato: 'Serie D M', casa: 'Volley Valdoro', ospite: 'Volley Collerosso', punteggio: '3-0', vinta: true },
    ],
    classifica: [
      { squadra: 'Pallavolo San Rocco', punti: 21 },
      { squadra: 'Volley Valdoro', punti: 19, noi: true },
      { squadra: 'Pallavolo Castelmonte', punti: 17 },
      { squadra: 'Volley Collerosso', punti: 14 },
      { squadra: 'Atletica Prato Lungo', punti: 9 },
    ],
    rosaTitolo: 'Serie C femminile',
    rosa: [
      { numero: 1, nome: 'Giulia', ruolo: 'Palleggiatrice' },
      { numero: 4, nome: 'Marta', ruolo: 'Opposta' },
      { numero: 7, nome: 'Sara', ruolo: 'Schiacciatrice' },
      { numero: 9, nome: 'Elisa', ruolo: 'Centrale' },
      { numero: 11, nome: 'Chiara', ruolo: 'Schiacciatrice' },
      { numero: 13, nome: 'Anna', ruolo: 'Libero' },
    ],
    sponsor: ['Ferramenta Bassi', 'Panificio La Spiga', 'Ottica Rinaldi', 'Autofficina Moretti', 'Bar dello Sport', 'Studio Ferri'],
    iscrizioni: {
      titolo: 'Due settimane di prova, gratis.',
      testo: 'Vieni in palestra con scarpe da ginnastica e una borraccia. Al resto pensiamo noi.',
      punti: ['Minivolley dai 6 anni', 'Squadre giovanili femminili e miste', 'Certificato medico solo dopo la prova'],
    },
    news: [
      { data: '15 nov', titolo: 'Under 16: prima vittoria in trasferta', testo: 'Tre set a uno a Collerosso, con un ultimo set da ricordare.' },
      { data: '8 nov', titolo: 'Aperte le iscrizioni al torneo di Natale', testo: 'Il 20 dicembre, per tutte le giovanili: si gioca e si mangia il panettone.' },
    ],
  },
  {
    slug: 'orsi-valmora',
    nome: 'Orsi Valmora',
    nomeCompleto: 'A.S.D. Orsi Valmora Basket',
    sigla: 'OV',
    sport: 'Basket',
    sportIcona: 'basket',
    fondata: 1998,
    citta: 'Valmora',
    impianto: 'PalaOrsi',
    indirizzo: 'Viale della Stazione 40, Valmora',
    claim: 'Cresciamo a canestro.',
    sottotitolo: 'Il basket giovanile di Valmora: dal minibasket all’Under 19, più la nostra Prima Divisione.',
    tema: { fondo: '#141011', scuro: '#7A1F2B', accento: '#F2B134', chiaro: '#2A2224', testo: '#E9E2DF', font: 'anton', buio: true },
    numeri: [
      { n: '6', l: 'squadre' },
      { n: '210', l: 'ragazze e ragazzi' },
      { n: '1998', l: 'anno di fondazione' },
    ],
    prossima: { campionato: 'Under 17 Eccellenza · 7ª giornata', casa: 'Orsi Valmora', ospite: 'Basket Fiumelungo', ora: '18:00', luogo: 'PalaOrsi' },
    squadre: [
      { nome: 'Prima Divisione', eta: 'Senior', allenamenti: 'Mar · Gio 21:00' },
      { nome: 'Under 19', eta: '2007-2008', allenamenti: 'Lun · Mer · Ven 19:30' },
      { nome: 'Under 17 Eccellenza', eta: '2009-2010', allenamenti: 'Lun · Mer · Ven 18:00' },
      { nome: 'Under 15', eta: '2011-2012', allenamenti: 'Mar · Gio 17:30' },
      { nome: 'Under 13', eta: '2013-2014', allenamenti: 'Mar · Ven 16:30' },
      { nome: 'Minibasket', eta: '5-11 anni', allenamenti: 'Mer · Sab 16:00' },
    ],
    risultati: [
      { campionato: 'U17 Ecc.', casa: 'Orsi Valmora', ospite: 'Pall. Borgo Alto', punteggio: '78-64', vinta: true },
      { campionato: 'U19', casa: 'Virtus Lagonero', ospite: 'Orsi Valmora', punteggio: '71-69', vinta: false },
      { campionato: 'Prima Div.', casa: 'Orsi Valmora', ospite: 'CUS Montepiano', punteggio: '82-75', vinta: true },
    ],
    classifica: [
      { squadra: 'Orsi Valmora', punti: 10, noi: true },
      { squadra: 'Basket Fiumelungo', punti: 10 },
      { squadra: 'Virtus Lagonero', punti: 8 },
      { squadra: 'Pall. Borgo Alto', punti: 4 },
      { squadra: 'CUS Montepiano', punti: 2 },
    ],
    rosaTitolo: 'Under 17 Eccellenza',
    rosa: [
      { numero: 5, nome: 'Luca', ruolo: 'Playmaker' },
      { numero: 8, nome: 'Matteo', ruolo: 'Guardia' },
      { numero: 10, nome: 'Davide', ruolo: 'Ala' },
      { numero: 14, nome: 'Tommaso', ruolo: 'Ala grande' },
      { numero: 21, nome: 'Andrea', ruolo: 'Centro' },
      { numero: 23, nome: 'Pietro', ruolo: 'Guardia' },
    ],
    sponsor: ['Cantina dei Colli', 'Edil Valmora', 'Farmacia Centrale', 'Gommista Bianchi', 'Pizzeria Il Forno', 'Assicurazioni Gatti'],
    iscrizioni: {
      titolo: 'Il primo allenamento lo offriamo noi.',
      testo: 'Minibasket dai 5 anni, squadre giovanili fino all’Under 19. Scrivici e ti diciamo quando venire.',
      punti: ['Istruttori con qualifica federale', 'Camp estivo a giugno', 'Navetta dalle scuole il mercoledì'],
    },
    news: [
      { data: '17 nov', titolo: 'Under 17, cinque su cinque', testo: 'Primi in classifica a pari punti con Fiumelungo. Sabato lo scontro diretto.' },
      { data: '10 nov', titolo: 'Open day minibasket', testo: 'Sabato 29 novembre porte aperte al PalaOrsi: si prova, si gioca, si fa merenda.' },
    ],
  },
];
