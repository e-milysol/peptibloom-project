# PeptiBloom Brand Guide

## Canonical logo

The official PeptiBloom master logo is:

`apps/web/public/brand/logo.png`

This file is the canonical visual reference for the PeptiBloom identity. It must not be regenerated, replaced by an AI-created alternative, or silently substituted by an older mark.

## Usage rule

Use the canonical logo consistently in:

- public web and product surfaces where the full logo is appropriate;
- PDF exports and reports;
- price lists and catalogues;
- email signatures and banners;
- presentations and commercial documents;
- social/profile assets;
- future brand collateral.

When a format requires a derivative asset (transparent background, compact mark, favicon, monochrome, email-safe size, dark-background version, social crop), create that derivative from the canonical master and record it in this guide. Do not redesign the logo during export.

## Current asset policy

- `apps/web/public/brand/logo.png` — **OFFICIAL / MASTER / DO NOT REGENERATE**.
- Existing `favicon.ico` and `favicon.svg` remain technical legacy assets until approved derivatives are created from the master logo.
- The master logo must not be used directly as a favicon; favicon adoption requires an approved compact derivative.
- Header, footer and social-preview surfaces may use the master logo where it remains visually legible. Web UI should render it through the shared `apps/web/src/components/BrandLogo.astro` component.
- The former provisional SVG header/footer isotopes are not approved derivatives and must not be reintroduced. If the master is unsuitable for a future UI context, use or request an approved derivative documented here.

## Brand continuity

PeptiBloom brand materials should preserve the identity visible in the master logo: refined scientific/wellness positioning, orchid/botanical cues, DNA motif, and the established pink/lavender/slate family. Exact colors should be sampled from approved brand assets rather than guessed or regenerated.

## Content and automation guardrail

Any agent, automation, Work session, export workflow, PDF generator, catalogue generator, or design task working on PeptiBloom must first check this guide and reuse the canonical asset. If the requested output cannot technically use the master image, it must use an approved derivative or request one; it must not invent a new PeptiBloom logo.

## Planned derivatives

Create only when needed and keep them in `apps/web/public/brand/`:

- `logo-transparent.png`
- `logo-mark.png`
- `logo-monochrome-light.png`
- `logo-monochrome-dark.png`
- `logo-email.png`
- `logo-social.png`
- `favicon.svg` / `favicon.ico` derived from the approved compact mark

Each derivative should be visually checked before being marked approved.
