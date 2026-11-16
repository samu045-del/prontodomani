import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prontodomani.it',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/grazie') && !page.includes('/demo/') && !page.includes('/demo-scaduta'),
    }),
  ],
});
