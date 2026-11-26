// Punto d'ingresso del Worker: /api/richiesta va al modulo,
// tutto il resto è il sito statico generato da Astro (cartella dist).
import { gestisciRichiesta, type Env } from './richiesta';
import { demo, scaduta } from '../src/data/demo';

// dominio del cliente -> cartella in public/siti/
const SITI_CLIENTI: Record<string, string> = {
  'kingegnere.com': 'kingegnere',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Siti dei clienti ospitati su questo Worker, per dominio.
    const sito = SITI_CLIENTI[url.hostname.replace(/^www\./, '')];
    if (sito) {
      if (url.hostname.startsWith('www.')) {
        url.hostname = url.hostname.slice(4);
        return Response.redirect(url.toString(), 301);
      }
      const percorso = url.pathname;
      const interno = new URL(`/siti/${sito}${percorso}`, url);
      const r = await env.ASSETS.fetch(new Request(interno, request));
      if (r.status === 404) return env.ASSETS.fetch(new Request(new URL(`/siti/${sito}/`, url), request));
      return r;
    }

    // Le cartelle dei clienti non si vedono da prontodomani.it.
    if (url.pathname.startsWith('/siti/')) {
      const p = await env.ASSETS.fetch(new Request(new URL('/404', url), request));
      return new Response(p.body, { status: 404, headers: p.headers });
    }

    if (url.pathname === '/api/richiesta') {
      if (request.method === 'POST') return gestisciRichiesta(request, env);
      return Response.redirect(new URL('/contatti/', url).toString(), 303);
    }

    // Bozze riservate: dopo la scadenza mostrano "non più disponibile".
    const bozza = url.pathname.match(/^\/demo\/([^/]+)/);
    if (bozza) {
      const d = demo.find((x) => x.slug === bozza[1]);
      if (d && scaduta(d)) {
        const pagina = await env.ASSETS.fetch(new Request(new URL('/demo-scaduta/', url), request));
        return new Response(pagina.body, {
          status: 410,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-store',
            'X-Robots-Tag': 'noindex',
          },
        });
      }
      const risposta = await env.ASSETS.fetch(request);
      const intestazioni = new Headers(risposta.headers);
      intestazioni.set('X-Robots-Tag', 'noindex, nofollow, noimageindex');
      intestazioni.set('Cache-Control', 'no-store');
      return new Response(risposta.body, { status: risposta.status, headers: intestazioni });
    }

    return env.ASSETS.fetch(request);
  },
};
