# App Core Handoff — WORK 6

Owner: WORK 6 — App Core / authenticated PeptiBloom site app

## Scope

WORK 6 owns the authenticated PeptiBloom application experience that will complement the public editorial web.

Core product modules:

`TRACK · ROUTINES · INVENTORY · INSIGHTS`

Public discovery/trust utilities remain separate surfaces:

`LEARN · CALCULATE`

App Core is not the WORK 7 Private Master.

## Approved product state

- Product Design v0.1: `OWNER APPROVED`.
- Technical Design / UX IA v0.1: `OWNER APPROVED`.
- MVP Architecture: `APPROVED FOR CONTRACT / WIREFLOW PHASE`.
- Production implementation: `BLOCKED / NOT AUTHORIZED`.
- Real health/wellness data: `BLOCKED`.
- Payments/subscriptions: not authorized.
- External integrations: not authorized.
- Product Analytics expansion: `BLOCKED`.

## Approved technical direction

- App Core architecture: modular monolith.
- Backend direction: Django + Django REST Framework + PostgreSQL.
- Authenticated client direction: Angular/Ionic.
- No microservices are required for the MVP.
- Navigation: `Today · Track · Routines · Inventory · Insights`.
- JWT direction: short-lived access token plus rotating/revocable refresh token; final lifetimes, browser/mobile transport, CSRF/recovery and secure-storage details remain Security-review items.
- Recurrence MVP: daily, selected weekdays and every N days.
- Multiple occurrences per day: deferred.
- Correlations: outside MVP.
- Premium reporting: outside MVP.
- Payments and external integrations: outside current authorized MVP scope.

## Personal Inventory invariant

`INVENTORY_MOVEMENT = SOURCE OF TRUTH`.

If `current_quantity` is persisted for performance, it is a materialized transactional balance only:

- not directly editable;
- updated only by the domain service that creates the movement;
- movement + balance update must be atomic;
- locking/idempotency must prevent double application;
- reconciliation must verify `current_quantity == SUM(movements)`;
- corrections use reversal/adjustment movements instead of rewriting history.

No automatic inventory deduction may be inferred from a routine or assumed consumption event.

## Privacy / portability

- FREE and PLUS users retain basic data portability.
- Basic portability direction: ZIP containing UTF-8 CSV/JSON plus manifest/readme.
- FREE interactive history is limited to 90 days, but older data are not deleted merely because the entitlement window ends.
- Downgrading from PLUS must never delete user data.
- Health/wellness values, personal inventory contents, routine contents, notes and other sensitive user content must not be sent to Product Analytics.
- User content must not be placed in URLs/query strings.
- App Core must not share identities, credentials or implicit data links with the WORK 7 Private Master.

## Evidence boundary

Compound pages remain:

`FUTURE / EVIDENCE-GATED`.

They require an approved Evidence public contract plus production-ready scientific content and the applicable publication gate. Do not create placeholder scientific claims, studies, protocols or mock evidence to satisfy UI work.

## Current authorized phase

The following non-production work may continue:

- metric dictionary and versioned BMI calculation contract;
- recurrence/timezone contract using IANA timezone identifiers and DST tests;
- OpenAPI refinement for TRACK, ROUTINES, INVENTORY, INSIGHTS and privacy/export/delete flows;
- wireflows and low-fidelity UX;
- Django model/constraint refinement;
- inventory reconciliation invariant and synthetic test coverage;
- synthetic fixtures, including >90-day history, DST, multi-user isolation and inventory reconciliation cases;
- Security threat-model handoff;
- Legal/Privacy data-inventory handoff;
- revised role-based effort / critical-path planning.

## Production gates

Production implementation requires explicit Owner production authorization.

Real health/wellness data additionally requires:

1. Legal/Privacy approval;
2. Security approval;
3. Owner production authorization.

Product Analytics expansion additionally requires all canonical gates:

1. `ANALYTICS_CONTRACT_APPROVED`;
2. `WEB_TECHNICAL_VALIDATION_APPROVED`;
3. `LEGAL_PRIVACY_REVIEW_APPROVED`;
4. `OWNER_PRODUCTION_AUTHORIZATION`.

## Repository boundary

No App Core implementation repository is assigned by this handoff. In particular, `e-milysol/peptibloom-private-master` belongs to WORK 7 and must not be assumed as the App Core repository.

Any future repository/deployment decision for App Core must be explicitly recorded before implementation begins.
