# Web Handoff

Owner: WEB workstream

## Current milestone

WEB M0: COMPLETE.
WEB M1 architecture and launch plan: APPROVED.
WEB M1 visual foundation: APPROVED.
WEB M1 implementation: COMPLETE and merged to `main` as `a4f0609083b2bb81af4e43bdec6e906d4ff6ffa4`.
Public calculator and calculator visual/comparison enhancement: COMPLETE through merged PRs #20 and #21.
Approved Home/Scientific Library visual enrichment: COMPLETE through merged PR #23 as `b0f4c45c1450541b812e2d96676683b9b2bab6df`.
A temporary Cloudflare Workers deployment from `main` is active and validates the Astro deployment path.

## M1 delivered scope

Public/editorial routes:
- `/`
- `/library/`
- `/methodology/`
- `/about/`
- `/calculator/`

Shared frontend structure includes a base layout, header, footer and global styles. The calculator uses calculator-only progressive enhancement for its interactive mathematical visualization and comparisons.

Initial M1 validation completed before the `a4f0609083b2bb81af4e43bdec6e906d4ff6ffa4` merge:
- `npm ci` passed with 0 vulnerabilities;
- `npm run check` passed with 0 errors, 0 warnings and 0 hints;
- `npm run build` passed with four static routes;
- responsive review passed at 375 px, 768 px and 1440 px;
- semantic landmarks, one H1 per page, skip link and visible keyboard focus were reviewed;
- at that milestone, production output contained HTML/CSS only and no client-side JavaScript;
- full diff remained inside `apps/web/`.

## Current merged Web additions

- PR #20 added the public deterministic concentration calculator at `/calculator/`.
- PR #21 added the syringe-scale visualization and final-volume comparisons through calculator-only JavaScript/CSS.
- PR #22 added the evidence-first organic-growth/SEO foundation; its canonical-origin implementation does not close PB-DEC-003.
- PR #23 enriched the Home and Scientific Library presentation within the approved M1 visual foundation. Post-merge `npm run check`, `npm run build` and responsive/browser QA passed for the five public routes.
- These additions do not authorize compound-specific dosing, routes, frequencies, regimens, reconstitution recommendations, invented scientific content, Evidence schema, ecommerce or inventory coupling.

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

## Multilingual public web requirement

The public web must support at minimum:
- English: `en`
- Spanish: `es`
- French: `fr`

This requirement is approved canon. It does **not** close PB-DEC-002: the primary/default locale for launch remains open.

Until PB-DEC-002 is approved, WEB must not silently choose:
- the default locale;
- whether the default locale is URL-prefixed;
- browser-language redirect behavior;
- fallback relationships between locales.

All new public-web work must remain localization-ready. In practice:
- do not introduce new shared navigation/UI copy in a way that requires duplicating component markup per language;
- keep locale-dependent copy separable from structural/layout code;
- do not hardcode internal URLs when locale-aware URL helpers become available;
- when Astro i18n routing is enabled, use its locale-aware routing helpers rather than manual string concatenation where practical;
- every localized page must emit the correct HTML `lang` value;
- language switching must remain keyboard accessible and must not rely on flags alone to communicate language;
- localized equivalents of a scientific page must preserve the same scientific identity/provenance rather than becoming independent scientific records;
- translations must not invent or strengthen scientific claims; scientific meaning, uncertainty and evidence qualifiers must remain equivalent across locales;
- source titles/citations should preserve source provenance; translation of presentation text must not alter the underlying citation identity;
- once localized routes exist, QA/build review must cover all supported locales and broken cross-locale links.

Recommended implementation sequence after PB-DEC-002 closes:
1. configure Astro `i18n` with `locales: ["en", "es", "fr"]` and the approved `defaultLocale`;
2. explicitly choose `prefixDefaultLocale`/fallback behavior according to the approved URL policy;
3. centralize shared UI strings and locale metadata;
4. introduce locale-aware internal-link helpers and a language selector;
5. add localized routes/content progressively without duplicating scientific entities;
6. add canonical/hreflang metadata and per-locale QA before production launch.

## Cloudflare deployment

Current deployment model:
- Cloudflare Workers Builds connected to GitHub;
- repository: `e-milysol/peptibloom-project`;
- root directory: `apps/web`;
- build command: `npm run build`;
- deploy command: `npx wrangler@latest deploy`;
- static output: `./dist` via `apps/web/wrangler.jsonc`.

During preview/hardening, `workers_dev` and versioned preview URLs are intentionally enabled. The current Web/SEO implementation emits `https://peptibloomproject.com` as its canonical origin, but production domain/hosting remains open and PB-DEC-003 remains `OWNER_REQUIRED`. This observed implementation state does not close the decision.

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
- primary public/default language;
- default-locale URL-prefix/fallback behavior;
- production domain and hosting.

## Launch hardening

Before production launch, resolve/review:
- primary/default public language and i18n URL policy;
- production domain and hosting;
- final brand/favicons;
- CI for `npm run check` + `npm run build`;
- current Google Fonts loading versus self-hosting for privacy/performance;
- canonical/hreflang metadata once localized routes exist;
- legal/privacy review appropriate to the final production setup.
