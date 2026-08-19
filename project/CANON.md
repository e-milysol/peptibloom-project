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
- The permanent production canonical domain is `https://peptibloomproject.com`.
- Cloudflare Workers is the approved production hosting for PeptiBloom Web.
- Web, SEO, sitemap, canonicals, metadata and other public references may treat `https://peptibloomproject.com` as the production origin.
- This approval does not automatically authorize new providers, infrastructure, redirects, DNS changes, hosting platforms, Analytics changes or Privacy changes. Any material future domain or hosting change requires a new Owner decision.

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

### Physical Products / Accessories
- Physical Products / Accessories is an independent canonical domain and durable source of truth for physical product identity, stable physical product and variant identity, source/design provenance, controlled geometry/source-file references, design revision/state, intended physical material/specification, factual documented IP/license evidence, factual commercial-use permission evidence, prototype state, physical validation state, objective validation criteria/evidence, manufacturing/printability validation facts, physical intended use/limitations, and sanitized product-truth handoffs.
- This authority does not replace, reassign or redefine Operative Core `Product`, `SKU` or inventory models.
- A Physical Products product or variant identifier is not implicitly identical to Operative Core `Product.id`, SKU identity, storefront identity or any identifier owned by another domain.
- WORK 7 / Private Master remains authoritative for private supplier, procurement, inventory, logistics, landed-cost and related private operational truth. Private supplier identities/contacts, procurement prices, landed cost, tracking, payment information, invoices, margins and private operational records must not be copied into the public Control Plane.
- Physical Products may record factual IP/license evidence and documentary commercial-use permission evidence, but it does not perform legal interpretation or grant Legal clearance.
- Physical Products does not own scientific claims or Evidence, Web implementation/publication, storefront/sales funnel, pricing presentation, cart/checkout, payments/payment-provider authorization, legal/regulatory approval or `READY_FOR_SALE`.
- Readiness is orthogonal. At minimum `DESIGN_STATE`, `LICENSE_IP_STATE` and `PHYSICAL_VALIDATION_STATE` remain separate. Physical validation does not imply legal clearance, publication authorization, commercial readiness or authorization to sell.
- `READY_FOR_SALE` remains outside Physical Products and depends on applicable commercial, Legal, regulatory, territorial, pricing, payment-provider and Owner gates.
- Continued domain-local reconciliation does not itself require PB-XD. Before Commerce, Web, WORK 7, Operative Core or another domain relies on a material/automated Physical Products data contract, identifier mapping, synchronization mechanism or shared semantic interface, an explicit `PB-XD-NNN` contract is required.
- New controlled physical geometry must follow the Owner-approved Clean-Sheet Physical Design Pipeline v0.1. Requirements precede controlled geometry, and interface-dependent geometry requires measured interface evidence before dependent CAD.
- Physical product/design identity, design revision, physical prototype build and validation evidence remain distinct control layers. Revision and failure history must remain traceable rather than being destructively overwritten.
- Editable/parametric design source is the preferred geometry authority where feasible. Printable exports, slicer projects and machine output are controlled downstream fabrication artifacts and must not silently replace editable design authority.
- Physical design uses gates G0 Intake Complete, G1 Requirements Ready, G2 Interfaces Measured, G3 Design Ready for Prototype, G4 Print Evidenced, G5 Fit/Function Evidenced and G6 Physical Validation Complete. These gates govern physical design/validation only and do not imply `READY_FOR_SALE`, publication authorization, Legal/IP clearance or Commerce authorization.
- Current Physical Products fabrication capability includes Bambu Lab P1S with AMS multi-filament/multicolor capability. Multicolor is optional and does not by itself define physical product identity.

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
