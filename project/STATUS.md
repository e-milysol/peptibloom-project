# PeptiBloom Status Board

Last coordination baseline: 2026-08-17.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0 complete; M1 architecture/launch plan, visual foundation and implementation complete; temporary Cloudflare Workers deployment active | launch hardening/open launch decisions; multilingual routing implementation after default-locale decision; WEB M2 remains blocked |
| Operative Core | v1 final migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization; PostgreSQL runtime smoke before deployment |
| Evidence | architecture/reconciliation in progress | approved public read contract before WEB M2 |
| Scientific Inventory | source/review workflow in progress | production-ready handoff to Evidence Layer |

## Web

M0 was merged to `main` as commit `5fded280cb587a054b87583ec4ee3e381171b93a` at the original coordination baseline.

WEB M1 implementation was validated and merged to `main` as commit `a4f0609083b2bb81af4e43bdec6e906d4ff6ffa4`.

M1 now provides the public/editorial foundation for:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

The M1 visual direction remains `Editorial Evidence / Warm Scientific`, using the M1-local palette, Source Serif 4 + Source Sans 3, editorial rather than dashboard composition, decorative-only Evidence Halo geometry, explicit visual treatment of uncertainty, and an editorial Library rather than a product grid.

M1 intentionally excludes compound pages, scientific mocks, ecommerce and Evidence API integration. Evidence taxonomy semantics remain out of scope.

A temporary public Cloudflare Workers deployment is active from `main` using the Git-connected `apps/web` build. This validates the current Astro static deployment path but does not close the production domain/hosting decision.

The public web is approved as multilingual with minimum supported locales English (`en`), Spanish (`es`) and French (`fr`). New web work must remain localization-ready. PB-DEC-002 remains open, so the primary/default locale, URL-prefix strategy and fallback behavior must not be inferred from the current English M1 copy.

Launch hardening/open decisions still include primary public language, production domain/hosting, final brand/favicons, CI and the pre-production decision on external Google Fonts versus self-hosting.

## Operative Core

Operative Core v1 data-layer implementation was validated and merged to `main` as commit `05aff5f7e558d2f29fecf7551f76045e7a397c55`.

Delivered canonical model set:
- Product and SKU;
- Supplier, Manufacturer, Reception, Batch, StockUnit and Movement;
- Document;
- initial migrations for products, inventory and documents;
- model tests covering the approved v1 rules.

Validation before merge included Django system check, migration drift check, migration plan review, 7/7 model tests and full diff review. The available validation environment did not provide PostgreSQL; database-dependent checks used an untracked SQLite in-memory settings override. PostgreSQL runtime smoke remains non-blocking deployment hardening.

The merged implementation preserves the approved rules: `PROTECT` on the nine closed FKs, no persisted `StockUnit.available_quantity`, stock represented through `Movement`, no Batch uniqueness constraint, no invented choices for `Reception.status` or `StockUnit.status`, no extra indexes and no Evidence relationship.

No serializer/viewset/admin/QR or other follow-on operational surface is implied by completion of this v1 data-layer gate; such work requires a new authorized scope.

## Evidence / Scientific Inventory

WEB M2 is BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

## Coordination

The files under `project/` supersede manual cross-chat copy/paste for shared project state after this protocol is merged.
