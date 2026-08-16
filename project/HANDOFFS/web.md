# Web Handoff

Owner: WEB workstream

## Current milestone

WEB M0: COMPLETE.
WEB M1 architecture and launch plan: APPROVED.
WEB M1 visual foundation: APPROVED.
WEB M1 implementation: APPROVED to start after repository/branch verification.

## M1 approved direction

Build a small legitimate public/editorial site before the scientific library is populated.

Planned routes:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

Expected shared frontend structure may include a base layout, header, footer and global styles.

## Approved M1 visual foundation

Direction: `Editorial Evidence / Warm Scientific`.

This is an implementation foundation for WEB M1 only; it is not the complete/global PeptiBloom Design System.

Palette roles and implementation colors:
- Warm Porcelain: `#FCFAFB`
- Paper: `#FFFFFF`
- Soft Bloom Surface: `#F7F2F7`
- Hairline: `#E6DDE5`
- Ink: `#241D25`
- Muted Ink: `#665D67`
- Mulberry: `#7A3F68`
- Dusty Rose: `#C86F9A`
- Lavender: `#8B7BB8`
- Lavender Deep: `#66558E`

Typography:
- Source Serif 4: headings, display and editorial/body reading.
- Source Sans 3: navigation, metadata, references and structured support text.

Layout ranges:
- page frame: approximately 1200–1240 px;
- editorial reading width: approximately 700–760 px;
- dense scientific width reserved for future use: approximately 1040–1120 px.

Visual/component language:
- editorial rather than dashboard;
- restrained surfaces, borders and shadows;
- avoid card-grid saturation;
- Evidence Halo geometry may be used only as decorative abstract identity and must not encode scientific meaning;
- Library should read as an editorial/scientific library, never a product grid;
- mobile-first responsive behavior and progressive disclosure;
- supported findings and uncertainty should receive comparable visual dignity.

Home hierarchy:
`Hero -> Purpose -> Scientific Library -> Methodology -> Uncertainty / what we show -> Transparency -> Footer`

## M1 must communicate

- PeptiBloom identity as a scientific/editorial project.
- Scientific Library as the central knowledge destination.
- Evidence, Transparency and Traceability as observable principles.
- Methodology and ownership/transparency.
- Uncertainty and evidence gaps as legitimate outputs of scientific review.

## M1 must not include

- compound pages;
- scientific claims/doses/protocols;
- fake studies or mock scientific data;
- Evidence API invented by frontend;
- ecommerce/product grids/pricing;
- definitive Evidence badges/taxonomy;
- colors or components mapped to Evidence taxonomy;
- a definitive/global Design System unless separately approved.

## M1 implementation gate

Implementation is authorized inside `apps/web/`.

Before editing code:
1. re-read `PROJECT_STATE.yaml`, `CANON.md`, `DECISIONS.md`, `STATUS.md`, this handoff and open requests;
2. verify current `main` and local working tree;
3. preserve unrelated/local work;
4. use a dedicated WEB M1 feature branch;
5. keep changes inside `apps/web/` unless a new dependency is explicitly approved.

Before proposing merge:
- `npm run check` must pass;
- `npm run build` must pass;
- review responsive behavior and keyboard/focus accessibility;
- review the full diff;
- report any implementation choice not directly dictated by approved M1 canon.

## M2 gate

Requires an approved Evidence public contract and production-ready scientific content.

## Still open / not global canon

- Evidence status colors/badges/components;
- full PeptiBloom Design System / PB-DS-000;
- dark mode;
- animation language;
- complete icon system;
- final Compound-page layout;
- final scientific dense-data/table patterns;
- primary public language;
- production domain and hosting.

## Known non-blocking hardening

- replace Astro scaffold favicons before public launch;
- consider `private: true` for the web package;
- add CI for `npm run check` + `npm run build`;
- resolve primary language, domain and hosting before production.
