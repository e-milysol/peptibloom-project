# PeptiBloom Organic Growth Measurement

Baseline date: 2026-08-18

## Objective

Increase qualified organic discovery of PeptiBloom's evidence-first library and research tools without unsupported
health claims, fabricated expertise, paid-link schemes or search-engine manipulation.

## Measurement stack

### 1. Google Search Console — search acquisition source of truth

Use a Domain property for `peptibloomproject.com` when DNS verification is available. Search Console is the primary
source for:

- indexed pages and crawl/indexing problems;
- organic impressions and clicks;
- search queries, landing pages, countries and devices;
- click-through rate and average position as diagnostic metrics, not vanity targets.

The web supports `PUBLIC_GOOGLE_SITE_VERIFICATION` as a fallback HTML-tag verification path. Domain verification by
DNS remains preferable because it covers all protocols and subdomains.

Official references:

- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://support.google.com/webmasters/answer/34592

### 2. Cloudflare Web Analytics — privacy-first onsite baseline

Use Cloudflare Web Analytics for page views, visits, referrers, paths and Core Web Vitals without adding GA4 and a
cookie-consent dependency during the first measurement phase. Set `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` in the
Cloudflare Workers build environment to emit the beacon.

Official reference:

- https://developers.cloudflare.com/web-analytics/

### 3. Bing Webmaster Tools — secondary discovery and validation

Add the site after the sitemap is live. The web supports `PUBLIC_BING_SITE_VERIFICATION` for tag verification.

Official reference:

- https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b

## Qualified organic traffic

Do not report every organic visit as equally valuable. During phase 1, report separately:

1. **Organic discovery:** non-branded impressions and clicks from Search Console.
2. **High-intent landings:** organic entrances to `/calculator/`, future approved scientific entries and methodology.
3. **Evidence interaction:** source-link clicks and scientific-entry engagement once the Evidence public contract is live.
4. **Tool completion:** calculator completions only after an approved privacy-safe event pipeline exists. Do not infer
   completion from page views.

The first two are measurable immediately after verification. The latter two require future event instrumentation and
must not be backfilled from assumptions.

## Baseline findings before this change

- Public routes existed for home, library, calculator, methodology and about.
- `robots.txt` allowed search indexing through Cloudflare-managed content signals.
- No XML sitemap was published (`/sitemap.xml` and `/sitemap-index.xml` returned 404).
- Pages had no canonical URL declarations.
- Pages had no structured data.
- Social metadata lacked explicit canonical URL and Twitter title/description fields.
- The site was English-only; no localized routes or `hreflang` declarations existed.
- The calculator performed transparent arithmetic but had limited indexable explanation of formulas and boundaries.

## Implemented foundation

- A native Astro XML sitemap endpoint with the production origin declared explicitly.
- Canonical URLs, robots directives, sitemap discovery and WebSite/WebPage structured data.
- WebApplication structured data for the calculator.
- Search Console, Bing and Cloudflare Web Analytics environment hooks.
- Search-intent-aligned calculator title and description without promise-of-outcome language.
- Visible formulas, a worked arithmetic example, limitations and internal links to the tool.

## Reporting cadence

- **Week 0:** verify properties, submit sitemap and annotate deployment date.
- **Weeks 1–4:** inspect indexing and query discovery weekly; fix coverage or canonical problems before publishing more.
- **After 28 complete days:** establish the first defensible baseline by language, country, page and branded/non-branded
  query class.
- **Quarterly:** review content decay, source freshness, broken citations, Core Web Vitals and pages with impressions
  but weak query satisfaction.

Do not set traffic-growth percentages before the 28-day baseline exists. Early percentage changes from a near-zero
denominator are numerically dramatic and strategically meaningless.

## Multilingual decision still required

PeptiBloom canon requires English, Spanish and French support. The owner has prioritized an English/Spanish strategy,
but the default locale and URL-prefix policy are not yet approved. Do not create localized URLs or `hreflang` until
that policy is explicitly recorded; premature locale paths create avoidable redirects and duplicate-language signals.
