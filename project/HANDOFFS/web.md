# Web Handoff

Owner: WEB workstream

## Current milestone

WEB M0: COMPLETE.
WEB M1 architecture and launch plan: APPROVED.
WEB M1 visual foundation: APPROVED.
WEB M1 implementation: COMPLETE and merged to `main` as `a4f0609083b2bb81af4e43bdec6e906d4ff6ffa4`.

## M1 delivered scope

Public/editorial routes:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

Shared frontend structure includes a base layout, header, footer and global styles.

Validation completed before merge:
- `npm ci` passed with 0 vulnerabilities;
- `npm run check` passed with 0 errors, 0 warnings and 0 hints;
- `npm run build` passed with four static routes;
- responsive review passed at 375 px, 768 px and 1440 px;
- semantic landmarks, one H1 per page, skip link and visible keyboard focus were reviewed;
- production output contained HTML/CSS only and no client-side JavaScript;
- full diff remained inside `apps/web/`.

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

## M1 boundaries retained

M1 must not include:
- compound pages;
- scientific claims/doses/protocols;
- fake studies or mock scientific data;
- Evidence API invented by frontend;
- ecommerce/product grids/pricing;
- definitive Evidence badges/taxonomy;
- colors or components mapped to Evidence taxonomy;
- a definitive/global Design System unless separately approved.

## M2 gate

WEB M2 remains BLOCKED and requires both:
1. an approved Evidence public contract;
2. production-ready scientific content.

WEB must not bypass this gate with manual scientific pages or invented data.

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

## Launch hardening

Before production launch, resolve/review:
- primary public language;
- production domain and hosting;
- final brand/favicons;
- CI for `npm run check` + `npm run build`;
- current Google Fonts loading versus self-hosting for privacy/performance;
- legal/privacy review appropriate to the final production setup.
