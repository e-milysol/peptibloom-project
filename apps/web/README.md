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

The current implementation copy is in English for this working branch. The primary public-launch language remains an open project decision and is not closed by WEB M1 implementation.
