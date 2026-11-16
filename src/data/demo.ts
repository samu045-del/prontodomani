// =====================================================================
// BOZZE RISERVATE PER L'OUTREACH
// Ogni voce diventa una pagina prontodomani.it/demo/<slug>, non
// indicizzata e non presente nella sitemap.
// Le immagini vanno in public/demo/<slug>/ (parte-1.webp, parte-2.webp...).
// =====================================================================

export type Demo = {
  slug: string;
  club: string;
  immagini: string[];
  larghezza: number; // larghezza in px delle immagini
  altezze: number[]; // altezza in px di ogni immagine, stesso ordine
};

export const demo: Demo[] = [
  {
    slug: 'libertas-san-bartolomeo',
    club: 'Libertas San Bartolomeo',
    immagini: ['parte-1.webp', 'parte-2.webp', 'parte-3.webp'],
    larghezza: 1636,
    altezze: [2080, 2105, 2088],
  },
];
