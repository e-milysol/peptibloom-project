# PeptiBloom Visual Production Foundation — Phase 1

Status: PROPOSED / WORK 08 FOUNDATION
Date: 2026-08-21
Owner workstream: WORK 08 — Visual Production / Asset Library

## Authority and boundaries

WORK 08 converts authorized Brand, Catalog, Evidence, Physical Product, Packaging and Web inputs into reproducible visual assets and derivatives. It does not redefine those domains.

Hard controls:
- `GENERATED != APPROVED`.
- `RECOVERED LEGACY VISUAL != CURRENT CANON`.
- `VISUAL COLOR != SCIENTIFIC EVIDENCE GRADE`.
- `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- Canonical logo remains `apps/web/public/brand/logo.png` = `OFFICIAL / MASTER / DO NOT REGENERATE`.
- No product geometry, scientific mechanism, claim, commercial eligibility or publication state may be invented to complete a visual.

## Registry architecture

Do not create a parallel visual registry. Extend `project/BRAND_ASSET_REGISTRY.md` as the project-level visual asset registry and preserve owner-domain authority per record.

Minimum normalized fields for new/reconciled records:

`ASSET_ID`, `TITLE`, `DESCRIPTION`, `DOMAIN`, `ASSET_TYPE`, `PRODUCT_ID`, `FAMILY`, `VERSION`, `STATUS`, `CREATED_AT`, `CREATED_BY`, `SOURCE_ASSETS`, `DERIVED_FROM`, `SUPERSEDES`, `DIMENSIONS`, `FORMAT`, `INTENDED_CHANNELS`, `BRAND_SYSTEM_VERSION`, `PROMPT_OR_PRODUCTION_INSTRUCTIONS`, `FILE_LOCATION`, `REVIEW_STATUS`, `APPROVALS`, `HASH`, `ORIGINAL_FILENAME`, `PROVENANCE`, `CURRENT_CANON_RELATIONSHIP`, `NOTES`.

Unknown facts use `UNKNOWN`; they are not inferred.

## Asset type vocabulary

Initial WORK 08 types:

`BRAND`, `PRODUCT_MASTER`, `PRODUCT_HERO`, `PRODUCT_CARD`, `CATALOG`, `WEB_HERO`, `WEB_CARD`, `WEB_THUMBNAIL`, `SOCIAL_SQUARE`, `SOCIAL_PORTRAIT`, `SOCIAL_STORY`, `EDITORIAL`, `INFOGRAPHIC`, `PACKAGING_PREVIEW`, `PHYSICAL_PRODUCT`, `UI_VIGNETTE`, `EMAIL`, `PRINT`, `LEGACY_SOURCE`.

This is a production vocabulary, not a transfer of domain authority.

## Naming convention

Future accepted files should use:

`PB_<DOMAIN>_<DESCRIPTIVE-TITLE>_<YYYY-MM-DD>_vNN.ext`

Derivatives append a channel/format token before the date when useful:

`PB_<DOMAIN>_<DESCRIPTIVE-TITLE>_<FORMAT>_<YYYY-MM-DD>_vNN.ext`

Examples:
- `PB_CATALOG_GHKCU100_ProductHero_2026-08-21_v01.png`
- `PB_CATALOG_GHKCU100_ProductHero_IG45_2026-08-21_v01.png`

Rules:
- preserve `ORIGINAL_FILENAME` for provenance;
- opaque names such as `image-gen-*` may be mapped/renamed only without losing the original name;
- version numbers are explicit; approved files are never silently overwritten.

## Status model

WORK 08 production states:

`DISCOVERED` → `LEGACY_SOURCE` or `DRAFT` → `GENERATED` → `REVIEW_REQUIRED` → `APPROVED_MASTER` → `APPROVED_DERIVATIVE` → `PUBLICATION_READY`.

Terminal/history states: `SUPERSEDED`, `RETIRED`.

Additional domain gates remain independent. In particular `APPROVED_MASTER` does not imply print approval, scientific approval, commercial eligibility, publication authorization or `READY_FOR_SALE`.

## Master → derivative model

Prefer one reviewed master over independent regeneration.

A derivative must preserve:
- source `ASSET_ID` / `DERIVED_FROM` relationship;
- substantive information and approved meaning;
- Brand and domain authority constraints;
- crop/composition changes only as required by the target format.

If a requested output changes scientific, product, commercial or regulatory meaning, it is not a derivative; it requires new upstream authorization/input.

## Initial format matrix

| Format | Baseline | Primary use | Initial safe-area / crop rule |
|---|---:|---|---|
| A4 portrait | 210 × 297 mm | editorial / PDF / print proof | keep critical content inside conservative print margins; production bleed remains Packaging/Print-defined |
| Social square | 1080 × 1080 px | social | central subject/text must survive minor platform crop |
| Social portrait | 1080 × 1350 px | social feed | keep critical text/logo away from outer edge; master should recompose rather than stretch |
| Story / Reel | 1080 × 1920 px | vertical social | protect top/bottom UI zones; exact platform safe areas remain channel-specific and reviewable |
| Web landscape | 1600 × 900 px working baseline | hero/editorial | focal content must support responsive crop; Web owns final implementation behavior |
| Web card | 1200 × 900 px working baseline | cards/catalog previews | maintain subject within central crop-safe region |
| Thumbnail | 600 × 600 px working baseline | index/list | must remain legible at small size; remove nonessential microcopy |
| Email | 1200 × 600 px working baseline | email banner | text should remain HTML where possible; image must tolerate downscale |

These are production starting baselines, not immutable cross-domain technical requirements. Web, Packaging, Print or channel owners may supply different validated constraints.

## Catalog intake contract

Minimum intake before WORK 08 creates a real product visual:
- authoritative public product identity/name;
- PRODUCT_ID or explicit `UNKNOWN` / synthetic status;
- variant/presentation fields authorized for display;
- intended channel and requested asset type;
- publication/commercial state if relevant;
- approved copy fields or explicit no-copy instruction;
- authoritative physical representation source where the object is real;
- Brand system/version to apply;
- applicable Evidence/Legal/Packaging constraints.

If these inputs are absent, WORK 08 may create only clearly synthetic, atmospheric or structural design work that does not invent the missing truth.

## Downstream handoff contract

Each handoff to Web / Social / Print should include:
- `ASSET_ID` and version;
- status and approval scope;
- file/export location;
- dimensions/format;
- master relationship;
- intended channels;
- crop/safe-area notes;
- prohibited uses / unresolved gates;
- Brand version;
- required attribution/provenance when applicable.

`PUBLICATION_READY` is assigned only when the relevant downstream/publication gates are actually satisfied.

## Duplicate prevention

Before generation:
1. search registry by product, title, asset type and channel;
2. locate approved/current master;
3. inspect derivative relationships;
4. `REUSE / DERIVE` before `REGENERATE`;
5. if regeneration is necessary, record why and what it supersedes.

## Current recovered legacy inventory — Phase 1 index

The following sources are already evidenced in Issue #13 and are to be represented as related legacy records in the existing registry. Binary availability may remain File Library-only; metadata registration does not authorize reconstruction.

| Legacy source | Approx. date | Classification / relationship |
|---|---|---|
| `Guía de identidad visual PeptiBloom.png` | 2026-08-06 | LEGACY_SOURCE — early identity/palette/type system |
| `Sistema de Etiquetado Holográfico PeptiBloom.png` | 2026-08-13 | LEGACY_SOURCE — holographic label/family concept; historical print notes |
| `image-gen-1(20260817-134928).png` | 2026-08-17 | LEGACY_SOURCE — full branding board |
| `PeptiBloom: conceptos florales y ADN.png` | 2026-08-17 | LEGACY_SOURCE — floral/DNA exploration |
| `PeptiBloom: Ciencia, Bienestar y Longevidad(1).png` | 2026-08-17 | LEGACY_SOURCE — banner/application; copy not current canon |
| `Sistema de Diseño PeptiBloom.png` | UNKNOWN | LEGACY_SOURCE — later fixed/variable label architecture |
| `Viales PeptiBloom: ciencia en floración.png` | UNKNOWN | LEGACY_SOURCE — vial mock application |
| `PeptiBloom_VISUAL_LEGACY_RECONCILIATION_v0.1.docx` | 2026-08-18 | LEGACY_SOURCE / reconciliation map |
| `Catálogo PeptiBloom: organización pastel premium.png` | 2026-08-12 | LEGACY_SOURCE / catalog master-like composition |
| `Dispensador PeptiBloom para rutina organizada.png` | 2026-08-12 | LEGACY_SOURCE / PepperBox standalone card; historical PB-3D-001 visual ID |
| `Colección PeptiBloom para viales de 3 ml.png` | 2026-08-12 | LEGACY_SOURCE / Bloom Caps PB-CAP-01…08 grid |
| `image-gen-1(4).png` | 2026-08-12 | LEGACY derivative / alternate Bloom Caps grid |
| `image-gen-1(5).png` | 2026-08-12 | LEGACY derivative / standalone Bloom Cap card |
| `image-gen-1(6).png` | 2026-08-12 | LEGACY derivative / standalone Bloom Cap card |
| `Infografía de tapa corazón violeta PeptiBloom.png` | 2026-08-12 | LEGACY derivative / Bloom Heart card |
| `image-gen-1(7).png` | 2026-08-12 | LEGACY_SOURCE / Bloom Day PB-DAY-01…07 grid |
| `Calendario floral PeptiBloom de siete días.png` | 2026-08-13 | LEGACY derivative / English Bloom Day system |
| `image-gen-1(8).png` | 2026-08-12 | LEGACY derivative / PepperBox advertising card |

Historical visual/card identifiers such as `PB-CAP-*`, `PB-DAY-*`, and `PB-3D-*` remain legacy visual identifiers and must not replace current canonical PRODUCT_IDs.

Known duplicate/derivative clusters:
- Bloom Caps master/grid → alternate grid → standalone variant cards;
- Bloom Day weekly system → English/localized derivative;
- PepperBox catalog/card family → standalone/advertising derivatives;
- identity board → floral/DNA/banner application explorations;
- label system → vial mock application.

## Known-missing recovery target

`LEGACY_ASSET_FAMILY_COLOR_SPECIFICATIONS = KNOWN_MISSING / RECOVERY_ACTIVE`

Expected historical content may include Pantone/PMS and possibly CMYK/RGB/HEX family specifications. Do not reconstruct Pantone from HEX and present it as historical truth.

## What may be produced now without Evidence

Within current authority, WORK 08 may prepare:
- abstract Brand atmosphere that carries no scientific semantics;
- synthetic/non-real product-card systems and storefront fixtures clearly marked synthetic;
- layout/template systems;
- neutral UI vignettes from approved/synthetic interfaces;
- derivatives of already approved Brand masters where Brand rules permit;
- legacy registry/indexing work;
- non-scientific format/crop/export tests.

Evidence review is required before an image represents a scientific mechanism, scientific relationship, Evidence status/grade, compound-specific factual explanation or other scientific meaning.

## Current blocked / gated production

Blocked or gated:
- real compound/scientific explanatory imagery without Evidence-qualified input;
- real product representation where current physical geometry/specification is not evidenced;
- production label/packaging artwork without Packaging print lifecycle approval;
- real Catalog/publication assets without authoritative Catalog fields and applicable publication/commercial gates;
- final OpenGraph/brand asset set where Brand has not approved the required derivatives;
- any asset that would imply `READY_FOR_SALE` absent the applicable authorities.

## Brand decisions / dependencies

Brand review is required for:
- approval of logo derivatives and compact marks;
- definitive global family-color system, if one is to exist;
- final reusable product-card visual grammar when promoted beyond synthetic exploration;
- iconography system and template families;
- whether historical product/day color differentiation should be retained, modified or retired as Brand language;
- approval of any master visual before WORK 08 marks it `APPROVED_MASTER`.

These are Brand dependencies, not automatically Owner decisions.

## Media-library architecture requirements

No SharePoint adoption is authorized.

A future media library should support at minimum:
- stable `ASSET_ID` linkage to Git registry metadata;
- immutable/versioned originals;
- source + derivative relationships;
- large binary and editable formats;
- checksums where useful;
- access control by sensitivity/domain;
- search by title/product/type/status/channel/date;
- preview/thumbnails without replacing originals;
- metadata export/backup;
- retention of superseded versions;
- recoverability independent of a single chat/editor account.

Git remains suitable for registry, decisions, lightweight canonical assets and specifications. A media library may later hold heavy PNG/JPG/SVG/PDF/video/photo/render/editable/proof/export files if deliberately approved.

## Phase 1 operational state

- Existing project-level Brand Asset Registry identified: draft PR #44 / `project/BRAND_ASSET_REGISTRY.md`.
- No parallel registry created.
- Legacy recovery: ACTIVE / INCOMPLETE.
- Family Color Specification Sheets: KNOWN_MISSING / RECOVERY_ACTIVE.
- Owner decision currently required: NO.
- SharePoint/media library implementation: NOT AUTHORIZED; requirements study only.
