# PeptiBloom Web

Public scientific website and library for PeptiBloom.

## Stack

- Astro
- TypeScript (strict)
- Node.js 22
- npm

## Development

Run:

    npm install
    npm run dev

## Validation

Run:

    npm run check
    npm run build

## Architecture

This application is the public web surface of the PeptiBloom monorepo.

Backend/API:

    ../api/

The web application must not become a source of truth for scientific content.
Scientific data will be consumed from the PeptiBloom Evidence Layer through an approved API contract when that contract exists.

## WEB M1

Current public/editorial routes:

- `/`
- `/library/`
- `/methodology/`
- `/about/`

WEB M1 intentionally contains no compound pages, scientific mock data, ecommerce or Evidence API integration.

The M1 visual foundation is `Editorial Evidence / Warm Scientific`. It is an approved implementation foundation for WEB M1, not the complete/global PeptiBloom Design System.

## Brand logo

The canonical logo asset is `public/brand/logo.png`. Shared interface surfaces must render it through
`src/components/BrandLogo.astro` so intrinsic dimensions, accessibility behavior and responsive treatment
remain consistent. Do not recreate or substitute the logo in individual components.

## Localization foundation

Spanish (`es`) is the primary/default locale and uses unprefixed routes. English uses `/en/` and French uses
`/fr/`. Shared interface strings live in `src/i18n/ui.ts`; locale policy and URL helpers live in
`src/i18n/config.ts`; the sitemap and shared navigation use the explicit publication inventory in
`src/i18n/routes.ts`.

No cross-language fallback is configured. Add a locale-prefixed route to the publication inventory only after its
complete page exists and is editorially approved. Do not add a language switcher or `hreflang` for a route until a
real equivalent destination exists.

The legacy Home, About, Library, Methodology and Calculator page bodies remain English on unprefixed routes and
require reviewed Spanish localization. Research Basics article bodies are Spanish and require scientific/editorial
review before English or French publication.
