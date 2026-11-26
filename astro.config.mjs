import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prontodomani.it',
  trailingSlash: 'ignore',
  // Dal 22/11/2026 la home è la pagina per le società sportive.
  redirects: { '/societa-sportive': '/' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/psicologi') && !page.includes('/dentisti') && !page.includes('/societa-sportive') && !page.includes('/grazie') && !page.includes('/proposta-') && !page.includes('/esempi/') && !page.includes('/demo/') && !page.includes('/demo-scaduta') && !page.includes('/siti/'),
    }),
  ],
});
