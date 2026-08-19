# Growth / SEO / Distribution Handoff

Owner: GROWTH / SEO / DISTRIBUTION workstream

## Operating checkpoint

CURRENT_STATE: `OPERATIONAL_OWNERSHIP_RESTORED / PHASE_2_RECONCILED`

LAST_COMPLETED:
- historical Search Console state from `2026-08-18` reconciled as dated operational provenance only;
- Growth ownership restored for SEO strategy, search intent, organic distribution, SEO/content briefs, acquisition experiments and Search Console monitoring;
- current Analytics ownership boundary and production gates reconciled;
- next independent Growth workstream identified as a non-implementation SEO brief for `/calculator/`.

NEXT_ACTION:
- prepare and maintain the Growth-owned `/calculator/` SEO brief using current page implementation and first-party Search Console telemetry when available;
- monitor current Search Console indexing/query discovery when authenticated source access is available;
- route any concrete Web implementation requirement to Web, any new measurement requirement outside the approved Analytics contract to Analytics, and any scientific proposition to Evidence / Scientific Content.

BLOCKERS:
- current authenticated Search Console telemetry is not available from the present Control Plane/tooling context; this blocks current-performance assertions, not non-telemetry Growth work;
- PB-DEC-002 remains open and blocks default-locale, URL-prefix, redirect and fallback decisions;
- scientific compound/content opportunities remain subject to existing Evidence / Scientific Content gates.

OWNER_REQUIRED: `NO`

DEPENDENCIES:
- Web: implementation, technical SEO QA and deployment of any approved Growth requirements;
- Analytics: canonical metric/event semantics and any measurement change beyond the approved contract;
- Evidence / Scientific Content: scientific propositions, claims and publication-eligible scientific material;
- Legal / Privacy: any Growth technique introducing tracking, cookies, identifiers, profiling, email capture, remarketing, advertising pixels, third-party audience tooling or materially new personal-data processing.

OPEN_REQUESTS: `NONE ON CURRENT MAIN`

LAST_VERIFIED_GITHUB_STATE:
- repository: `e-milysol/peptibloom-project`;
- branch: `main`;
- verified SHA: `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`;
- verified date: `2026-08-19`;
- `project/REQUESTS/open/`: empty except `.gitkeep` at verification;
- PB-DEC-002: `PROPOSED` / unresolved;
- Analytics contract: approved; production instrumentation remains separately gated.

## Purpose

Own organic discovery strategy and operational search-distribution coordination without creating scientific claims, changing language policy, or treating historical search observations as current telemetry.

## Operational ownership

Growth / SEO / Distribution owns:

- SEO strategy and prioritization;
- search queries and search intent analysis;
- organic distribution;
- SEO/content briefs;
- acquisition experiments;
- Search Console monitoring.

This ownership does not authorize scientific claims, Evidence decisions, production Analytics instrumentation, Web implementation outside Web authority, Legal/privacy approval, Commerce authorization, product-sale authorization, or changes to the public language/default-locale/URL-prefix policy.

## Search Console operating rule

Google Search Console is the first-party source of truth for Google organic performance.

Growth must apply the following rules:

- historical Search Console snapshots remain explicitly date-scoped and are never silently promoted to current telemetry;
- current indexed/discovered URLs, impressions, clicks, queries, CTR and average position require a current source observation;
- absence of available telemetry means `UNKNOWN` / `PENDING MEASUREMENT`, not zero, unless the source itself reports zero for the relevant scope and period;
- Growth must not fabricate impressions, clicks, queries, CTR, position, rankings, traffic or conversions;
- early indexing and performance data may be incomplete, especially during the initial baseline period, and must be interpreted accordingly;
- targets must not be retroactively invented and relabelled as baselines;
- current first-party Search Console observations take precedence over speculative traffic estimates or historical snapshots.

The durable methodology in `project/MEASUREMENT.md` remains the measurement reference for reporting cadence and baseline interpretation.

## HISTORICAL OPERATIONAL OBSERVATION — 2026-08-18

The following are dated operational observations recovered and reconciled for coordination history. They are not assertions of current Search Console or traffic state.

- Search Console Domain property `sc-domain:peptibloomproject.com` was observed verified on `2026-08-18`.
- The sitemap was submitted on `2026-08-18`.
- The sitemap status was observed as `Success` on `2026-08-18`.
- Search Console discovered pages were observed as `5` on `2026-08-18`.
- Organic baseline start: `2026-08-18`.
- The Cloudflare Web Analytics beacon was observed inactive at that historical point.

These observations must not be used as current impressions, clicks, queries, CTR, average position, rankings, indexed/discovered URL count, traffic, conversions, or other current performance telemetry. Current values require a fresh observation from the applicable source.

## Current Search Console telemetry

Current authenticated Search Console telemetry is not recorded in this handoff and was not available from the Control Plane/tooling context during the `2026-08-19` Phase 2 reconciliation.

Therefore current:

- indexed/discovered URL count;
- impressions;
- clicks;
- queries;
- CTR;
- average position;
- rankings;
- traffic;
- conversions;

remain `UNKNOWN / PENDING CURRENT SOURCE OBSERVATION` unless later updated from the first-party source.

Lack of current telemetry does not block Growth from performing non-telemetry-dependent SEO strategy, search-intent research, brief preparation, distribution research or dependency coordination.

## `/calculator/` Growth workstream

The next legitimate Growth-owned workstream is a non-implementation SEO brief for `/calculator/`.

### Growth-owned recommendation scope

Growth may independently research and recommend:

- search intent and query clusters relevant to the existing arithmetic/research-tool positioning;
- discoverability and page-positioning opportunities;
- title and meta-description recommendations;
- information-architecture improvements;
- arithmetic/explanatory content opportunities that remain non-scientific and do not recommend doses, routes, frequencies, regimens, compounds or treatment outcomes;
- internal-linking opportunities among the existing public editorial/tool surfaces;
- FAQ opportunities grounded in search demand and the calculator's existing mathematical boundaries;
- structured-data opportunities consistent with the actual page/tool behavior;
- SERP/snippet clarity and expectation-setting;
- future localization/search-intent implications for `en`, `es` and `fr` without choosing the default locale, URL-prefix strategy, redirects or fallback behavior while PB-DEC-002 remains open.

Growth recommendations must be evidence-based where telemetry exists and explicitly labelled as research/proposal where telemetry does not yet exist.

### Web implementation boundary

Growth does not directly modify `/calculator/` under this handoff.

Any implementation requirement affecting:

- HTML/templates;
- metadata;
- internal links;
- structured data;
- components;
- routing;
- localized URLs;
- deployment;

belongs to Web and must be routed through the normal Control Plane path when actionable.

### Evidence / Scientific Content boundary

Growth may identify a query or content opportunity but may not convert it into scientific truth.

Any proposed public statement about:

- a compound;
- mechanism;
- efficacy;
- safety;
- clinical or research outcome;
- dosing, route, frequency, regimen or protocol;
- evidence strength or scientific interpretation;

requires the applicable Evidence / Scientific Content process before it may become production content.

SEO opportunity, search volume, competitor repetition or snippet potential never substitutes for Evidence.

## Language / URL boundary

Recovered historical language or URL-architecture proposals are not restored here.

PB-DEC-002 remains open/proposed. Growth must not infer or decide:

- the primary/default language;
- whether the default locale is URL-prefixed;
- ES/EN/FR rollout order;
- browser-language redirects;
- fallback behavior;
- canonical/hreflang URL policy that depends on those unresolved choices.

Growth work that can proceed independently includes search-intent research, query clustering, non-localized SEO briefs, information architecture, current-route internal-link analysis, SERP research and future per-language opportunity mapping labelled as proposed.

Only implementation or finalization of locale-dependent URL/routing behavior remains gated by PB-DEC-002.
