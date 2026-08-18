# PeptiBloom — ANALYTICS / PRODUCT METRICS

**Document:** Measurement Contract v1.0  
**Measurement specification v1.0**  
**Status:** `ANALYTICS_CONTRACT_APPROVED` — canonical v1.0 for Web technical validation and Legal privacy review — **PRODUCTION INSTRUMENTATION BLOCKED**  
**Prepared:** 2026-08-18  
**Scope:** public website and `/calculator/`  
**Owners:** Analytics is the sole owner of event names, schemas and metric definitions; Web validates and implements; Growth may request measurement and uses acquisition data; Evidence owns scientific content; Legal validates privacy, consent, processor and retention requirements.

## Executive decision

Use a privacy-minimal, cookieless measurement stack for the first 30 days:

1. **Google Search Console and Bing Webmaster Tools** for search-engine queries, impressions, clicks, CTR, landing pages, countries and devices. Configure both in the baseline phase when Bing verification does not require a tracker or material implementation complexity.
2. **Cloudflare Web Analytics** for page traffic, entry pages, referrers, coarse geography, device class and Core Web Vitals.
3. **A same-origin event endpoint** implemented by Web on Cloudflare Workers, writing only allowlisted aggregate product events to Workers Analytics Engine.
4. **Cloudflare Zone/Workers Analytics** for HTTP status and infrastructure error trends.

Do **not** add GA4, advertising pixels, session replay, heatmaps, autocapture or persistent visitor IDs to the MVP. They are unnecessary for the questions currently being asked and would materially expand the privacy and consent burden.

Analytics data may never be used for advertising, retargeting, person-level profiling, health inference or purchase-propensity scoring. This is a permanent product rule, not an MVP preference.

This design is intended to minimise data, not to make a legal determination. Legal must validate the final configuration, lawful basis, disclosures, processor terms, transfers and whether the selected audience-measurement configuration qualifies for an exemption from consent.

## Verified current state — 2026-08-18

- The public site is live behind Cloudflare and is generated with Astro.
- The public interface currently declares English (`lang="en"`).
- `/calculator/` contains the concentration/volume form, U-100, U-40 and custom syringe-scale selection, reset, two arithmetic guardrails and a separate multi-volume comparison UI.
- The currently visible calculation warnings include non-positive/missing values, entered amount above vial content and calculated volume above syringe capacity. The comparison UI has its own invalid-input and context warnings.
- No Cloudflare Web Analytics/RUM beacon marker (`beacon.min.js`, `data-cf-beacon`, `/cdn-cgi/rum`) or custom product event call was detected in the public HTML fetched for Home, Calculator, Library and Methodology on 2026-08-18 from the observed LAX edge response. **Public beacon status: not detected. Cloudflare dashboard status: unconfirmed.** This does not prove that the dashboard feature is disabled, because provider configuration, edge exclusions and geography-specific behaviour are not fully observable from public HTML.
- No public catalogue or newsletter form is present in the inspected pages; their conversion events are therefore reserved, not active.

Public pages inspected: [home](https://peptibloomproject.com/), [calculator](https://peptibloomproject.com/calculator/), [library](https://peptibloomproject.com/library/) and [methodology](https://peptibloomproject.com/methodology/).

# MEASUREMENT MODEL

## 1. Measurement principles

1. **Every metric must answer a decision question.** Do not collect a property merely because a tool makes it available.
2. **Sources have separate jobs.** Search Console is the source of truth for Google search queries; Web Analytics for traffic; custom events for product actions; Zone/Workers Analytics for HTTP errors.
3. **No medical interpretation.** Calculator activity measures tool use and usability. It cannot establish a treatment, health condition, efficacy, safety or scientific conclusion.
4. **Aggregate before identifying.** The MVP does not need user profiles, cross-visit identity or person-level funnels.
5. **No input or result values.** The calculator's scientific-looking numbers are precisely the data most likely to create privacy risk and are not required to evaluate product usability.
6. **Rates always name their denominator.** “Conversion” without a denominator is not a metric.
7. **New site, descriptive baseline.** The first 30 days establish ranges and data quality; they are not a basis for aggressive targets or causal claims.
8. **Analytics owns the contract.** Growth may request a metric or business concept; Analytics decides its canonical event, trigger, properties and derived formula. Web must not create parallel aliases during implementation.

## 2. Metric layers

| Layer | Decision question | Primary measures | Source of truth |
|---|---|---|---|
| Acquisition | How do qualified visitors discover PeptiBloom? | Organic impressions, clicks, CTR, query, landing page, source group, country, device | Google Search Console + Bing Webmaster Tools + Cloudflare Web Analytics |
| Engagement | Do visitors inspect useful content and move to high-value areas? | Entry page, engaged content view, navigation to Calculator/Library/Methodology, reference clicks later | Cloudflare Web Analytics + custom events |
| Product | Can visitors understand and successfully use the calculator? | Views, starts, calculation attempts/outcomes, warnings, resets, comparison adoption, estimated abandonment, errors | Custom event endpoint |
| Conversion | Do visitors explicitly request an ongoing relationship? | Newsletter or catalogue form views, starts, successful submissions and errors | Reserved custom events; activate only when forms exist |

## 3. Core metrics and formulas

### Acquisition

- **Organic CTR** = Google organic clicks ÷ Google organic impressions × 100.
- **Calculator organic entry share** = Google organic clicks landing on `/calculator/` ÷ all Google organic clicks × 100.
- **Source mix** = entry page views by `source_group` ÷ all entry page views × 100.
- **Country share** = page views for a country bucket ÷ page views with known country × 100.
- **Content-language share** = page views by the page's declared language ÷ all page views × 100.

Search queries must come from the webmaster tools, not from raw referrer URLs. Google omits some rare/anonymised queries for privacy and truncates table rows. Those limitations must be shown in the dashboard rather than treating the visible query table as a complete census. See Google's [query-dimension limitations](https://support.google.com/webmasters/answer/17011259?hl=en). Bing must be reported as a separate source; Google and Bing query counts are never silently merged.

### Engagement

- **Content engagement rate** = `content_engaged` ÷ eligible content page views × 100.
- **Library navigation rate** = `navigation_click` where `destination_area=library` ÷ eligible source page views × 100.
- **Methodology navigation rate** = `navigation_click` where `destination_area=methodology` ÷ eligible source page views × 100.
- **Calculator intent rate** = `navigation_click` where `destination_area=calculator` ÷ eligible non-calculator page views × 100.

`content_engaged` should fire once per page load only after **at least 10 seconds of active foreground time and 50% scroll depth**. It is a product-defined engagement signal, not proof that the content was read or understood.

### Calculator product funnel

- **Start rate** = `calculator_start` ÷ `calculator_view` × 100.
- **First-completion rate** = `calculate` with `calculation_phase=first` and `outcome in (success, success_with_warning)` ÷ `calculator_start` × 100.
- **Estimated abandonment rate** = `calculator_abandon` ÷ `calculator_start` × 100.
- **Warning exposure rate** = `calculate` with `outcome in (success_with_warning, blocked)` ÷ all `calculate` events × 100.
- **Reset rate** = `reset` ÷ `calculator_start` × 100.
- **Comparison adoption** = first `compare_volumes` success per page load ÷ first successful calculation per page load × 100.
- **Repeat-calculation share** = `calculate` with `calculation_phase=repeat` ÷ all `calculate` events × 100.
- **Calculator-to-Library bridge rate** = calculator-page `navigation_click` to Library with `calculator_state=completed` ÷ first successful calculations × 100.
- **Calculator-to-Methodology bridge rate** = calculator-page `navigation_click` to Methodology with `calculator_state=completed` ÷ first successful calculations × 100.

`calculator_abandon` is a **best-effort, page-local inference**, emitted once on page exit when there was an interaction but no successful calculation during that in-memory page lifecycle. Browser termination, connectivity loss, page restoration and back-forward cache behaviour make it incomplete and fallible. It is never a reliable fact about an individual. The dashboard must label it **Estimated abandonment — best effort, inferred within page session**.

### Future conversion

- **Form start rate** = `form_start` ÷ `form_view` × 100.
- **Form completion rate** = `form_submit_success` ÷ `form_start` × 100.
- **Submission error rate** = `form_submit_error` ÷ `form_submit_attempt` × 100.

Newsletter and catalogue data processing belongs to the form system. Analytics records only the form identifier and outcome, never the submitted contact details.

# EVENT TAXONOMY

## 1. Naming and version rules

- Event and property names use lowercase `snake_case`.
- The requested canonical names — `calculator_view`, `calculate`, `reset`, `compare_volumes`, `validation_warning`, `syringe_scale_selected` — are reserved and must not be renamed by an analytics vendor.
- All events carry `event_schema_version=1`.
- Additive properties may be introduced within v1 only after updating the registry and tests. Renaming an event/property, changing a trigger or changing a property's meaning requires v2.
- Event names describe a user-visible action or system outcome. CSS selectors and button text are never event names.
- No autocapture. Every event is explicitly implemented and documented.
- The canonical registry should live in the web repository as `docs/analytics/events-v1.yml` or an equivalent machine-readable file owned by Analytics and consumed by Web tests.
- Growth labels, vendor labels and dashboard aliases must never be emitted as additional events. The collection endpoint rejects non-canonical names.

### Growth / Analytics name reconciliation — final v1

| Growth-requested name | Canonical Analytics v1 event | How Growth receives the requested metric | Decision rationale |
|---|---|---|---|
| `calculator_complete` | `calculate` | Count `calculate` where `outcome in (success, success_with_warning)`; use `calculation_phase=first` for completion-rate numerator | “Complete” is a derived outcome. `calculate` also represents blocked attempts without inventing a second event |
| `comparison_complete` | `compare_volumes` | Count `compare_volumes` where `outcome=success`; use `comparison_phase=first` for adoption | The canonical event represents the explicit Compare action and records success/blocked as a property |
| `formula_expand` | `calculation_details_open` | Direct count of `calculation_details_open` | Describes the stable semantic action rather than current UI wording or animation |
| `warning_shown` | `validation_warning` | Direct count grouped by `warning_code` and `context` | Describes a controlled validation state, independent of visual presentation or translated copy |

The four Growth names above are **reporting concepts only**. They are not aliases, are not accepted by the endpoint and must not appear in production payloads.

## 2. Common event envelope

Only the following common properties are allowed:

| Property | Allowed values / derivation | Privacy rule |
|---|---|---|
| `event_name` | Canonical event from this v1 registry | Required; aliases rejected |
| `event_schema_version` | Integer `1` | Required |
| `page_path` | Normalised allowlisted path, no query string or fragment | Required |
| `page_type` | `home`, `calculator`, `library_index`, `library_entry`, `methodology`, `about`, `other_public` | Required |
| `content_language` | Page-declared `en`, `es`, `other` | Do not use full browser locale |
| `device_class` | `mobile`, `tablet`, `desktop`, `unknown` | Never store device model or full UA |
| `source_group` | `direct`, `internal`, `organic_search`, `social`, `referral`, `approved_campaign`, `unknown` | Derived; no raw source URL |
| `referrer_domain` | Approved eTLD+1 or `other` | No path, query or fragment; empty for direct |
| `campaign_id` | Approved code mapped server-side | Never store arbitrary raw UTM values |
| `release_id` | Web deployment/build identifier | Must not contain user information |
| `country_code` | Edge-derived ISO-2 code, `other` or `unknown` | Never accept from client; no city/coordinates; apply small-cell suppression |

The server adds its receipt timestamp. The payload does not include visitor ID, account ID, session ID, IP address or raw User-Agent. Country is derived at the edge as a two-letter country bucket and never as city, coordinates or address. Dashboard cells with fewer than the Legal-approved minimum should be grouped into `other`.

## 3. Calculator event contract

| Event | Exact trigger | Allowed event-specific properties | Explicitly forbidden |
|---|---|---|---|
| `calculator_view` | Once when calculator UI is ready | none | Any field default/value |
| `calculator_start` | Once on first user input/change in calculator | `first_control_group`: `vial`, `final_volume`, `target`, `syringe`, `comparison`, `unknown` | Input contents |
| `calculate` | Every form submit attempt after validation is evaluated | `outcome`: `success`, `success_with_warning`, `blocked`; `calculation_phase`: `first`, `repeat`; `warning_count_bucket`: `0`, `1`, `2_plus` | Vial amount, final volume, target amount, concentration, result, units, portions |
| `reset` | User activates Reset | `state_before_reset`: `not_started`, `started`, `completed`, `warning_present` | Prior values/results |
| `compare_volumes` | Every Compare action after validation | `outcome`: `success`, `blocked`; `comparison_phase`: `first`, `repeat`; `scenario_count_bucket`: `1`, `2_3`, `4_5`, `6_8`, `unknown` | Volume list or any calculated row |
| `validation_warning` | Each distinct warning displayed, de-duplicated per context/action | `warning_code`; `context`: `calculate`, `comparison`; `occurrence`: `first`, `repeat` | Message text if it can interpolate values |
| `syringe_scale_selected` | User changes syringe scale, not on initial default render | `scale_type`: `u_100`, `u_40`, `custom` | Custom units-per-mL value |
| `syringe_capacity_selected` | User changes capacity | `capacity_class`: `small`, `medium`, `standard`, `large`, `custom`, `unknown` | Exact custom capacity |
| `calculation_details_open` | User opens “Show calculation”, once per page load | `calculator_state`: `not_started`, `started`, `completed` | Formula/result contents |
| `calculator_abandon` | Best-effort once on page exit if started and never completed | `last_stage`: `started`, `warning_present`, `comparison_started` | Field names with values; any identifier |

### Warning-code allowlist

- `required_value_missing_or_nonpositive`
- `target_exceeds_vial_content`
- `calculated_volume_exceeds_capacity`
- `comparison_prerequisite_missing`
- `comparison_volume_list_invalid`
- `comparison_target_exceeds_vial_content`
- `unknown_validation_warning`

Warning code semantics are UI/product semantics only. They must never be interpreted as medical risk.

## 4. Navigation, content, conversion and quality events

| Event | Trigger | Allowed properties |
|---|---|---|
| `navigation_click` | Explicit internal navigation click | `destination_area`: `home`, `calculator`, `library`, `methodology`, `about`, `catalogue`, `newsletter`; `placement`: `header`, `hero`, `body`, `footer`, `calculator_result`; calculator page may add `calculator_state` |
| `content_engaged` | Once after 10 active seconds + 50% scroll | `engagement_rule=active_10s_scroll_50` |
| `reference_click` | Future click from an Evidence entry to a cited source | `reference_type`: `doi`, `pubmed`, `trial_registry`, `patent`, `other`; `destination_domain` allowlist only |
| `form_view` | Reserved form becomes visible | `form_id`: `newsletter`, `catalogue_request` |
| `form_start` | First interaction with reserved form | `form_id` |
| `form_submit_attempt` | Submit requested | `form_id` |
| `form_submit_success` | Backend confirms accepted submission | `form_id` |
| `form_submit_error` | Backend returns controlled error | `form_id`; `error_code` allowlist |
| `client_error` | Controlled UI component error or sanitised global error mapping | `component`: `calculator`, `navigation`, `form`, `other`; `error_code` allowlist; `release_id` |

Form analytics must never receive email, name, message, free text, consent wording, IP, submission ID or CRM/contact identifier.

# PRIVACY BOUNDARIES

## 1. Data that must not be collected

### Calculator and health-adjacent data

- Total vial content.
- Final or comparison volumes.
- Target amount.
- mg/µg values, concentrations, calculated volume, syringe units or portions.
- Custom syringe scale value.
- Compound, peptide or product name.
- Intended dose, route, frequency, schedule, cycle or protocol.
- Diagnosis, symptom, adverse event, biomarker, body measurement, medication or health outcome.
- Any attempt to infer a user's health status from the pages or calculator features they use.

### Identity and tracking data

- Name, email, telephone, address or free text in analytics.
- Persistent visitor ID, cross-visit session ID or account identifier.
- Raw IP address or raw User-Agent in the event dataset.
- Full referrer URL, URL query string, URL fragment or unvalidated UTM parameters.
- Exact location, GPS, city or postcode.
- Advertising IDs, cross-site identifiers or fingerprinting signals.
- Exact device model, screen resolution or detailed browser/plugin fingerprint.
- Keystrokes, copied text, DOM snapshots, session replay, heatmaps or form-field autocapture.
- Raw JavaScript error messages/stacks if they may contain URLs, DOM text, values or user content.

### Data combinations that are prohibited

- Do not join public-web analytics with future PeptiBloom app health, protocol, inventory, account or purchase data.
- Do not create user-level segments such as “interested in compound X” or “possible condition Y.”
- Do not score users for health, purchase propensity or vulnerability.
- Do not send analytics events to advertising platforms or supplier systems.

Health data receives special protection under GDPR Article 9. Even where an individual event does not itself state a diagnosis, a health-related context can make profiling or combinations more sensitive. The safe MVP rule is therefore **no person-level profile at all**. See the [GDPR consolidated text](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02016R0679-20160504).

## 2. Consent and Legal escalation

The AEPD's January 2024 audience-measurement guidance describes a narrow exemption where measurement is exclusively for the publisher, strictly limited to audience measurement and produces anonymous statistics; it also requires disclosure and safeguards. The same guidance gives examples including page views, load time, time, bounce, scroll, clicks/selections and coarse geographic statistics when properly aggregated. It states a maximum of 13 months for tracker lifetime and 25 months for collected information in the exempt model, with processor and non-reuse safeguards. See the [AEPD audience-measurement guide](https://www.aepd.es/guias/guia-cookies-analiticas-externas.pdf).

Cloudflare states that Web Analytics uses no cookies or localStorage and does not fingerprint users through IP or User-Agent for Core Web Vitals. This is a useful technical property, not a legal opinion. See [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/) and its [Core Web Vitals data description](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/).

Legal must decide and document:

1. Controller identity and contact point.
2. Purposes and Article 6 lawful basis for each source.
3. Whether the final cookieless configuration qualifies for the Spanish audience-measurement consent exemption.
4. Privacy/cookie notice wording, even if no consent banner is required.
5. Processor agreements, subprocessor review, data regions and international-transfer safeguards for Cloudflare and Google.
6. Retention and deletion schedule by source, including whether any aggregate export may outlive the three-month Analytics Engine window.
7. Country collection and the approved permanent small-cell rule: counts below 5 are suppressed or grouped into `other`.
8. The permanent MVP language boundary: page language only; browser language is not collected.
9. Rights-request handling and how to explain that the custom aggregate dataset has no visitor identifier by design.
10. Security controls, role-based dashboard access, incident process and audit logging.

If Legal concludes that any selected analytics configuration requires consent, Web must not load or call it before consent. The consent interface must make rejection and acceptance genuinely available and withdrawal as easy as acceptance, consistent with the [AEPD cookie guide](https://www.aepd.es/guias/guia-cookies.pdf). Do not deploy a consent-dependent tool first and “fix the banner later.”

## 3. Retention decision record — 25 months NOT APPROVED; 13 months PROPOSED / LEGAL REVIEW

Cloudflare documents a current three-month retention period for Workers Analytics Engine. See [Analytics Engine limits](https://developers.cloudflare.com/analytics/analytics-engine/limits/). Product events may remain there for no longer than that platform window, subject to Web confirming the technical configuration and Legal confirming the processing terms.

No 25-month aggregate store may be created until Legal approves the purpose, fields, location and deletion controls below. The AEPD's 25-month figure is an upper limit under its described exempt audience-measurement model; it is not evidence that PeptiBloom needs 25 months.

### Raw/operational layer

| Dataset | Contents | Location | Purpose | Proposed retention | Status |
|---|---|---|---|---|---|
| Product events v1 | Allowlisted event name, allowlisted categorical properties, server timestamp, page/release/source buckets; no calculator values or persistent identifier | Workers Analytics Engine in the approved PeptiBloom Cloudflare account, exact jurisdiction/configuration to be validated | Build 30-day baseline, event QA, short-window funnel and release troubleshooting | Platform window, currently up to 3 months | Conditional approval: Web + Legal |
| Provider traffic/search | Cloudflare Web Analytics, Google Search Console and Bing Webmaster Tools native aggregates | Respective provider accounts | Acquisition, entry pages, search visibility and performance | Provider-native retention; must be documented by Legal before relying on it | Pending inventory |
| Debug logs | No request bodies; controlled schema/status diagnostics only when incident debugging is enabled | Web-selected restricted operational log | Diagnose endpoint/release failure | Off by default; shortest incident-required period | Pending Web + Legal |

### Candidate long-term daily aggregates

If a persistent aggregate layer is approved, it may contain only these pre-aggregated tables. Every row is a daily count and all country/dimensional cells below 5 are suppressed or grouped before export.

| Aggregate table | Allowed dimensions | Allowed measures | Purpose |
|---|---|---|---|
| `daily_search_v1` | Date, engine (`google`/`bing`), landing-page bucket, device class, country group, page language, approved SEO query cluster | Impressions, clicks | Measure acquisition and SEO trend without retaining free-form rare queries |
| `daily_site_v1` | Date, normalised page path/type, page language, device class, source group, country group | Page views, entry views, engaged-content count | Baseline and content/navigation trend |
| `daily_calculator_v1` | Date, canonical event, allowed outcome/phase/warning/scale buckets, device class, source group, page language, release ID | Event count only | Calculator funnel, usability and release comparison |
| `daily_navigation_v1` | Date, source-page bucket, destination area, placement, calculator-state bucket, device/source/page-language buckets | Click count only | Measure movement to Calculator, Library and Methodology |
| `daily_quality_v1` | Date, release ID, page/endpoint bucket, HTTP status class or controlled error code, device class | Error/request count | Reliability and instrumentation quality |

The aggregate layer must not contain raw event rows, exact timestamps, visitor/session/page-view IDs, IP, User-Agent, full referrer, exact geography, raw UTM values, free-form search queries, calculator inputs/results, compound, protocol or health data. Exact search queries remain transiently inspectable inside the webmaster tools; long-term export uses only an Analytics-approved query cluster and the `<5` suppression rule.

### Proposed location — DO NOT CREATE

Logical dataset name: `pb_analytics_daily_v1`, owned by PeptiBloom Analytics with read-only access for approved Growth/Web roles. **The dataset must not be created.** Its physical store, purpose statement, final schema and retention are not selected or approved. Web must propose a Cloudflare-compatible store and confirm:

- account ownership and access controls;
- storage/data jurisdiction and international transfers;
- encryption and auditability;
- deterministic deletion by date;
- export/backup behaviour;
- whether small-cell suppression occurs before persistence;
- cost and operational complexity.

Until Web and Legal approve that design, the dashboard may query only native provider data and the three-month Analytics Engine window. A dashboard is not itself an authorised retention system.

### Purpose and necessity analysis

Permitted purposes are limited to: establishing the public-site baseline; comparing aggregate acquisition/product trends; detecting usability and reliability regressions; evaluating page/release changes; and planning non-personalised content/distribution work. Advertising, retargeting, user profiling, health inference and medical/scientific conclusions are permanently prohibited.

**Why 25 months was proposed:** it would permit comparison across two annual seasonal cycles and the same calendar period in two prior years. **Why it is not currently justified:** PeptiBloom has no historical seasonal pattern, the site is new, and one 13-month window would already cover a complete annual cycle plus overlap. Search-provider native retention may already satisfy part of the historical acquisition need; for example, Microsoft documents 16 months in Bing Search Performance, reducing the justification for duplicating those aggregates in a separate 25-month store. See [Bing Search Performance history](https://blogs.bing.com/webmaster/October-2024/Bing-Webmaster-Tools-Extends-Search-Performance-Data-to-16-Months).

Analytics therefore records the following proposal, which is **not approved** and remains in **LEGAL REVIEW**:

1. no aggregate export before the retention review is approved;
2. if Legal and the Owner later approve a persistent aggregate layer, start with a proposed **13 months** of daily aggregates;
3. review necessity at month 12 using actual reporting needs;
4. extend toward a maximum of 25 months only if two-year seasonality/release comparison is documented as necessary and Legal approves it;
5. delete expired partitions automatically and document the deletion test.

# MVP DASHBOARD

## Dashboard 1 — Acquisition & discoverability

**Filters:** date, landing page, country group, device class, content language, source group.  
**Cards:**

- Google organic impressions.
- Google organic clicks.
- Organic CTR.
- Clicks landing on `/calculator/`.
- Calculator organic entry share.
- Entry page views.
- Top landing pages.
- Source-group mix.
- Country and device distribution.
- Queries: top by clicks, rising by impressions, high-impression/low-CTR opportunities.

Search Console reports can group performance by queries, pages, countries, devices and dates. See the official [Performance report documentation](https://support.google.com/webmasters/answer/7576553?hl=en) and [Search Console setup guide](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Dashboard 2 — Calculator funnel & usability

**Filters:** date, device class, source group, referrer domain, content language, release ID.  
**Funnel:**

1. `calculator_view`
2. `calculator_start`
3. First `calculate` success or success-with-warning
4. First successful `compare_volumes`
5. Navigation to Library or Methodology after completed state

**Cards:** start rate, first-completion rate, estimated abandonment rate, warning exposure rate, reset rate, comparison adoption, repeat-calculation share.  
**Breakdowns:** warning code, calculation outcome, scale type, device class, source group and release ID.  
**Rule:** never display or accept calculator numeric values as dimensions.

## Dashboard 3 — Content & pathways

**Cards:** entry pages, content engagement rate, navigation to Calculator, navigation to Library, navigation to Methodology, Evidence reference clicks when entries exist.  
**Breakdowns:** source page, destination area, placement, content language and source group.  
**Interpretation:** a click shows navigation interest, not agreement with or understanding of scientific content.

## Dashboard 4 — Reliability & data quality

**Cards:** 404 trend, 5xx trend, calculator `client_error` trend, event-endpoint acceptance/rejection counts, analytics delivery failures observed client-side as local counters only, and Core Web Vitals p75 by key page/device.  
**Alerts:**

- Any sustained 5xx increase.
- `client_error` after a new `release_id`.
- Product-event volume drops to zero while Cloudflare page views continue.
- Invalid/unknown event-property rejection above 1% of event requests.
- A sudden >50% day-over-day change is a **data-quality review trigger**, not automatically a product incident, until traffic volume is mature.

Cloudflare documents page performance collection and Core Web Vitals through its RUM beacon, and its Zone/Workers analytics expose status-code trends. See [RUM beacon](https://developers.cloudflare.com/speed/observatory/rum-beacon/) and [Cloudflare analytics with Workers](https://developers.cloudflare.com/analytics/account-and-zone-analytics/analytics-with-workers/).

## Dashboard rules for a low-volume launch

- Always show counts beside percentages.
- Suppress or group small cells below the Legal-approved threshold.
- Use daily granularity initially; do not show hourly “trends” that are mostly noise.
- Mark incomplete current day separately.
- Label source timezones. Search Console's standard daily data is reported in Pacific Time, so it must not be compared as if its day boundaries were identical to Cloudflare/UTC or Europe/Madrid.
- Do not claim statistical significance or causality during the baseline month.
- Annotate deployments, SEO changes and new content releases.

## Empty baseline dashboard — pre-instrumentation state

This table is the approved empty-state dashboard. `—` means **not yet measured**, not zero. The baseline clock begins only after the production gate is approved and the instrumentation start timestamp is recorded.

| Section | Metric | Source | Baseline value | Status before go-live |
|---|---|---|---|---|
| Acquisition | Google impressions / clicks / CTR | Search Console | — | Configure and verify |
| Acquisition | Bing impressions / clicks / CTR | Bing Webmaster Tools | — | Configure alongside Google if verification is low-complexity |
| Acquisition | Top entry pages and source mix | Cloudflare Web Analytics | — | Web/Legal configuration review |
| Acquisition | Country/device/page-language mix | Search tools + Cloudflare | — | `<5` suppression approved; page language only |
| Product | `calculator_view` | Product events v1 | — | Contract approved; production gate blocked |
| Product | Start rate | `calculator_start / calculator_view` | — | Contract approved; production gate blocked |
| Product | First-completion rate | First successful `calculate / calculator_start` | — | Contract approved; production gate blocked |
| Product | Warning exposure rate | Warning/blocked `calculate / calculate` | — | Contract approved; production gate blocked |
| Product | Comparison adoption | First successful `compare_volumes / first successful calculate` | — | Contract approved; production gate blocked |
| Product | Estimated abandonment | `calculator_abandon / calculator_start` | — | Best effort; inferred within page session |
| Pathways | Navigation to Library / Methodology | `navigation_click` | — | Contract approved; production gate blocked |
| Quality | 404 / 5xx trend | Cloudflare Zone/Workers Analytics | — | Access/configuration review |
| Quality | Controlled calculator/client errors | `client_error` | — | Contract approved; production gate blocked |
| Governance | Invalid event/property rejection rate | Event endpoint | — | Web implementation required |

The empty dashboard must display: `Instrumentation blocked — production gate incomplete`. It must not backfill zeros for dates before deployment.

# IMPLEMENTATION REQUIREMENTS FOR WEB

## 1. Collection architecture

Web should implement one small wrapper, for example `trackPeptiBloomEvent(name, properties)`, which:

1. Accepts only registry-defined event names and properties.
2. Removes query strings and fragments from paths/referrers before transmission.
3. Maps source/referrer and campaign values to allowlisted buckets in the browser or endpoint.
4. Sends a small `POST` request to a same-origin endpoint such as `/api/analytics/events`.
5. Uses `navigator.sendBeacon` only for the best-effort exit event; ordinary events use `fetch` with a short timeout.
6. Never writes analytics state to cookies, `localStorage` or persistent identifiers.
7. Keeps only ephemeral booleans/counters in memory for the current page load: started, completed, first/repeat, warning occurrence and first comparison.
8. Fails silently from the user's perspective. Analytics must never block the calculator.

The endpoint must:

- Enforce `POST`, same-origin checks, a small payload limit and a strict JSON schema.
- Reject unknown events, unknown properties, overlong strings and non-allowlisted enum values.
- Normalise `page_path` and discard all query/fragment content.
- Derive coarse country/device buckets without storing raw IP or User-Agent in the analytics dataset.
- Ignore client-supplied country, timestamp and release values that do not match server/deployment context.
- Rate-limit abuse without creating an analytics visitor profile.
- Return `204` on acceptance and a controlled `4xx` on schema rejection.
- Avoid logging request bodies. Never place event payloads in URLs.

### Normative request example

This example is illustrative of the exact v1 envelope. No `timestamp`, `country_code`, IP, User-Agent, ID or calculator value is sent by the browser; server-derived fields are appended only after validation.

```json
{
  "event_name": "calculate",
  "event_schema_version": 1,
  "page_path": "/calculator/",
  "page_type": "calculator",
  "content_language": "en",
  "device_class": "mobile",
  "source_group": "internal",
  "referrer_domain": "peptibloomproject.com",
  "release_id": "web-2026-08-18",
  "properties": {
    "outcome": "success",
    "calculation_phase": "first",
    "warning_count_bucket": "0"
  }
}
```

Normative response behaviour:

- `204`: accepted, no response body;
- `400`: invalid schema/name/property/enum;
- `413`: payload above the Web-approved small size limit;
- `429`: abuse/rate limit;
- `5xx`: collection unavailable; calculator continues normally.

The endpoint accepts only canonical Analytics v1 names. In particular, it rejects `calculator_complete`, `comparison_complete`, `formula_expand` and `warning_shown`.

Workers Analytics Engine supports writing custom data points from a Worker and querying them through a SQL API; its data is automatically time-based and designed for aggregate analytics. See [Workers Analytics Engine](https://developers.cloudflare.com/analytics/analytics-engine/) and the [SQL API](https://developers.cloudflare.com/analytics/analytics-engine/sql-api/).

## 2. Source/referrer handling

- `source_group` and `referrer_domain` describe the current entry only; no cross-page identity is created.
- Use only the registrable domain, never full `document.referrer`.
- Search-engine referrers map to `organic_search`; social domains map to `social`; own domain maps to `internal`; no referrer maps to `direct`.
- Approved campaign URLs use a controlled `campaign_id`. Unknown or malformed UTM values map to `unknown` and are discarded, not stored verbatim.
- Internal navigation intent is measured at click time with `navigation_click`, so it does not require persisting attribution across pages.

## 3. Calculator trigger details

- `calculator_view`: after the calculator form and comparison enhancement are ready.
- `calculator_start`: first real input or select change; do not fire on programmatic defaults.
- `calculate`: on each submit after outcome is known, including blocked validation and success-with-warning.
- `validation_warning`: fire one event per warning code per action; repeated warnings are labelled `repeat`.
- `reset`: use the state immediately before reset, then clear only in-memory analytics state.
- `compare_volumes`: outcome is known only after the comparison parser/validation has run.
- `calculator_abandon`: page exit only when started is true and completed is false; protect against duplicate firing.
- Navigation from the calculator includes only the coarse state `not_started`, `started`, `completed` or `warning_present`.

## 4. Quality assurance acceptance tests

Web must demonstrate in browser network inspection that:

1. Changing every calculator numeric field never changes the event payload except allowed state/outcome buckets.
2. No payload contains the entered values, calculated values or formula text.
3. Custom scale selection sends `custom`, never the custom numeric scale.
4. Full URL queries/fragments and full referrer paths never leave the browser.
5. No analytics cookie, persistent local storage, visitor ID or replay script is created.
6. All requested events fire once at the defined trigger and reset correctly on navigation/reload.
7. `calculate` distinguishes `success`, `success_with_warning` and `blocked` using the current calculator behaviour.
8. Mobile, tablet and desktop map only to the approved coarse classes.
9. Unknown event names/properties are rejected server-side.
10. The calculator remains fully functional when analytics requests fail or are blocked.
11. Staging and automated tests do not write to the production analytics dataset.
12. Production QA can append an approved `pb_qa=1` flag that the endpoint discards entirely; the raw flag must not be stored.

## 5. Data access and change control

- Analytics and the Owner receive read access; Web receives implementation/debug access; Growth receives read-only acquisition/product dashboard access; Evidence needs only content-level aggregate reports.
- Production write tokens stay server-side. Browser code has no provider API token.
- Every event change requires registry diff, privacy review, QA evidence and release annotation.
- A dashboard query cannot become a new collection requirement without updating this specification.

## 6. Production gate — mandatory

The production gate has exactly four required states:

| Gate state | Current status | Evidence required |
|---|---|---|
| `ANALYTICS_CONTRACT_APPROVED` | **APPROVED** | This canonical Measurement Contract v1.0 and registry |
| `WEB_TECHNICAL_VALIDATION_APPROVED` | **PENDING** | Feasibility, architecture, provider configuration and 12-test QA plan validated by Web |
| `LEGAL_PRIVACY_REVIEW_APPROVED` | **PENDING** | Lawful basis/consent, notices, processors, transfers, logs and retention reviewed by Legal |
| `OWNER_PRODUCTION_AUTHORIZATION` | **PENDING** | Explicit production authorization after Web and Legal approvals |

Boolean rule: `instrumentation_allowed = A AND W AND L AND O`. If any state is absent or not approved, **instrumentation = BLOCKED**. Preparing code, schemas, dashboard definitions, queries, QA fixtures and documentation is allowed. Merging, enabling, deploying or otherwise activating new production instrumentation is prohibited.

Search Console and Bing Webmaster Tools may be configured as external baseline sources without user identifiers, tracking scripts or joins to individual product events. Their coordination with `GROWTH-SEO-002` does not replace any of the four production gate states.

# 30-DAY BASELINE PLAN

## Days 1–3 — Foundation and legal checkpoint

- Coordinate `GROWTH-SEO-002`: verify Google Search Console domain ownership, indexing access and sitemap visibility; configure Bing Webmaster Tools in the same window when verification introduces no material complexity or tracking script.
- Verify whether Cloudflare Web Analytics/RUM is enabled; record configuration and data region/processor details.
- Legal reviews the cookieless design, notices, processor terms, transfers and retention.
- Freeze event registry v1.0 and dashboard definitions.
- Record a pre-instrumentation technical snapshot: live routes, declared languages, current calculator warning codes and current release ID.
- Keep the empty dashboard in `not active` state; do not write production events.

## Days 4–7 — Implementation and QA

- Web prepares the same-origin event wrapper/endpoint and all v1 calculator/navigation events in a non-production environment.
- Complete the 12 acceptance tests above on mobile and desktop.
- Confirm no input/result leakage with at least one mg case, one µg case, U-100, U-40, custom scale, capacity warning and comparison warning.
- Exclude staging, automated tests and `pb_qa=1` from production data.
- Obtain Web technical sign-off, Legal sign-off/conditions and final Owner GO. Only then deploy with a release annotation and exact UTC start time; reporting day boundaries use Europe/Madrid.

## Days 8–14 — Data-quality watch

- Daily compare Cloudflare calculator page views with `calculator_view`; investigate large systematic gaps without forcing equality between different collection methods.
- Validate event ordering and impossible states: abandon after completion, compare before start, unknown warnings or negative counts.
- Check source/referrer bucketing and verify no query strings appear.
- Check Search Console begins receiving data; low or zero search data is plausible for a new site and is not an instrumentation failure by itself.
- Fix implementation bugs without changing event meanings.

## Days 15–21 — First descriptive review

- Publish the four MVP dashboards.
- Break down the calculator funnel by device and source group.
- Review warnings and resets as usability signals, not user error or medical risk.
- Review navigation into Library and Methodology.
- Annotate any Growth campaign, content publication or Web release.

## Days 22–30 — Baseline freeze

- Exclude incomplete launch day and known QA windows.
- Produce a 30-day baseline table with counts, rates, definitions, denominators and data limitations.
- Record median daily value and observed range for stable high-level counts; do not invent targets where volume is insufficient.
- Document missing data and tool discrepancies.
- Decide whether v1 remains adequate for the next 60 days or whether a consented/person-level tool is genuinely necessary.

## Baseline deliverable

The day-30 report must contain:

- Exact measurement window in UTC and local reporting timezone.
- Event schema/release versions active during the window.
- Acquisition, engagement, calculator, content-pathway and reliability tables.
- Counts and formula-based rates together.
- Known exclusions, data loss, bot/QA limitations and Search Console coverage limitations.
- No medical, scientific or efficacy conclusions.

# DECISION REGISTER AND REMAINING GATES

| Decision | Status | Contract effect |
|---|---|---|
| Strict cookieless MVP | **OWNER APPROVED** | No cookies, persistent IDs, replay, autocapture or person-level funnels |
| Workers Analytics Engine | **OWNER CONDITIONALLY APPROVED** | MVP option for product events, subject to Web technical validation and Legal review |
| Reporting timezone | **OWNER APPROVED** | Europe/Madrid reporting; technical timestamps UTC; source timezone differences labelled |
| Geographic suppression | **OWNER APPROVED** | Counts below 5 suppressed/grouped into `other` |
| Language | **OWNER APPROVED** | Page language only; browser language prohibited |
| Advertising/profiling prohibition | **OWNER APPROVED — PERMANENT** | No ads, retargeting, profiles, health inference or propensity scoring |
| Analytics taxonomy ownership | **OWNER APPROVED — PERMANENT** | Analytics owns canonical names/contracts; Growth requests but does not define events |
| Calculator/health-adjacent values | **OWNER APPROVED — PERMANENT PROHIBITION** | No inputs, results, compound, amount, concentration, volume, protocol, health data or persistent IDs |
| Growth naming reconciliation | **CLOSED BY ANALYTICS v1** | Canonical events: `calculate`, `compare_volumes`, `calculation_details_open`, `validation_warning`; Growth “complete/shown” labels are derived metrics only |
| `calculator_abandon` reliability | **CLOSED WITH LIMITATION** | Dashboard label: best effort, inferred within page session; never an individual fact |
| Bing Webmaster Tools | **IN BASELINE SCOPE** | Configure with Search Console if no material complexity/tracker; otherwise return to Owner |
| 25-month aggregate retention | **NOT APPROVED** | No 25-month retention |
| 13-month aggregate retention | **PROPOSED / LEGAL REVIEW** | Not approved; no aggregate persistence until location, purpose, final schema and retention are approved |
| `pb_analytics_daily_v1` | **DO NOT CREATE** | Suppression `<5` must occur before any future aggregate persistence; store design remains undecided |
| Production instrumentation | **BLOCKED** | Four-state gate is incomplete; only `ANALYTICS_CONTRACT_APPROVED` is approved |

## Remaining decisions/gates

1. Web: validate Workers Analytics Engine, endpoint design, provider configuration, data jurisdiction and deletion capabilities.
2. Legal: decide lawful basis/consent exemption, processor terms, transfers, notices, provider-native retention and product-event retention.
3. Legal + Owner: decide whether a long-term `pb_analytics_daily_v1` store is allowed; Analytics recommends 13 months initially, not 25.
4. Owner: confirm dashboard access roles and formal individuals/teams holding Analytics read access.
5. Owner/Product: confirm whether future catalogue and newsletter remain two separate conversions; recommended yes, with contact data kept outside Analytics.
6. Owner: final production GO only after Web and Legal sign-off.

# Tool decision record

## Required now

- **Google Search Console:** essential for Google queries and search landing-page performance.
- **Bing Webmaster Tools:** configure in the same baseline phase when verification is low-complexity and introduces no tracking script; report separately from Google. Microsoft documents DNS and other ownership-verification methods in its [official verification guide](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b).
- **Cloudflare Web Analytics:** general cookieless traffic and performance.
- **Cloudflare Workers Analytics Engine:** controlled custom product events. It exposes a SQL API and can later feed Grafana if a richer internal dashboard is justified; [Cloudflare documents the Grafana integration](https://developers.cloudflare.com/analytics/analytics-engine/grafana/).
- **Cloudflare Zone/Workers Analytics:** HTTP/infrastructure reliability.

## Deferred

- **PostHog:** capable of cookieless collection, but its session/product features would duplicate the MVP and create more configuration/Legal surface. Reconsider for experiments or person-level funnels only after a concrete need. Its documentation confirms cookieless modes but still requires deliberate privacy configuration: [PostHog data collection](https://posthog.com/docs/privacy/data-collection).
- **Sentry or equivalent:** reconsider if controlled error codes cannot diagnose production issues; must scrub payloads and complete processor/transfer review.
- **GA4:** not needed for this MVP. Search Console plus Cloudflare and first-party product events cover the defined questions without adding a broader Google Analytics tracker.
- **Session replay/heatmaps:** explicitly excluded.

# Source register

- [Google — Get started with Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [Google — Search Console Performance report](https://support.google.com/webmasters/answer/7576553?hl=en)
- [Microsoft Bing — Add and verify a site](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b)
- [Microsoft Bing — Search Performance history](https://blogs.bing.com/webmaster/October-2024/Bing-Webmaster-Tools-Extends-Search-Performance-Data-to-16-Months)
- [Cloudflare — Web Analytics](https://developers.cloudflare.com/web-analytics/)
- [Cloudflare — Web Analytics Core Web Vitals data](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/)
- [Cloudflare — RUM beacon](https://developers.cloudflare.com/speed/observatory/rum-beacon/)
- [Cloudflare — Workers Analytics Engine](https://developers.cloudflare.com/analytics/analytics-engine/)
- [Cloudflare — Analytics Engine SQL API](https://developers.cloudflare.com/analytics/analytics-engine/sql-api/)
- [Cloudflare — Analytics Engine limits and retention](https://developers.cloudflare.com/analytics/analytics-engine/limits/)
- [Cloudflare — Zone/Workers analytics](https://developers.cloudflare.com/analytics/account-and-zone-analytics/analytics-with-workers/)
- [AEPD — Guía Uso de cookies para herramientas de medición de audiencia, enero 2024](https://www.aepd.es/guias/guia-cookies-analiticas-externas.pdf)
- [AEPD — Guía sobre el uso de las cookies](https://www.aepd.es/guias/guia-cookies.pdf)
- [EUR-Lex — GDPR consolidated text](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02016R0679-20160504)
- [PostHog — Controlling data collection](https://posthog.com/docs/privacy/data-collection)

---

**Analytics interpretation boundary:** the system measures visits, interactions, errors and explicit conversion actions. It does not measure health status, treatment, safety, efficacy, scientific validity or medical outcomes.
