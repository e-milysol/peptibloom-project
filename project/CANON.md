# PeptiBloom Shared Canon

## Project identity

PeptiBloom is being built as a scientific research library and research-oriented ecosystem. Scientific credibility, transparency and traceability take precedence over commercial persuasion.

## Scientific publication principles

- Clearly distinguish what is known, unknown, theoretical, contradictory and anecdotal.
- Do not present opinion as fact.
- Do not create scientific claims, studies, compounds or evidence to fill UI.
- Evidence provenance must remain inspectable.
- Scientific content intended for production must pass the approved Evidence/Scientific Inventory process.

## Architecture boundaries

### Public web
- Location: `apps/web/`
- Stack: Astro + TypeScript strict.
- The web is a presentation/consumption surface, not the scientific source of truth.
- WEB M1 may launch institutional/editorial pages without Evidence API integration.
- Compound pages require an approved Evidence public contract and production-ready scientific content.
- The public web is multilingual and must support at minimum English (`en`), Spanish (`es`) and French (`fr`).
- New public-web routes, components and copy structures must remain localization-ready rather than assuming a single language.
- Spanish (`es`) is the primary/default locale. The site must not redirect automatically based on browser language.
- The language selector must be visible and keyboard accessible, identify each language with text, and may display `🇪🇸 ES · 🇺🇸 EN · 🇫🇷 FR`; flags must not be the sole language indicator.
- URL-prefix and fallback policy remain to be defined in the technical i18n gate.
- Production is hosted on Cloudflare Workers at the canonical URL `https://peptibloomproject.com`.
- `www.peptibloomproject.com` redirects with HTTP 301 to the root hostname while preserving path and query. HTTPS is active, nameservers are delegated to Cloudflare, and IONOS domain protection is active.

### API
- Location: `apps/api/`
- Stack: Django + Django REST Framework.
- PostgreSQL is the intended database.

### Operative Core
- `products`, `inventory` and `documents` are operational domains.
- No relationship with `evidence` may be invented without cross-domain approval.
- Stock is derived from `Movement` history; `StockUnit.available_quantity` is not persisted in Operative Core v1.

### Evidence
- Evidence remains independent from operational inventory unless an explicit cross-domain contract is approved.
- UI requirements must not dictate the scientific schema.

## Web positioning

PeptiBloom's public scientific experience should make Evidence, Transparency and Traceability observable behaviours.

Reference editorial promise:

> Know what we know. Know what we don't.

The Scientific Library is the central knowledge destination. Science and commerce must remain structurally distinguishable.

## Governance

- GitHub repository state beats chat recollection for implementation facts.
- Approved decisions recorded here or in `DECISIONS.md` beat proposals in chat transcripts.
- Missing canon creates a decision request; it is not permission to infer.
- Cross-domain changes require a `PB-XD-NNN` request.
