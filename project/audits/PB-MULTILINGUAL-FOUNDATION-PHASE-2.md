# PeptiBloom multilingual foundation phase 2 audit

Audit baseline: `main` at `cef34eb` (merged PR #95), 2026-09-16. Canon: PB-DEC-002, PB-DEC-116 and PB-DEC-117.

## Classification method

- `ES_AVAILABLE`, `EN_AVAILABLE`, `FR_AVAILABLE`: reviewed source content is actually present in that language.
- `MIXED_LANGUAGE`: one rendered surface combines languages or declares a language that does not match its content.
- `LOCALIZATION_REQUIRED`: user-visible or machine-readable language remains hardcoded and has no approved translation on that surface.
- `LANGUAGE_NEUTRAL`: no linguistic content needs localization.

Infrastructure capability is not counted as translation availability. Technical terms, source titles and quotations retained for provenance do not by themselves change an otherwise Spanish article to mixed-language.

## Executive audit

- The build contains 48 public HTML routes plus `/sitemap.xml`.
- There were no `/en/` or `/fr/` page files or generated routes. Direct prefixed requests therefore had no localized content.
- All 48 HTML routes were unprefixed and PR #95 caused them to declare `lang="es"`, `og:locale=es_ES` and WebPage `inLanguage=es` by path inference.
- The five institutional/tool pages (`/`, `/about/`, `/library/`, `/methodology/`, `/calculator/`) contain English page copy and metadata. They were therefore English content incorrectly declared and published in the Spanish URL namespace.
- The 43 Research Basics pages contain Spanish page copy and Spanish metadata, but inherited an English skip link, header and footer. Their rendered documents were therefore mixed-language.
- No French page content was found anywhere in the public web. French support in a type union and schema array was capability/claim only, not a translation.
- The calculator page and both calculator scripts contain extensive English interface, validation, status, table, FAQ and accessibility copy. Its arithmetic is language-neutral, but its UI is `EN_AVAILABLE` only.
- No `hreflang` existed. This was correct because no equivalent localized route sets existed.
- The sitemap listed only unprefixed URLs and contained no alternates. That is safe until equivalent translations are approved.

## Route/language matrix at audit baseline

`Yes` means the complete page body/metadata was found in that language. The classification describes the rendered route before this foundation change, including shared chrome.

| Route | ES | EN | FR | Classification | Finding |
|---|---:|---:|---:|---|---|
| `/` | No | Yes | No | `MIXED_LANGUAGE` | English page at Spanish URL, declared `es` |
| `/about/` | No | Yes | No | `MIXED_LANGUAGE` | English page at Spanish URL, declared `es` |
| `/calculator/` | No | Yes | No | `MIXED_LANGUAGE` | English calculator and scripts at Spanish URL, declared `es` |
| `/library/` | No | Yes | No | `MIXED_LANGUAGE` | English page at Spanish URL, declared `es` |
| `/methodology/` | No | Yes | No | `MIXED_LANGUAGE` | English page at Spanish URL, declared `es` |
| `/research-basics/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish page with English shared chrome |
| `/research-basics/agua-esteril-vs-bacteriostatica/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/bacteriostatico-no-significa-esteril-para-siempre/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/cadena-frio-que-es-como-se-controla/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/coa-100-seguridad/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/como-leer-un-coa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/como-se-fabrica-un-peptido/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/como-verificar-coa-laboratorios-europa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/dosis-concentracion-volumen-escala-jeringa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/especificacion-criterio-aceptacion-resultado/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/esteril-vs-libre-endotoxinas/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/excursion-temperatura-que-significa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/fabricacion-caducidad-retest-fechas/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/filtro-esterilizante-elimina-endotoxinas/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/hplc-99-que-significa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/hplc-vs-lc-ms/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/identidad-pureza-cantidad-no-son-lo-mismo/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/impurezas-degradacion-agregados-peptidos/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/incertidumbre-medicion-que-significa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/limite-deteccion-cuantificacion-lod-loq/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/liofilizado-colapsado-agrietado-retraido/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/liofilizado-siempre-blanco/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/por-que-liofilizado-parece-cake/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/por-que-peptidos-largos-son-dificiles/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/precision-exactitud-diferencia/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/proteger-desproteger-aminoacido/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-degrada-peptidos-temperatura-luz-humedad-oxidacion-agitacion/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-alcohol-bencilico-conservante/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-bioburden-carga-microbiana/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-endotoxina-bacteriana/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-espectrometria-de-masas/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-spps/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-un-aminoacido/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-es-un-coa/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-significa-bacteriostatico/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-significa-conservar-2-8-c/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-significa-lote-lot-batch/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-significa-mg-por-vial/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/que-significa-research-use-only-ruo/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/quien-descubrio-aminoacidos-por-que-se-llaman-asi/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/temperatura-ambiente-controlled-room-temperature/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/tipos-escalas-jeringas/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/research-basics/viales-materiales-cierres/` | Yes | No | No | `MIXED_LANGUAGE` | Spanish article with English shared chrome |
| `/sitemap.xml` | — | — | — | `LANGUAGE_NEUTRAL` | Only published unprefixed URLs; no false alternates |

## Surface inventory

| Surface | Files | Baseline classification | Audit finding |
|---|---|---|---|
| Shared layout | `src/layouts/BaseLayout.astro` | `MIXED_LANGUAGE` | Locale inferred from path, but skip link, WebSite description and social image alt were English; WebSite schema claimed all three languages despite absent EN/FR routes |
| Header/navigation | `src/components/SiteHeader.astro` | `EN_AVAILABLE` | Five English labels, two English ARIA labels, and unprefixed hardcoded links |
| Footer/navigation | `src/components/SiteFooter.astro` | `EN_AVAILABLE` | Eight English copy/ARIA strings and unprefixed hardcoded links |
| Logo | `src/components/BrandLogo.astro` | `LANGUAGE_NEUTRAL` | Decorative empty `alt`; accessible name correctly belongs to containing link |
| Home, About, Library, Methodology | four page files | `EN_AVAILABLE` | Complete English body/metadata only, on unprefixed Spanish routes |
| Calculator | `src/pages/calculator/index.astro` | `EN_AVAILABLE` | English metadata, schema, form labels, buttons, validation/status messages, results, guide, FAQ, review note and inline script strings |
| Calculator enhancement | `public/calculator-enhancements.js` | `EN_AVAILABLE` | English injected headings, instructions, table headings, validation/status messages, units/capacity labels and comparison warnings |
| Research Basics index | `src/pages/research-basics/index.astro` | `MIXED_LANGUAGE` | Spanish body/metadata with English product name and inherited English chrome; product name is intentionally stable, chrome was not |
| Research Basics articles | 42 article files | `MIXED_LANGUAGE` | Spanish article body/metadata with inherited English chrome; approved scientific content was not changed |
| Article structured data | 27 Research Basics pages | `ES_AVAILABLE` | Article schema explicitly declares `inLanguage: es`; remaining articles rely only on BaseLayout WebPage schema |
| Calculator structured data | `src/pages/calculator/index.astro` | `EN_AVAILABLE` | FAQ schema explicitly declares `inLanguage: en` while route/layout declared Spanish |
| Styles and visual assets | `src/styles/global.css`, calculator CSS, favicon and editorial SVGs | `LANGUAGE_NEUTRAL` | No translatable raster/vector text found in the active visuals |
| Web app manifest | `public/site.webmanifest` | `EN_AVAILABLE` | English application name and description; `/` start URL |
| Robots | `public/robots.txt` | `LANGUAGE_NEUTRAL` | Sitemap reference only |
| Sitemap | `src/pages/sitemap.xml.ts` | `LANGUAGE_NEUTRAL` | Manual route array; no locale inventory or alternate relationships |

## Hardcoded-string inventory

### Shared/global strings moved into typed dictionaries

- Skip link.
- Brand-home accessible label.
- Primary and footer navigation accessible labels.
- Five header navigation labels.
- Footer statement, four footer navigation labels, initiative statement and three-principle line.
- WebSite schema description.
- Open Graph and Twitter image alt text.
- Web manifest name and description (Spanish default manifest).

These shared strings now have complete `es`, `en` and `fr` entries. Dictionary lookup is exact by route locale and has no fallback branch.

### Page-specific strings intentionally left in place

- All body copy, headings, calls to action, image alt text and metadata in `/`, `/about/`, `/library/` and `/methodology/` (`LOCALIZATION_REQUIRED` for Spanish and French).
- All visible and programmatic calculator copy in `src/pages/calculator/index.astro` and `public/calculator-enhancements.js`, including number formatting fixed to `en-US` (`LOCALIZATION_REQUIRED` for Spanish and French).
- The 43 Spanish Research Basics page bodies and their scientific schema (`ES_AVAILABLE`; English and French editorial translations required).
- Source titles, quotations, references, compound/scientific terminology and evidence language. These require scientific/editorial review and were not translated.

### Accessibility inventory

- Shared skip link and shared navigation/brand ARIA labels were hardcoded in English and are now dictionary-backed.
- Page-specific `aria-label`, `aria-labelledby`, `aria-live`, image `alt`, form label, summary and status strings remain with their owning page. The calculator accounts for most programmatic English accessibility copy.
- Structural `aria-labelledby` references and decorative `aria-hidden` values are language-neutral.

## Implemented architecture

1. Astro i18n declares `es`, `en`, `fr`, sets `es` as default and keeps the default locale unprefixed.
2. No `fallback` is configured. Missing `/en/` and `/fr/` pages remain missing and cannot rewrite or redirect to Spanish content.
3. `src/i18n/config.ts` owns locale types, prefixes, Open Graph locales, strict path detection and locale-aware URL generation.
4. `src/i18n/ui.ts` owns only shared UI/metadata strings. All locale dictionaries are statically typed and selected exactly.
5. `src/i18n/routes.ts` is the explicit publication registry used by the sitemap and navigation. `en` and `fr` are empty until real, approved route files exist.
6. `BaseLayout`, `SiteHeader` and `SiteFooter` receive the route locale and render localized shared content/links.
7. No language switcher or `hreflang` is emitted because no equivalent localized URLs exist. Add either only after the registry contains reviewed equivalent routes.

## Sitemap and SEO rules

- Canonical URLs remain self-referential to the actual path.
- `html[lang]`, `og:locale`, WebPage `inLanguage` and shared WebSite copy derive from the route locale.
- WebSite `inLanguage` describes the current localized surface rather than claiming unavailable translations.
- The sitemap is generated from the publication registry. Empty English/French registries produce no fake URLs.
- Future `hreflang` must be generated from an explicit equivalence set, not from supported locale names. Partial or non-equivalent route groups must not emit alternates.

## Remaining translation backlog

1. Obtain editorial Spanish translations for Home, About, Library and Methodology; their current unprefixed English bodies conflict with PB-DEC-002.
2. Obtain editorial/scientific Spanish calculator localization, including FAQ schema, validation/status strings, enhancement script and locale-aware number parsing/formatting.
3. Create English routes only from the already English institutional/calculator source after each route is complete and reviewed; do not expose placeholders.
4. Obtain scientific/editorial English and French translations for each Research Basics article individually, preserving identity, citations, qualifiers and evidence meaning.
5. Add French institutional/tool content through editorial review.
6. Add an accessible text language selector only when at least one useful destination exists for each displayed locale; never link to a missing equivalent.
7. Add route-equivalence metadata and `hreflang` only for complete, reviewed equivalents.
8. Consider locale-specific web manifests if localized installed-app metadata is later required; the current static manifest correctly reflects the Spanish default surface only.

## Owner decisions

No new Owner policy decision is required for this foundation. Editorial/scientific approval is required before publishing any page translation or equivalent-route relationship.
