# PeptiBloom Decision Registry

Only approved decisions belong here. Proposals remain in domain handoffs or open requests until approved.

| ID | Decision | Status |
|---|---|---|
| PB-DEC-001 | Repository governance: `main` must be protected by policy. Changes go through Pull Requests; force-push and deletion of `main` are not allowed; required checks may be enforced only when the checks actually exist, are stable and are appropriate for the repository. Owner approval date: 2026-09-03. This approves the policy, not the GitHub repository-settings mutation; technical enforcement remains pending configuration. | APPROVED |
| PB-DEC-002 | Public Web locale policy: Spanish (`es`) is the primary/default locale and is unprefixed; English uses `/en/`; French uses `/fr/`; localized URLs must not silently serve another language when localized content is unavailable. Minimum multilingual support remains `es` / `en` / `fr`. Owner approval date: 2026-08-28. | APPROVED |
| PB-DEC-003 | Web / Infrastructure: PeptiBloom's permanent production canonical domain is `https://peptibloomproject.com` and Cloudflare Workers is the approved production hosting. Public Web/SEO references may treat this URL as the production origin. Any material future domain or hosting change requires a new Owner decision. Owner approval date: 2026-08-18. | APPROVED |
| PB-DEC-100 | Public web uses Astro + TypeScript strict | APPROVED |
| PB-DEC-101 | API uses Django + DRF; PostgreSQL intended | APPROVED |
| PB-DEC-102 | Public web is not the scientific source of truth | APPROVED |
| PB-DEC-103 | WEB M1 can proceed without Evidence API integration | APPROVED |
| PB-DEC-104 | Compound pages wait for approved Evidence contract and production-ready scientific content | APPROVED |
| PB-DEC-105 | Evidence, Transparency and Traceability are transversal PeptiBloom principles, not mandatory navigation silos | APPROVED |
| PB-DEC-106 | Scientific and commercial surfaces must remain distinguishable | APPROVED |
| PB-DEC-107 | WEB M1 visual direction is `Editorial Evidence / Warm Scientific`; this is an M1 implementation foundation, not the global PeptiBloom Design System | APPROVED |
| PB-DEC-108 | WEB M1 palette roles and implementation colors are Warm Porcelain `#FCFAFB`, Paper `#FFFFFF`, Soft Bloom Surface `#F7F2F7`, Hairline `#E6DDE5`, Ink `#241D25`, Muted Ink `#665D67`, Mulberry `#7A3F68`, Dusty Rose `#C86F9A`, Lavender `#8B7BB8`, Lavender Deep `#66558E` | APPROVED |
| PB-DEC-109 | WEB M1 typography uses Source Serif 4 for editorial/headings/body and Source Sans 3 for navigation, metadata and references | APPROVED |
| PB-DEC-110 | WEB M1 layout uses editorial width ranges: ~1200–1240 px page frame, ~700–760 px reading width and ~1040–1120 px dense scientific width; component language is editorial rather than dashboard/card-grid driven | APPROVED |
| PB-DEC-111 | Evidence Halo geometry may be used only as decorative abstract identity; it must not imply or encode scientific evidence or relationships | APPROVED |
| PB-DEC-112 | WEB M1 Home hierarchy follows Hero → Purpose → Scientific Library → Methodology → Uncertainty/what we show → Transparency → Footer, with uncertainty receiving visual weight comparable to supported findings | APPROVED |
| PB-DEC-113 | Scientific Library visual language is editorial rather than product-grid/ecommerce; M1 uses mobile-first responsive behavior and progressive disclosure | APPROVED |
| PB-DEC-114 | WEB M1 does not map colors, badges or components to Evidence taxonomy; scientific status semantics wait for approved Evidence canon | APPROVED |
| PB-DEC-115 | WEB M1 implementation is authorized inside `apps/web/` after normal repository/branch verification; scope remains the approved M1 public foundation and excludes Evidence/API, ecommerce and scientific mock data | APPROVED |
| PB-DEC-116 | PeptiBloom public web is multilingual and must support at minimum English (`en`), Spanish (`es`) and French (`fr`) | APPROVED |
| PB-DEC-117 | New public-web work must remain localization-ready and implement locale routing consistently with PB-DEC-002; translations must preserve scientific meaning/provenance and must not silently substitute another locale when localized content is unavailable. | APPROVED |
| PB-DEC-200 | Operative Core stock is derived from Movement history | APPROVED |
| PB-DEC-201 | `StockUnit.available_quantity` is excluded from Operative Core v1 persistence | APPROVED |
| PB-DEC-202 | Operative Core v1 FK deletion policy uses PROTECT where closed in the final migration contract | APPROVED |
| PB-DEC-300 | Missing cross-domain canon must not be inferred | APPROVED |
| PB-DEC-301 | Cross-domain dependencies use `PB-XD-NNN` requests | APPROVED |
| PB-DEC-400 | WORK 6 owns App Core, the authenticated PeptiBloom site/app domain. Product Design v0.1 and Technical Design / UX IA v0.1 are Owner approved; MVP Architecture is approved for contract/wireflow work, not production implementation | APPROVED |
| PB-DEC-401 | App Core architectural direction is a modular monolith with Django/DRF/PostgreSQL and Angular/Ionic for the authenticated application; microservices are not required for the MVP | APPROVED |
| PB-DEC-402 | App Core Personal Inventory uses immutable `INVENTORY_MOVEMENT` history as source of truth; any persisted `current_quantity` is a materialized transactional balance, not an independently editable source | APPROVED |
| PB-DEC-403 | Compound pages in App Core remain `FUTURE / EVIDENCE-GATED`; no placeholder scientific content may bypass the Evidence/publication gate | APPROVED |
| PB-DEC-500 | WORK 7 owns the Private Master in `e-milysol/peptibloom-private-master`; it is separate from App Core and must use separate database, deployment, storage and credentials, with only sanitized coordination state entering the public Control Plane | APPROVED |
| PB-DEC-501 | Physical Products / Accessories is an independent canonical domain and durable source of truth for physical product identity/design/provenance/specification, factual IP/license and commercial-use permission evidence, prototype and physical/manufacturing validation state, intended physical use/limitations and sanitized product-truth handoffs. It does not replace Operative Core Product/SKU/inventory, does not own WORK 7 private operational truth, Legal clearance, Evidence, Web publication, pricing/payments/sales or `READY_FOR_SALE`; physical identifiers are not implicitly shared across domains; readiness states remain orthogonal; PB-XD is required before another domain relies on a material/automated shared contract or semantics. Owner approval date: 2026-08-19. | APPROVED |
| PB-DEC-502 | Physical Products / Accessories: Clean-Sheet Physical Design Pipeline v0.1 is Owner approved under the domain authority established by PB-DEC-501. The approved model keeps PRODUCT_ID, DESIGN_ID, REVISION_ID, PROTOTYPE_BUILD_ID and VALIDATION_RECORD_ID semantically distinct; establishes physical-design gates G0–G6; requires requirements before controlled geometry and measured interface evidence before interface-dependent CAD; preserves immutable revision lineage and first-class failure, build, test and validation evidence; and uses NOT_EVIDENCED, PRINT_EVIDENCED, FIT_TEST_EVIDENCED, VALIDATION_INCOMPLETE, VALIDATION_PASSED and VALIDATION_FAILED as the physical-validation vocabulary. Bambu Lab P1S with AMS multi-filament/multicolor capability is recorded as current fabrication capability; multicolor is optional and color does not automatically create a new PRODUCT_ID. Storage implementation and permanent ID syntax remain unapproved/proposed. This decision does not grant READY_FOR_SALE, publication, Commerce, Legal/IP, procurement or payment authority and does not alter PB-DEC-501 cross-domain boundaries. Owner approval date: 2026-08-19. | APPROVED |

## Explicitly not closed by WEB M1 visual approval

The following remain outside this approval and must not be inferred as global canon:

- definitive Evidence status colors, Evidence badges or Evidence component taxonomy;
- complete PeptiBloom Design System / PB-DS-000;
- dark mode;
- animation language;
- complete icon system;
- definitive Compound detail layout;
- final scientific dense-data/table patterns;
- OpenGraph art and final brand asset set.

## Open decisions

Open decisions are tracked in `PROJECT_STATE.yaml` and/or `BLOCKERS.md`; they are not canon until approved.
