// =====================================================================
// FONDATORI — pagina Chi siamo e sezione in homepage
// Sostituisci i valori tra parentesi quadre. Finché un campo resta tra
// [parentesi quadre], il sito mostra una versione neutra e curata al suo
// posto (non il testo segnaposto).
// Foto: metti il file in public/team/ (es. /team/nome.webp), formato 4:5,
// almeno 800×1000 px.
// =====================================================================

export type Fondatore = {
  nome: string;
  ruolo: string;
  bio: string;
  foto: string; // percorso, es. '/team/samuele.webp', oppure ''
};

export const fondatori: Fondatore[] = [
  {
    nome: '[Inserire nome e cognome]',
    ruolo: '[Inserire ruolo]',
    bio: '[Inserire breve biografia e percorso professionale]',
    foto: '',
  },
  {
    nome: '[Inserire nome e cognome]',
    ruolo: '[Inserire ruolo]',
    bio: '[Inserire breve biografia e percorso professionale]',
    foto: '',
  },
];

export const daCompletare = (v: string) => !v || v.trim().startsWith('[');
