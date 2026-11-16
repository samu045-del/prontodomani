// Punto d'ingresso del Worker: /api/richiesta va al modulo,
// tutto il resto è il sito statico generato da Astro (cartella dist).
import { gestisciRichiesta, type Env } from './richiesta';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/richiesta') {
      if (request.method === 'POST') return gestisciRichiesta(request, env);
      return Response.redirect(new URL('/#richiesta', url).toString(), 303);
    }

    return env.ASSETS.fetch(request);
  },
};
