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
Scientific data will be consumed from the PeptiBloom Evidence Layer through the approved API contract.

Current milestone:

**WEB M0 — Astro bootstrap**
