import type { APIRoute } from 'astro';
import { preLancio } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const corpo = preLancio
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /grazie\nDisallow: /demo/\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
