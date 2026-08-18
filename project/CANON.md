# PeptiBloom Shared Canon

## Project identity

PeptiBloom is being built as a scientific research library and research-oriented ecosystem. Scientific credibility, transparency and traceability take precedence over commercial persuasion.

## Brand identity

- The canonical PeptiBloom master logo is `apps/web/public/brand/logo.png`.
- This logo is the approved visual source of truth and must not be regenerated, silently replaced or substituted by ad-hoc AI variants.
- All new PDFs, catalogues, price lists, email/signature assets, social assets, presentations and web branding work must reuse the canonical logo or an approved derivative documented in `project/BRAND_GUIDE.md`.
- If a technical context requires a compact, transparent, monochrome or favicon variant, derive it from the canonical logo and record the approved derivative rather than redesigning the identity.
- The master logo must not be used directly as a favicon. Existing `apps/web/public/favicon.ico` and `apps/web/public/favicon.svg` remain temporary technical legacy assets until an approved compact derivative replaces them.
- Header, footer and social previews may use the master where it is visually suitable; the public web must reuse its shared brand component rather than implementing independent copies.
- Former provisional header/footer isotopes are not approved derivatives and must not be reintroduced.

## Scientific publication principles

- Clearly distinguish what is known, unknown, theoretical, contradictory and anecdotal.
- Do not present opinion as fact.
- Do not create scientific claims, studies, compounds or evidence to fill UI.
- Evidence provenance must remain inspectable.
- Scientific content intended for production must pass the approved Evidence/Scientific Inventory process.

## Architecture boundaries

### Public web
- Location: `apps/web/`.
- Stack: Astro + TypeScript strict.
- The web is a presentation/consumption surface, not the scientific source of truth.
- WEB M1 may launch institutional/editorial pages without Evidence API integration.
- Compound pages require an approved Evidence public contract and production-ready scientific content.
- The public web is multilingual and must support at minimum English (`en`), Spanish (`es`) and French (`fr`).
- New public-web routes, components and copy structures must remain localization-ready rather than assuming a single language.
- The primary/default locale, URL-prefix policy and fallback behavior remain open until explicitly approved; they must not be inferred from the current English M1 copy.

### App Core / WORK 6
- WORK 6 owns the authenticated PeptiBloom application / site app.
- App Core is distinct from the public Astro editorial web and distinct from the private operational master.
- Product Design v0.1 and Technical Design / UX IA v0.1 are Owner approved; the MVP architecture is approved for the contract/wireflow phase only.
- Production implementation is not authorized yet.
- Real health/wellness data must not be collected until the applicable Legal/Privacy, Security and Owner production gates are approved.
- Payments/subscriptions and external integrations are not authorized in the current MVP scope.
- Product Analytics expansion remains blocked until its canonical production gates are satisfied.
- Compound pages inside any App Core navigation or future experience remain `FUTURE / EVIDENCE-GATED`; no scientific placeholders may be used to bypass the Evidence gate.

### Private Master / WORK 7
- WORK 7 owns the private Inventory / Procurement / Landed Cost application.
- Its implementation repository is the private repository `e-milysol/peptibloom-private-master`.
- The Private Master is not the App Core Personal Inventory.
- App Core and Private Master must not share a database, document storage, credentials, health identity, implicit synchronization or cross-domain foreign keys unless a future explicit cross-domain contract approves a specific interface.
- Restricted supplier, purchasing, logistics, cost, document and related operational data must not be copied into the public repository. The public Control Plane receives sanitized status only.

### API
- Location: `apps/api/` for the existing public-project API surface unless a later approved domain design specifies otherwise.
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
