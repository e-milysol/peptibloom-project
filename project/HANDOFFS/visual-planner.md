# Visual Planner / Routine Builder — Product Design v0.1

Status: `PROPOSED / CONTRACT-WIREFLOW WORK`

Owner domain: `WORK 6 — App Core`

Production implementation: `BLOCKED / NOT AUTHORIZED`

Real health/wellness data: `BLOCKED`

Product Analytics expansion: `BLOCKED`

This document is a proposed feature contract for review. It does not create new scientific, Legal, Security, Analytics, Web routing or production canon.

## 1. Product principle

PeptiBloom provides structure and presentation. The user provides the content.

The same feature must behave consistently for arbitrary user-authored entries such as:

- `Item A`
- `Vitamin C`
- `Gym`
- `Water plants`
- `Call mum`

PeptiBloom does not decide what the user should enter, validate whether user-entered content is medically correct, recommend or optimize the content, or generate treatment protocols.

## 2. App Core fit

This feature extends the existing App Core `Routines` capability. It does not create a parallel routine engine.

Current approved App Core navigation remains:

`Today · Track · Routines · Inventory · Insights`

Current recurrence MVP remains:

- daily;
- selected weekdays;
- every N days.

Multiple occurrences per day remain deferred.

Daypart in this proposal is presentation/scheduling metadata attached to one routine occurrence pattern. It does not imply authorization for multiple occurrences per day. Optional exact-time scheduling remains `PROPOSED / CONTRACT REVIEW REQUIRED` and must not enter implementation unless reconciled with the canonical recurrence/timezone contract.

## 3. Three-layer content boundary

### A. USER_AUTHORED_CONTENT

The user may enter or select:

- name/title;
- optional short quantity/note text;
- recurrence configuration;
- daypart;
- optional exact time only if later approved by the recurrence/timezone contract;
- user-selected color;
- optional active date range where supported;
- visual-sheet title/subtitle;
- arbitrary section titles;
- arbitrary section contents;
- optional footer/note.

These values are treated as opaque user content or neutral scheduling metadata. The system must not infer medical meaning from them.

### B. SYSTEM_GENERATED_PRESENTATION

PeptiBloom may generate only neutral presentation such as:

- Today/Week/Month grouping;
- ordering;
- calendar markers;
- selected-color rendering;
- neutral daypart iconography;
- accessible labels;
- visual-sheet layout;
- template rendering;
- local export formatting.

### C. PEPTIBLOOM_GENERATED_MEDICAL_CONTENT

For this MVP: `NONE`.

## 4. Proposed single data model

One user-created routine/item should power all supported representations.

Conceptual model:

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

Conceptual recurrence union:

```text
RECURRENCE
  kind = DAILY

or

  kind = SELECTED_WEEKDAYS
  weekdays = [MON ... SUN]

or

  kind = EVERY_N_DAYS
  interval_days = positive integer
  anchor_date = local calendar date
```

Conceptual daypart enum:

```text
MORNING
AFTERNOON
EVENING
UNSPECIFIED
```

Daypart is neutral display/scheduling metadata. It must not encode medical or scientific meaning.

Conceptual sheet definition:

```text
SHEET_DEFINITION
  title?
  subtitle?
  template_id
  sections[] ordered
  footer_note?

SECTION
  stable local id
  title
  content
  order
```

The model deliberately excludes semantic medical fields such as `dose`, `route`, `cycle`, `reconstitution`, `administration`, `protocol`, or substance-specific configuration.

## 5. Recurrence and timezone contract requirements

The feature consumes the existing App Core direction that recurrence/timezone design uses IANA timezone identifiers and DST tests.

Required contract behavior before implementation:

1. Routine recurrence is evaluated in the user's selected/account timezone, represented by an IANA timezone identifier.
2. `SELECTED_WEEKDAYS` is based on local calendar weekday, not UTC weekday.
3. `EVERY_N_DAYS` is anchored to a local calendar date and advances by calendar-day count, not fixed 24-hour milliseconds.
4. DST transitions must not shift a daypart to another calendar date.
5. Today/Week/Month boundaries are local-calendar boundaries in the configured timezone.
6. Changing timezone must have an explicit product rule before persistence implementation. The preview may demonstrate the existing timezone without implementing timezone mutation.
7. Daypart has no duration and no medical semantics.
8. Exact time remains outside the preview contract unless separately approved.

Synthetic DST cases should include at least one spring-forward and one fall-back transition.

## 6. Core user flows

### 6.1 First-run / empty state

```text
Routines
┌──────────────────────────────────────┐
│ Build your first routine             │
│ Organize anything you want to track  │
│ or remember. PeptiBloom provides the │
│ structure; you provide the content.  │
│                                      │
│ [ Add item ]                         │
└──────────────────────────────────────┘
```

No medical example is used in the empty state.

### 6.2 Add item

```text
Add item

Name *
[ Water plants                    ]

Short note (optional)
[ Balcony                         ]

Repeat
(o) Daily
( ) Selected weekdays
( ) Every N days

Daypart
[ Morning v ]

Color
[ ● ] [ ● ] [ ● ] [ ● ] ...

[ Cancel ]                 [ Save ]
```

Target: first useful item in approximately one minute or less.

### 6.3 Selected weekdays

```text
Repeat: Selected weekdays
[M] [T] [W] [T] [F] [S] [S]
```

Controls require accessible names; color is never the only state indicator.

### 6.4 Every N days

```text
Repeat: Every N days
Every [ 3 ] days
Starting [ local date ]
```

No text implies recommended frequency.

### 6.5 Edit / duplicate / delete

Routine detail exposes:

- Edit;
- Duplicate;
- Delete;
- Open visual sheet;
- Create visual sheet if none exists.

Duplicate creates a new independent user item with copied user-authored fields. It must not silently create a linked protocol/template identity.

Delete requires normal destructive confirmation. Any retention/deletion behavior for server persistence remains subject to the App Core privacy/delete contract.

## 7. Planner representations

### 7.1 Today

Today is the highest-detail planner representation.

```text
Today · Monday 24

Morning
  ◉ Water plants
    Balcony

Afternoon
  — No items —

Evening
  ◆ Item A
    Short note
```

The marker combines shape/icon, selected color and visible text/accessibility label. User-selected color alone is insufficient.

### 7.2 Week

Week balances scanning and readable labels.

```text
Mon 24        Tue 25        Wed 26
● Water       —             ● Water
◆ Item A                    ◆ Item A
```

On small screens, Week may use horizontally paged days or a compact vertical list. Final technical behavior belongs to the implementation owner.

### 7.3 Month

Month stays deliberately calm.

```text
24
● ☾
◆ ☀

25
—
```

Marker semantics:

- marker shape = neutral routine marker style;
- marker color = user-selected color;
- sun/day/moon family = user-selected daypart only;
- marker accessible label includes routine title and daypart;
- no scientific meaning is encoded.

Selecting a day opens a day-detail surface listing actual labels.

If density exceeds the visual marker budget, use a compact `+N` overflow indicator rather than shrinking markers indefinitely.

## 8. Visual Sheet Builder

### 8.1 Entry

From Routine detail:

```text
Visual sheet
[ Create visual sheet ]
```

or, when present:

```text
Visual sheet
Template: Editorial
3 sections
[ Edit ] [ Preview ]
```

### 8.2 Builder flow

```text
Choose template
→ Title / subtitle
→ Add sections
→ Reorder sections
→ Preview
→ Switch template without content loss
→ Local export where permitted
```

### 8.3 Section editor

```text
Section title
[ Notes                         ]

Section content
[ User-entered text ...         ]

[ Move up ] [ Move down ] [ Delete ]
```

Drag-and-drop may be added by implementation, but keyboard-accessible reorder controls are required.

### 8.4 Initial template family

Preview target: 3 templates.

1. `Editorial` — high-legibility, generous whitespace.
2. `Compact` — denser but still calm.
3. `Cards` — modular sections optimized for screen and A4 adaptation.

Template names are working labels, not Brand-approved public naming.

Templates alter presentation only. Switching templates must never delete or reinterpret user content.

## 9. Synthetic preview fixtures

Only neutral/non-medical fixtures are allowed in review previews.

Fixture set A:

```text
Water plants
Short note: Balcony
Recurrence: Monday / Wednesday / Friday
Daypart: Morning
Color: user color 1
```

Fixture set B:

```text
Gym
Short note: Upper body
Recurrence: Tuesday / Saturday
Daypart: Evening
Color: user color 2
```

Fixture set C:

```text
Call mum
Short note: Weekly check-in
Recurrence: Sunday
Daypart: Afternoon
Color: user color 3
```

Visual-sheet fixture:

```text
Title: Weekend checklist
Subtitle: Personal notes
Sections:
- Before leaving — Keys, water bottle, charger
- During the day — User-entered notes
- Later — Call mum
```

No synthetic fixture should look like a PeptiBloom-authored medical regimen.

## 10. MVP acceptance criteria

### Routine CRUD

- user can create, edit, duplicate and delete an item;
- title is required; all other content fields are neutral and optional unless required by recurrence selection;
- no substance-specific defaults exist;
- no medical validation occurs.

### Recurrence

- supports current approved recurrence MVP only: daily / selected weekdays / every N days;
- weekday recurrence uses local weekday;
- every-N-days uses local date arithmetic;
- DST test cases do not move occurrences to the wrong local date;
- multiple occurrences per day are not introduced.

### Planner

- Today, Week and Month representations derive from the same user item;
- Month remains scannable under multiple items;
- overflow has a deterministic compact representation;
- user color is never the sole distinguishing mechanism;
- day detail reveals readable labels.

### Sheet Builder

- uses the same user item identity;
- supports arbitrary sections;
- sections can be reordered without content loss;
- template switch preserves content;
- preview supports screen and A4-oriented rendering;
- export is client-side/local in the preview architecture unless Legal/Technical Direction approves another behavior.

### Accessibility

- keyboard operation for all core flows;
- visible focus state;
- screen-reader names for markers and daypart controls;
- minimum practical touch target size;
- contrast compliant implementation target;
- no information conveyed by color alone;
- motion is non-essential and respects reduced-motion preferences if introduced.

## 11. Privacy-minimal preview architecture

For a reviewable interactive preview, prefer a self-contained client-side prototype with synthetic data and no backend writes.

Preferred preview behavior:

- synthetic fixtures bundled with preview code;
- optional temporary edits stored in memory or browser-local storage only;
- no server-side persistence;
- no authentication requirement solely for preview;
- no analytics instrumentation;
- no external integrations;
- no user content in URLs/query strings;
- no network transmission of entered preview text other than static asset requests;
- client-side export only if export is included in the preview.

This preview architecture is a risk-minimization proposal, not Legal or Security approval for production.

## 12. Analytics boundary

No feature event names are created by this document.

MVP preview should operate with zero new Product Analytics.

Prohibited Analytics payload content includes, at minimum:

- item title/name;
- quantity/note text;
- recurrence contents;
- calendar contents;
- daypart tied to a user routine;
- section titles;
- section contents;
- routine values;
- persistent user identifiers.

Any future telemetry requires Analytics-owned taxonomy change plus canonical production gates.

## 13. Security boundary

Client-only synthetic preview minimizes security scope but does not self-approve Security.

If later production design persists user content server-side or synchronizes across devices, Security review must cover at least:

- authorization and multi-user isolation;
- encryption in transit and at rest;
- token/session handling;
- XSS/content rendering safety for arbitrary text;
- export injection/content-safety concerns;
- deletion/export correctness;
- local-storage exposure on shared devices where applicable;
- backup/retention behavior.

## 14. Legal / regulatory boundary

Legal review must evaluate actual behavior, including:

- arbitrary user-authored content;
- neutral quantity/note field;
- recurrence and daypart;
- optional exact-time proposal if retained;
- visual calendar rendering;
- local persistence;
- client-side visual-sheet export;
- naming and contextual copy;
- reminders if ever added later;
- whether any behavior risks crossing into regulated recommendation or medical-device functionality in intended markets.

Required review state remains one of:

`APPROVED`

`APPROVED_WITH_CONSTRAINTS`

`CHANGES_REQUIRED`

`BLOCKED`

`UNKNOWN / RESEARCH_REQUIRED`

## 15. Brand / visual requirements

Brand review should resolve:

- routine marker family: dot / flower / other neutral compact mark;
- daypart icon family;
- user-selectable color tokens with accessible contrast pairings;
- visual density at 1, 3, 6 and 10+ items/day;
- responsive Week/Month behavior;
- A4 rendering rules;
- light/dark readability only if dark mode is separately supported;
- relationship to the existing PeptiBloom visual language without inventing a global design-system decision.

Decorative color and marker shape must never represent Evidence grade, scientific confidence, safety, efficacy or recommendation.

## 16. Explicit non-features

The MVP excludes:

- recommended doses;
- usual doses;
- dose ranges;
- recommended frequency;
- recommended cycles;
- suggested substances;
- protocol generation;
- medical optimization;
- clinical interpretation;
- safety validation;
- correct/incorrect judgment;
- substance-specific defaults;
- preloaded treatment protocols;
- AI-generated medical content;
- automatic inventory deduction;
- multiple occurrences per day;
- reminders/notifications;
- cloud sync;
- collaboration;
- sharing links;
- advanced template editor;
- custom icon uploads;
- new Product Analytics telemetry;
- external integrations.

## 17. Preview milestone

A preview is reviewable only when all of the following are true:

1. uses synthetic neutral content only;
2. demonstrates Add/Edit/Delete/Duplicate;
3. demonstrates current recurrence modes;
4. demonstrates Today/Week/Month from one data source;
5. demonstrates accessible marker/legend behavior;
6. demonstrates Visual Sheet sections and template switching;
7. does not transmit user-entered preview content to a backend;
8. contains no new analytics;
9. is clearly labeled preview/non-production;
10. has a reviewable URL produced through the approved Web/Technical Direction preview path.

Only then should Issue #13 receive:

`FEATURE PREVIEW -> OWNER REVIEW AVAILABLE`

with the preview URL, PR/branch, implemented scope, known limitations, Legal status, Security status and specific Owner review request.

`PREVIEW_AVAILABLE != PRODUCTION_APPROVED`.

## 18. Open cross-domain review items

`LEGAL / PRIVACY` — pending routed review.

`APP CORE / WORK 6` — recurrence/timezone and persistence/model reconciliation pending.

`BRAND / VISUAL` — marker/icon/template/color review pending.

`WEB / TECHNICAL DIRECTION` — safe preview path/repository/surface pending.

`ANALYTICS` — no new taxonomy requested; zero-new-telemetry preview proposed.

`SECURITY` — preview is client-only/synthetic by proposal; production persistence/sync review remains gated.

## 19. Owner required

`OWNER_REQUIRED = NO` at this stage.

A later Owner decision is required only if a material product fork, naming choice, substantial scope expansion, Legal/Product tradeoff or irreversible production/public action emerges.
