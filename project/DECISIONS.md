# PeptiBloom Decision Registry

Only approved decisions belong here. Proposals remain in domain handoffs or open requests until approved.

| ID | Decision | Status |
|---|---|---|
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
| PB-DEC-117 | New public-web work must remain localization-ready; the primary/default locale and URL-prefix/fallback policy must not be inferred while PB-DEC-002 remains open | APPROVED |
| PB-DEC-200 | Operative Core stock is derived from Movement history | APPROVED |
| PB-DEC-201 | `StockUnit.available_quantity` is excluded from Operative Core v1 persistence | APPROVED |
| PB-DEC-202 | Operative Core v1 FK deletion policy uses PROTECT where closed in the final migration contract | APPROVED |
| PB-DEC-300 | Missing cross-domain canon must not be inferred | APPROVED |
| PB-DEC-301 | Cross-domain dependencies use `PB-XD-NNN` requests | APPROVED |

## Explicitly not closed by WEB M1 visual approval

The following remain outside this approval and must not be inferred as global canon:

- definitive Evidence status colors, Evidence badges or Evidence component taxonomy;
- complete PeptiBloom Design System / PB-DS-000;
- dark mode;
- animation language;
- complete icon system;
- definitive Compound detail layout;
- final scientific dense-data/table patterns;
- OpenGraph art and final brand asset set;
- public launch primary language;
- production domain and hosting.

## Open decisions

Open decisions are tracked in `PROJECT_STATE.yaml` and/or `BLOCKERS.md`; they are not canon until approved.
