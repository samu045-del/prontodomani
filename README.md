# prontodomani.it

Sito vetrina di ProntoDomani. Astro (sito statico) servito da un Cloudflare Worker, che gestisce anche il modulo (`/api/richiesta`).

## Cosa modificare e dove

| Cosa | File |
|---|---|
| Posti del mese, prezzi, dati aziendali, FAQ, settori, progetti | `src/data/site.ts` |
| Uscita dalla fase di anteprima (indicizzazione Google) | `preLancio` in `src/data/site.ts` |
| Colori e stili comuni | `src/styles/global.css` |
| Sezioni della home | `src/components/` |
| Privacy, cookie, condizioni (bozze) | `src/pages/privacy.astro`, `cookie.astro`, `condizioni.astro` |
| Invio del modulo | `worker/richiesta.ts` (instradamento in `worker/index.ts`) |
| Destinatario e mittente delle email del modulo | `vars` in `wrangler.jsonc` |

Ogni modifica salvata su GitHub (ramo `main`) viene pubblicata da Cloudflare in automatico in 1-2 minuti.

## Avvio in locale

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Per provare anche il Worker in locale: `npm run build && npx wrangler dev`.

## Impostazioni Cloudflare (Workers Builds)

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Segreti (Worker > Settings > Variables and Secrets, tipo "Secret"):
  - `TURNSTILE_SECRET_KEY`
  - `RESEND_API_KEY`

La chiave pubblica di Turnstile va in `turnstileSiteKey` dentro `src/data/site.ts`.

## Prima del lancio pubblico (preLancio = false)

- [ ] P.IVA, titolare e sede in `azienda`
- [ ] Nota IVA definitiva in `prezzi.notaIva`
- [ ] Privacy, cookie e condizioni verificate
- [ ] Consenso scritto di fccds.it ed emada.it (poi `consenso: true` + screenshot in `public/esempi/`)
- [ ] Alias info@prontodomani.it attivo su Aruba
- [ ] Modulo testato in produzione (una richiesta vera arrivata in casella)
