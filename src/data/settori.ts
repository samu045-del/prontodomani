// =====================================================================
// I TRE SETTORI
// Ogni voce alimenta la card in homepage e la pagina /<slug>/.
// Per i professionisti sanitari la comunicazione resta informativa:
// niente promesse di risultati, di pazienti o di funzioni non incluse.
// =====================================================================

export type Tema = {
  accento: string; // colore principale del settore
  fondo: string; // superficie chiara
  inchiostro: string; // testo su fondo chiaro
  contrasto: string; // testo sopra il colore principale
};

export type Settore = {
  slug: 'psicologi' | 'dentisti' | 'societa-sportive';
  nome: string; // come appare nel menu
  etichetta: string; // occhiello
  tema: Tema;
  seo: { title: string; description: string };
  card: { titolo: string; testo: string; punti: string[] };
  h1: string;
  sottotitolo: string;
  problema: { titolo: string; testo: string; segnali: string[] };
  contenuti: { titolo: string; testo: string }[];
  vantaggi: { titolo: string; testo: string }[];
  struttura: { pagina: string; sezioni: string[] }[];
  // Voci in più specifiche del settore (solo quando il pacchetto le prevede già).
  pacchettiExtra: Partial<Record<'start' | 'plus' | 'premium', string[]>>;
  // Stessa voce del pacchetto, descritta con le parole del settore.
  pacchettiRinomina: Record<string, string>;
  pacchettoConsigliato: 'start' | 'plus' | 'premium';
  faq: { d: string; r: string }[];
  attenzione?: string; // nota di trasparenza specifica del settore
};

export const settori: Settore[] = [
  {
    slug: 'psicologi',
    nome: 'Psicologi',
    etichetta: 'Psicologi e psicoterapeuti',
    tema: { accento: '#56695A', fondo: '#EFF1EA', inchiostro: '#2F3B33', contrasto: '#FFFFFF' },
    seo: {
      title: 'Siti web per psicologi e psicoterapeuti · ProntoDomani',
      description:
        'Siti web professionali per psicologi e psicoterapeuti: presentazione, approccio, aree di intervento e contatti. Design sobrio e su misura, prezzi chiari.',
    },
    card: {
      titolo: 'Psicologi e psicoterapeuti',
      testo: 'Un sito sobrio e rassicurante, che presenta te, il tuo approccio e come contattarti.',
      punti: ['Presentazione e approccio', 'Aree di intervento', 'Studio e contatti'],
    },
    h1: 'Un sito che ti presenta con la stessa cura che metti nel tuo lavoro.',
    sottotitolo:
      'Chi cerca uno psicologo vuole capire chi sei, come lavori e come raggiungerti. Realizziamo un sito chiaro, elegante e rispettoso, che risponde a queste domande senza parole di troppo.',
    problema: {
      titolo: 'Spesso il primo contatto avviene prima della prima telefonata.',
      testo:
        'Prima di scriverti, una persona legge di te: il tuo percorso, il tuo approccio, dove ricevi. Se trova solo un profilo su una piattaforma o un sito datato, fa più fatica a farsi un’idea.',
      segnali: [
        'Hai solo una scheda su un portale, uguale a quella di tutti',
        'Il sito attuale non si legge bene da smartphone',
        'Le informazioni su studio, orari e modalità sono sparse',
        'Non rispecchia più il modo in cui lavori oggi',
      ],
    },
    contenuti: [
      { titolo: 'Chi sono', testo: 'Formazione, iscrizione all’Albo, orientamento teorico: le informazioni che danno fiducia, scritte in modo chiaro.' },
      { titolo: 'Approccio', testo: 'Come si svolge un primo colloquio e cosa aspettarsi, con un linguaggio accessibile.' },
      { titolo: 'Aree di intervento', testo: 'Gli ambiti di cui ti occupi, presentati in modo informativo e senza promesse.' },
      { titolo: 'Studio e modalità', testo: 'Indirizzo, come arrivare, colloqui in presenza o online, se li offri.' },
      { titolo: 'Contatti', testo: 'Telefono, email e modulo semplice, senza raccogliere informazioni sensibili.' },
    ],
    vantaggi: [
      { titolo: 'Tono sobrio', testo: 'Testi e immagini calmi, adatti a chi sta cercando aiuto.' },
      { titolo: 'Riservatezza', testo: 'Il modulo chiede solo i dati per ricontattare, mai informazioni cliniche.' },
      { titolo: 'Facile da leggere', testo: 'Pensato prima per lo smartphone, da dove arriva la maggior parte delle visite.' },
    ],
    struttura: [
      { pagina: 'Home', sezioni: ['Presentazione breve', 'Approccio in sintesi', 'Come contattarmi'] },
      { pagina: 'Chi sono', sezioni: ['Percorso e formazione', 'Iscrizione all’Albo', 'Orientamento'] },
      { pagina: 'Aree di intervento', sezioni: ['Ambiti principali', 'Come si svolge il primo colloquio'] },
      { pagina: 'Studio e contatti', sezioni: ['Indirizzo e mappa', 'Modalità in presenza e online', 'Modulo contatti'] },
    ],
    pacchettiExtra: {},
    pacchettiRinomina: {
      'Sezioni aggiuntive personalizzate': 'Sezioni aggiuntive personalizzate, ad esempio una pagina per area di intervento',
      'Sezione news': 'Sezione articoli e approfondimenti',
      'Calendario informativo di eventi': 'Calendario informativo di incontri e seminari',
    },
    pacchettoConsigliato: 'start',
    attenzione:
      'Per le professioni sanitarie la comunicazione deve restare informativa. Ti aiutiamo a impostare i testi in questo senso, ma i contenuti professionali restano sotto la tua responsabilità.',
    faq: [
      {
        d: 'Il sito mi porterà nuovi pazienti?',
        r: 'Non possiamo prometterlo e diffidiamo di chi lo fa. Un sito chiaro aiuta chi ti cerca a conoscerti e a contattarti: il resto dipende da molti fattori.',
      },
      {
        d: 'Posso collegare un sistema di prenotazione?',
        r: 'Sì, con un pulsante o un link al servizio che usi già. La prenotazione online integrata non è inclusa nei pacchetti.',
      },
      {
        d: 'Chi scrive i testi?',
        r: 'Partiamo dalle informazioni che ci dai e li organizziamo per il web. I contenuti professionali li verifichi e approvi tu.',
      },
      {
        d: 'Il modulo contatti raccoglie dati sensibili?',
        r: 'No: chiede solo nome, recapiti e un breve messaggio, con l’indicazione di non inserire informazioni sulla salute.',
      },
    ],
  },
  {
    slug: 'dentisti',
    nome: 'Dentisti',
    etichetta: 'Dentisti e studi odontoiatrici',
    tema: { accento: '#1F5F86', fondo: '#EAF2F7', inchiostro: '#14324A', contrasto: '#FFFFFF' },
    seo: {
      title: 'Siti web per dentisti e studi odontoiatrici · ProntoDomani',
      description:
        'Siti web professionali per studi dentistici: studio, team, trattamenti, orari e contatti. Design moderno e su misura, pensato per smartphone, con prezzi chiari.',
    },
    card: {
      titolo: 'Dentisti e studi odontoiatrici',
      testo: 'Un sito ordinato e moderno che valorizza lo studio, il team e i trattamenti.',
      punti: ['Studio e team', 'Trattamenti', 'Orari e contatti'],
    },
    h1: 'Il tuo studio, presentato con ordine anche online.',
    sottotitolo:
      'Chi cerca un dentista vuole sapere quali trattamenti offrite, chi lo seguirà e quando può venire. Realizziamo un sito moderno e chiaro, facile da consultare dallo smartphone.',
    problema: {
      titolo: 'Lo studio è curato. Il sito dovrebbe esserlo altrettanto.',
      testo:
        'Molti studi hanno un sito fermo da anni, lento o difficile da leggere sul telefono. Per chi non vi conosce ancora, è il primo biglietto da visita.',
      segnali: [
        'Il sito è datato o non si legge bene da smartphone',
        'Trattamenti e team non sono presentati con chiarezza',
        'Orari e indicazioni sono difficili da trovare',
        'Non c’è un modo semplice per chiamare o scrivere',
      ],
    },
    contenuti: [
      { titolo: 'Lo studio', testo: 'Storia, ambienti e attrezzature, raccontati con fotografie reali dello studio.' },
      { titolo: 'Il team', testo: 'Medici, igienisti e personale, con ruolo e qualifiche che ci fornisci.' },
      { titolo: 'Trattamenti', testo: 'Le prestazioni offerte, descritte in modo informativo e comprensibile.' },
      { titolo: 'Informazioni utili', testo: 'Orari, come arrivare, parcheggio, accessibilità, convenzioni se presenti.' },
      { titolo: 'Contatti', testo: 'Chiamata con un tocco, WhatsApp, modulo e collegamento al sistema di prenotazione che usate.' },
    ],
    vantaggi: [
      { titolo: 'Ordine e chiarezza', testo: 'Ogni informazione al suo posto, trovabile in pochi secondi.' },
      { titolo: 'Pensato per lo smartphone', testo: 'Chiamare, trovare l’indirizzo e leggere gli orari con una mano.' },
      { titolo: 'Comunicazione corretta', testo: 'Testi informativi, senza promesse di risultato né toni da pubblicità.' },
    ],
    struttura: [
      { pagina: 'Home', sezioni: ['Presentazione dello studio', 'Trattamenti in evidenza', 'Orari e contatti rapidi'] },
      { pagina: 'Studio e team', sezioni: ['Ambienti', 'Medici e collaboratori', 'Direttore sanitario'] },
      { pagina: 'Trattamenti', sezioni: ['Elenco delle prestazioni', 'Descrizioni informative'] },
      { pagina: 'Contatti', sezioni: ['Orari', 'Mappa e indicazioni', 'Modulo e prenotazione'] },
    ],
    pacchettiExtra: {},
    pacchettiRinomina: {
      'Sezioni aggiuntive personalizzate': 'Sezioni aggiuntive personalizzate, ad esempio una pagina per trattamento',
      'Gallerie fotografiche': 'Gallerie fotografiche dello studio',
      'Sezione news': 'Sezione news e comunicazioni ai pazienti',
      'Calendario informativo di eventi': 'Calendario di aperture straordinarie ed eventi',
    },
    pacchettoConsigliato: 'plus',
    attenzione:
      'La pubblicità sanitaria deve essere informativa: niente prezzi civetta, foto prima/dopo o promesse di risultato. Impostiamo il sito in questo senso; i contenuti sanitari restano sotto la responsabilità dello studio.',
    faq: [
      {
        d: 'Posso collegare MioDottore o un altro sistema di prenotazione?',
        r: 'Sì, con un pulsante o un link al vostro profilo. Integrazioni più profonde vanno valutate a parte.',
      },
      {
        d: 'Potete inserire foto prima e dopo i trattamenti?',
        r: 'Preferiamo di no: la comunicazione sanitaria deve restare informativa. Usiamo fotografie reali dello studio e del team.',
      },
      {
        d: 'Avete fotografie dello studio?',
        r: 'No, usiamo quelle che ci fornite. Se non le avete, vi indichiamo come scattarle o un fotografo, a parte.',
      },
      {
        d: 'Il sito porterà nuovi pazienti?',
        r: 'Non lo promettiamo. Un sito chiaro e veloce rende più facile trovarvi e contattarvi.',
      },
    ],
  },
  {
    slug: 'societa-sportive',
    nome: 'Società sportive',
    etichetta: 'Società sportive e associazioni',
    tema: { accento: '#1E7A3C', fondo: '#E9F4EC', inchiostro: '#103A20', contrasto: '#FFFFFF' },
    seo: {
      title: 'Siti web per società sportive e associazioni · ProntoDomani',
      description:
        'Siti web per società sportive e associazioni: squadre, corsi, settore giovanile, sponsor e news. Design su misura, pensato per atleti e famiglie, con prezzi chiari.',
    },
    card: {
      titolo: 'Società sportive e associazioni',
      testo: 'Un sito che racconta il club, presenta squadre e corsi e dà spazio agli sponsor.',
      punti: ['Squadre e settore giovanile', 'Sponsor e partner', 'News e calendario'],
    },
    h1: 'Il vostro club merita un sito all’altezza del campo.',
    sottotitolo:
      'Famiglie, atleti, sponsor e tifosi cercano le stesse cose: chi siete, dove giocate, come iscriversi. Realizziamo un sito dinamico che lo dice chiaramente e che potete mostrare con orgoglio.',
    problema: {
      titolo: 'Tutto passa da Facebook e WhatsApp. Ma chi non vi conosce dove vi trova?',
      testo:
        'Le informazioni sono sparse tra gruppi, post e passaparola. Un genitore che vuole iscrivere il figlio o un’azienda che vuole sponsorizzarvi non sa da dove cominciare.',
      segnali: [
        'Il sito non c’è, oppure è fermo da qualche stagione',
        'Orari, campi e contatti sono solo sui social',
        'Gli sponsor non hanno uno spazio dove essere visti',
        'Le iscrizioni si gestiscono a voce e su WhatsApp',
      ],
    },
    contenuti: [
      { titolo: 'Il club', testo: 'Storia, valori, stemma, staff e organigramma: l’identità della società.' },
      { titolo: 'Squadre e corsi', testo: 'Prima squadra, settore giovanile, femminile, discipline e categorie.' },
      { titolo: 'Iscrizioni', testo: 'Come iscriversi, prova gratuita, quote e documenti, con contatto diretto.' },
      { titolo: 'Sponsor e partner', testo: 'Uno spazio vero per chi vi sostiene, e un invito a diventare sponsor.' },
      { titolo: 'Campo e contatti', testo: 'Impianti, come arrivare, segreteria, orari e social.' },
    ],
    vantaggi: [
      { titolo: 'Identità del club', testo: 'Colori, stemma e carattere della società, non un modello qualsiasi.' },
      { titolo: 'Per famiglie e atleti', testo: 'Informazioni su corsi e iscrizioni trovabili in un minuto, dal telefono.' },
      { titolo: 'Valore per gli sponsor', testo: 'Una vetrina in più da offrire a chi vi sostiene.' },
    ],
    struttura: [
      { pagina: 'Home', sezioni: ['Il club in breve', 'Prossimi impegni', 'Squadre in evidenza', 'Sponsor'] },
      { pagina: 'Il club', sezioni: ['Storia e valori', 'Staff e organigramma'] },
      { pagina: 'Squadre e corsi', sezioni: ['Prima squadra', 'Settore giovanile', 'Femminile o altre discipline'] },
      { pagina: 'Iscrizioni', sezioni: ['Come iscriversi', 'Prova gratuita', 'Documenti'] },
      { pagina: 'Sponsor', sezioni: ['Partner attuali', 'Diventa sponsor'] },
      { pagina: 'Contatti', sezioni: ['Campo e mappa', 'Segreteria', 'Social'] },
    ],
    pacchettiExtra: {
      plus: ['Sezioni dedicate a discipline, squadre, corsi e sponsor'],
      premium: ['Pagine dedicate a più discipline o sezioni'],
    },
    pacchettiRinomina: {
      'Gallerie fotografiche': 'Gallerie fotografiche di partite ed eventi',
      'Sezione news': 'News del club',
      'Calendario informativo di eventi': 'Calendario informativo di partite ed eventi',
    },
    pacchettoConsigliato: 'plus',
    faq: [
      {
        d: 'Possiamo aggiornare risultati e news da soli?',
        r: 'Nel pacchetto PREMIUM c’è una sezione news. Modalità e frequenza degli aggiornamenti si concordano: il servizio Care non include aggiornamenti editoriali continui.',
      },
      {
        d: 'Potete inserire i loghi dei nostri sponsor?',
        r: 'Sì, con i file che ci fornite e con il link al loro sito. È uno spazio che potete valorizzare quando cercate nuovi partner.',
      },
      {
        d: 'Il dominio sarà intestato alla società?',
        r: 'Sì, il dominio è sempre intestato a voi.',
      },
      {
        d: 'Abbiamo solo una pagina Facebook: basta?',
        r: 'I social sono utili per gli aggiornamenti, il sito per le informazioni stabili: chi siete, dove giocate, come iscriversi. Funzionano meglio insieme.',
      },
    ],
  },
];

export const settorePer = (slug: Settore['slug']) => settori.find((s) => s.slug === slug)!;
