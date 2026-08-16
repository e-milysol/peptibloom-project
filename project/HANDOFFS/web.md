# Web Handoff

Owner: WEB workstream

## Current milestone

WEB M0: COMPLETE.
WEB M1 architecture and launch plan: APPROVED.
WEB M1 visual foundation: PROPOSED; implementation is pending Technical Direction approval.

## M1 approved direction

Build a small legitimate public/editorial site before the scientific library is populated.

Planned routes:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

Expected shared frontend structure may include a base layout, header, footer and global styles. Visual tokens in M1 remain PROPOSED until a Design System is canonically approved.

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
- a definitive Design System unless separately approved.

## M2 gate

Requires an approved Evidence public contract and production-ready scientific content.

## Known non-blocking hardening

- replace Astro scaffold favicons before public launch;
- consider `private: true` for the web package;
- add CI for `npm run check` + `npm run build`;
- resolve primary language, domain and hosting before production.
