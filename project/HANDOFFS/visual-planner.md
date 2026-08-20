# Visual Planner / Routine Builder — Product Design v0.1

Status: `PROPOSED / CONTRACT-WIREFLOW WORK`

Owner domain: `WORK 6 — App Core`

Production implementation: `BLOCKED / NOT AUTHORIZED`

Real health/wellness data: `BLOCKED`

Product Analytics expansion: `BLOCKED`

This document is a proposed feature contract for review. It does not create new scientific, Legal, Security, Analytics, Web routing or production canon.

## 1. Product principle

PeptiBloom provides structure and presentation. The user provides the content. PeptiBloom does not validate, recommend, optimize or generate medical protocols from user entries.

Proposed monetization principle, subject to App Core, Legal/Privacy, Security, technical and commercial reconciliation:

`WE DO NOT CHARGE FOR MEDICAL ADVICE.`

`WE CHARGE FOR OPTIONAL CONVENIENCE / PERSISTENCE / ORGANIZATION / DESIGN.`

A FREE user should be able to create something useful and take it away. Paid status must not increase PeptiBloom's scientific authority.

## 2. App Core fit and canon reconciliation

This feature extends App Core `Routines`; it does not create a second routine engine. Approved navigation remains `Today · Track · Routines · Inventory · Insights`. Approved recurrence remains daily / selected weekdays / every N days. Multiple occurrences per day remain deferred. Daypart is neutral presentation metadata; exact time remains `PROPOSED / CONTRACT REVIEW REQUIRED`.

Current App Core canon also states:

- WORK 6 owns the **authenticated** PeptiBloom application/site app;
- FREE and PLUS users retain basic data portability;
- FREE interactive history is limited to 90 days, while older data are not deleted merely because the entitlement window ends;
- downgrading from PLUS must never delete user data;
- payments/subscriptions are not authorized in the current MVP.

The new FREE/no-account hypothesis is therefore not adopted canon. A genuinely unauthenticated FREE planner creates a surface/ownership question because current App Core is defined as authenticated. Portability/history rules also require interpretation for a local-only user with no PeptiBloom-held record. Until resolved, the FREE/PAID model remains a product/business/architecture hypothesis and does not overwrite approved FREE/PLUS constraints.

## 3. Content boundary

### USER_AUTHORED_CONTENT
User-entered/selected title, optional short quantity/note text, recurrence, daypart, later-approved exact time if any, color, active range, visual-sheet title/subtitle, arbitrary section titles/contents and footer/note are opaque user content or neutral scheduling metadata.

### SYSTEM_GENERATED_PRESENTATION
PeptiBloom may generate neutral grouping, ordering, calendar markers, selected-color rendering, daypart iconography, accessible labels, visual-sheet layout, template rendering and local export formatting.

### PEPTIBLOOM_GENERATED_MEDICAL_CONTENT
`NONE`.

## 4. Single item model

One user-created item powers Routine detail, Today/Week/Month and Visual Sheet representations.

```text
USER_ITEM
  id
  title
  short_note?
  recurrence
  daypart?
  exact_time? [not approved]
  color_token
  active_range?
  sheet_definition?
  created_at
  updated_at
```

Recurrence remains `DAILY`, `SELECTED_WEEKDAYS`, or `EVERY_N_DAYS(interval_days, anchor_date)`. Daypart remains `MORNING | AFTERNOON | EVENING | UNSPECIFIED`. Sheet definitions contain presentation-only template id and ordered arbitrary sections. Semantic medical fields such as dose, route, cycle, reconstitution, administration or protocol are deliberately excluded.

## 5. Recurrence/timezone contract

1. Evaluate recurrence in the configured IANA timezone.
2. Selected weekdays use local calendar weekday, not UTC weekday.
3. Every-N-days uses local calendar-date arithmetic, not fixed 24-hour milliseconds.
4. DST transitions must not shift a daypart to another local date.
5. Today/Week/Month boundaries are local-calendar boundaries.
6. Timezone mutation requires an explicit product rule before persistence implementation.
7. Daypart has no duration or medical semantics.
8. Exact time remains outside the preview contract unless separately approved.

Synthetic tests include spring-forward and fall-back transitions.

## 6. FREE experience — local-first / export-and-leave hypothesis

Target flow:

```text
CREATE
→ EDIT
→ TODAY / WEEK / MONTH
→ VISUAL SHEET
→ PREVIEW
→ EXPORT PDF/PNG where supported
→ LEAVE
```

No account is required in the target hypothesis. FREE must remain genuinely useful; creation/export must not be intentionally crippled to force conversion. Exact FREE limits remain `PRODUCT / COMMERCIAL PROPOSED`.

Potential FREE capability set to evaluate:

- create/edit/delete/duplicate items;
- approved recurrence modes and daypart;
- Today/Week/Month;
- basic visual templates;
- visual-sheet creation and preview;
- PDF/PNG export where technically supported;
- optional local persistence only if Legal/Privacy/Security/technical review permits it.

## 7. PAID experience — persistence/convenience hypothesis

Conceptual flow:

```text
FREE WORK
→ OPTIONAL ACCOUNT / ENTITLEMENT
→ EXPLICIT SAVE / IMPORT
→ APPROVED PERSISTENCE
→ RECOVER / ORGANIZE LIBRARY
→ EDIT LATER
→ CROSS-DEVICE / BACKUP / PORTABILITY where approved
```

Potential paid capabilities: saved planners, saved visual sheets, justified historical versions, planner/sheet library, additional visual templates, cross-device recovery/synchronization, backup/portability and future convenience features.

Do not create premium medical protocols, doses, recommendations, compound advice or scientific recommendations as monetization gates.

## 8. Planner and Visual Sheet wireflows

Today is the highest-detail planner representation, Week balances scanning/readable labels, and Month uses compact markers plus non-color differentiation and accessible labels. Density overflow uses deterministic `+N`. All views derive from the same item/recurrence source.

Visual Sheet flow:

```text
Choose template
→ Title / subtitle
→ Add arbitrary sections
→ Reorder sections
→ Preview
→ Switch template without content loss
→ Local export where permitted
```

Working templates remain `Editorial`, `Compact`, and `Cards`; names are not Brand-approved. Keyboard-accessible reorder controls are required.

## 9. Synthetic preview fixtures

Only neutral/non-medical fixtures are allowed: `Water plants / Balcony`, `Gym / Upper body`, `Call mum / Weekly check-in`, and a `Weekend checklist` sheet with ordinary personal notes. No fixture may resemble a PeptiBloom-authored medical regimen.

## 10. FREE local-first privacy architecture study

Target architecture to investigate:

```text
USER INPUT
→ browser/client memory or approved local persistence
→ local render
→ client-side PDF/PNG export where supported
→ no PeptiBloom server persistence
```

Where feasible, architecture should truthfully prevent USER_AUTHORED_CONTENT from being transmitted to or persisted by PeptiBloom infrastructure. Validation must inspect actual network behavior, error reporting, hosting/provider behavior, export libraries, browser storage, service workers/caches, telemetry, URL handling and third-party scripts.

Do not use `PeptiBloom does not know what users write` as the legal/privacy model. Local persistence itself requires review, including shared-device exposure and deletion/clear controls.

## 11. PAID persistence privacy model

For account persistence, use the conservative design assumption that user-authored planner content **may contain personal data and may contain or reveal health-related information**.

This is a risk-design assumption, not a Legal classification. Legal/Privacy determines actual classification, lawful basis, transparency and applicable requirements. The FREE local-only privacy posture must not be reused for persisted account content.

## 12. Client-side encrypted paid persistence — architecture candidate

Study explicitly:

```text
USER CONTENT
→ encrypt client-side
→ transmit encrypted payload
→ store encrypted payload server-side
→ retrieve encrypted payload
→ decrypt client-side
```

`CLIENT-SIDE ENCRYPTION != GDPR EXEMPTION`

`CLIENT-SIDE ENCRYPTION != LEGAL APPROVAL`

`ZERO KNOWLEDGE` terminology is prohibited unless the implemented cryptographic architecture actually supports it and Security/Legal approve the term.

### Threat model
Evaluate database compromise, application-server compromise, compromised client/code delivery, account takeover, lost device, insider access and backup disclosure. Determine whether the client delivery channel can still serve code capable of accessing plaintext after decryption and which threats are reduced versus moved.

### Key management
Determine key creation/storage, derivation/wrapping, device binding, recovery/escrow, whether PeptiBloom or an identity provider can obtain decryption material, rotation, revocation and cryptographic migration.

### Authentication/recovery/multi-device
Define how new devices gain decryption capability, forgotten-credential/lost-device behavior, whether recovery changes confidentiality claims, and how recovery interacts with no-deletion/portability expectations.

### Metadata leakage
Evaluate account identity, object identifiers, timestamps, payload size, object count, sync/version counters, device/session/network metadata and entitlement state. Minimize metadata; encrypted payloads are not automatically anonymous.

### Search/indexing limitations
Server-side full-text search, content-derived organization, support inspection, semantic processing and some conflict resolution may be unavailable or require privacy-reducing indexes. Treat these as explicit product tradeoffs.

### Backups/deletion/migration
Define deletion semantics for primary storage, backups, wrapped keys and local copies; backup retention; cryptographic-erasure assumptions; export/portability format; schema/ciphertext versioning; and migrations without unreviewed server-side plaintext processing.

### Operational/security complexity
Security review must cover cryptographic primitive/library selection, nonce/IV discipline, authenticated encryption, key lifecycle, recovery, device authorization, XSS/client compromise, supply-chain integrity, logging/error handling, rate limiting, abuse, backup restore and incident response.

### Plaintext-access claim
The study must answer precisely whether PeptiBloom infrastructure can technically access plaintext in normal operation and under code-delivery/admin compromise. Marketing/privacy claims must not exceed actual architecture and controls.

## 13. Analytics hard boundary

No feature event names are created here. FREE and PAID both keep USER_AUTHORED_CONTENT outside Product Analytics.

Do not send item names, quantities, units, notes, section titles/contents, routine contents, user-selected substance/product names, calendar text, or any value capable of reconstructing the planner.

The preview uses zero new Product Analytics. Neutral feature-interaction telemetry may be considered later only through Analytics-owned change control and canonical production gates.

## 14. Legal / Privacy comparative review update

Update the existing review around actual neutral planner behavior; do not ask Legal to approve an abstract `protocol builder`.

### MODEL A — FREE / LOCAL-FIRST / NO ACCOUNT REQUIRED / EXPORT-AND-LEAVE
Actual behavior: arbitrary neutral user-authored item text; approved recurrence; daypart; Today/Week/Month; visual-sheet sections; local preview; client-side PDF/PNG export where supported; optional local persistence only if approved; no PeptiBloom server persistence of USER_AUTHORED_CONTENT as the architectural target.

### MODEL B — PAID / ACCOUNT-BASED PERSISTENCE / POTENTIALLY SENSITIVE USER CONTENT
Actual behavior: the same neutral planner plus optional account saving, recovery, library/history, later editing, cross-device capabilities, backup/portability and potentially client-side encrypted persistence.

Legal/Privacy should identify:

- constraints applicable to each model;
- whether local persistence changes obligations;
- requirements for account persistence;
- treatment of potentially health-related content;
- consent/lawful-basis questions;
- privacy notice requirements;
- retention/deletion requirements;
- portability requirements;
- reminder/notification implications if later introduced;
- whether client-side encrypted persistence materially changes the risk/control model;
- MDR/software-purpose implications arising from actual behavior, intended purpose, naming or claims.

Required disposition: `APPROVED`, `APPROVED_WITH_CONSTRAINTS`, `CHANGES_REQUIRED`, `BLOCKED`, or `UNKNOWN / RESEARCH_REQUIRED`.

## 15. Security review update

The synthetic in-memory preview remains intentionally low-scope and does not self-approve Security.

FREE local persistence requires review of shared-device exposure, browser storage, XSS, clear/delete behavior, export injection/content safety and client integrity.

PAID persistence requires authorization/multi-user isolation, encryption in transit/at rest, session/token handling, arbitrary-text rendering safety, deletion/export correctness, backup/retention and a specific threat model. Client-side encrypted persistence additionally requires the full section 12 study.

## 16. FREE / PLUS entitlement reconciliation

No exact FREE limits, paid limits, pricing, entitlement thresholds or template counts are approved here.

Approved canon remains:

- FREE and PLUS basic portability;
- FREE 90-day interactive history;
- older data not deleted merely because entitlement window ends;
- PLUS downgrade never deletes user data;
- payments/subscriptions outside currently authorized MVP.

Contract questions:

1. Does unauthenticated/local-only FREE sit inside App Core, beside it, or on another surface?
2. For local-only FREE, does basic portability mean local export rather than server export?
3. Does the 90-day FREE history rule apply only when PeptiBloom persists account data, or must local storage implement an analogous window?
4. On PLUS downgrade, what read/export/recovery access remains while preserving no deletion?
5. Can local FREE move to paid persistence only through explicit save/import, with no earlier content transmission?
6. Can additional templates be entitled without degrading a genuinely useful FREE baseline?

These remain `PROPOSED / CONTRACT REVIEW`.

## 17. Accessibility / Brand

Core flows require keyboard operation, visible focus, screen-reader names, practical touch targets, contrast-compliant implementation and no information conveyed by color alone. Brand review resolves neutral marker/daypart icon families, accessible colors, density, responsive Week/Month and A4/export rendering. Decorative styling never encodes Evidence/scientific semantics.

## 18. Explicit non-features

MVP excludes recommended/usual doses, dose ranges, recommended frequency/cycles, suggested substances, protocol generation, medical optimization, clinical interpretation, safety validation, substance-specific defaults, preloaded treatment protocols, AI-generated medical content, automatic inventory deduction, multiple occurrences per day, reminders/notifications, collaboration/sharing links, advanced editor, custom icon uploads, new Product Analytics and external integrations.

Cloud sync and account persistence remain outside the current authorized MVP even though studied as potential paid future value.

## 19. Preview architecture and acceptance

The review preview remains synthetic, in-memory, client-side and outside production Web/App Core implementation. It has no backend writes, auth, analytics, external integrations, user content in URLs/query strings or transmission of entered text.

Reviewable preview criteria: CRUD; approved recurrence; Today/Week/Month from one source; accessible marker/legend behavior; Visual Sheet sections/template switching; synthetic neutral content; zero new analytics; non-production labeling; reviewable URL through approved Web/Technical Direction preview path.

The preview may explain FREE-versus-PAID visually, but must not implement account persistence, payments, encryption, entitlement enforcement or real user-data collection merely to demonstrate the hypothesis.

Only then should Issue #13 receive `FEATURE PREVIEW -> OWNER REVIEW AVAILABLE` with URL, PR/branch, scope, limitations, Legal/Security status and specific Owner review request.

`PREVIEW_AVAILABLE != PRODUCTION_APPROVED`.

## 20. Cross-domain review state

`LEGAL / PRIVACY` — comparative Model A / Model B review pending; actual neutral behavior and encryption candidate specified.

`APP CORE / WORK 6` — recurrence/timezone plus FREE/PLUS entitlement/surface/persistence reconciliation pending.

`BRAND / VISUAL` — marker/icon/template/color/export review pending.

`WEB / TECHNICAL DIRECTION` — safe preview path/repository/surface pending.

`ANALYTICS` — zero-new-telemetry preview; USER_AUTHORED_CONTENT prohibited from Product Analytics.

`SECURITY` — local persistence and client-side encrypted paid persistence require explicit review; no self-approval.

## 21. Owner decision state

`OWNER_REQUIRED = YES — NARROW PRODUCT/SURFACE RECONCILIATION`

Reason: approved App Core canon defines WORK 6 as the **authenticated** application, while the proposed FREE target explicitly requires a useful **no-account** experience. This is a real surface/ownership contract fork. Existing FREE/PLUS portability/history rules also need interpretation under local-only FREE; none are overwritten here.

Work does not stop: recurrence/timezone, IA, wireflows, neutral fixtures, privacy/security studies, cross-domain reviews and the synthetic preview path continue fail-closed. No account/persistence implementation begins until this narrow surface decision is resolved.
