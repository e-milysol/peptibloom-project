# PeptiBloom Brand / Visual Asset Registry

Owner domain: BRAND / VISUAL

Purpose: durable identity, provenance, status and recoverability registry for PeptiBloom visual assets. This registry is authoritative for Brand-side asset identity/provenance/status only. It does not transfer packaging, scientific, legal, commercial or implementation authority.

## Permanent authority anchors

- Canonical PeptiBloom logo: `apps/web/public/brand/logo.png` = **OFFICIAL / MASTER / DO NOT REGENERATE**.
- `VISUAL COLOR != SCIENTIFIC EVIDENCE GRADE`.
- Legacy or polished visual material is not automatic canon.
- Canva or another external editor may be an `EXTERNAL_EDITABLE_SOURCE`; it is never the sole durable registry.
- `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- `NO ASSET WITHOUT REGISTRY ENTRY` applies to new/recovered relevant visual assets.

## Storage convention

Registry metadata lives in this file.

When actual non-restricted files are accepted into the repository, use stable asset-ID folders rather than chat/local-machine names:

- Brand-owned visual sources/exports: `assets/brand/<ASSET_ID>/`
- Packaging-owned visual applications/exports: `assets/packaging/<ASSET_ID>/`

Do not create empty folders merely to reserve them. Add source/export files only when the actual artifact is supplied and its provenance can be recorded. Large/generated/editable files require deliberate review before repository storage; external editable references may supplement, but not replace, recoverable durable files/metadata.

Restricted WORK 7 supplier, price, invoice, tracking, payment or private operational information must not be stored here.

## Record fields

Each record should preserve, when applicable:

`ASSET_ID`, `TITLE / NAME`, `DESCRIPTION`, `DOMAIN / OWNER_DOMAIN`, `ASSET_TYPE`, `PRODUCT_ID`, `FAMILY`, `VERSION`, `STATUS`, `CREATED_AT / CREATED_DATE`, `CREATED_BY`, `SOURCE_ASSETS`, `SOURCE / PROVENANCE`, `DERIVED_FROM`, `SUPERSEDES / REPLACED_BY`, `DIMENSIONS`, `FORMAT`, `INTENDED_CHANNELS`, `BRAND_SYSTEM_VERSION`, `PROMPT_OR_PRODUCTION_INSTRUCTIONS`, `FILE_LOCATION`, `SOURCE_FILES`, `EXPORTS`, `REVIEW_STATUS`, `APPROVALS`, `PRINT_STATE`, `HASH`, `ORIGINAL_FILENAME`, `CANONICAL_MASTER_RELATIONSHIP`, `AUTHORIZED / INTENDED USE`, `PROHIBITED / NON-AUTHORIZED USE`, `EXTERNAL_EDITABLE_SOURCE`, `NOTES`.

Unknown values remain `UNKNOWN`. Reconciliation labels such as `ARTIFACT_REVIEW_PENDING`, `KEEP_CANDIDATE`, `MODIFY_CANDIDATE`, `RETIRE`, `APPROVED_DERIVATIVE` and `PRODUCTION_APPROVED` are descriptive registry states where useful; this file does not create a new project-wide enum.

## Naming convention for new production

Preferred filename pattern:

`PB_<DOMAIN>_<DESCRIPTIVE-TITLE>_<YYYY-MM-DD>_vNN.ext`

Derivatives may append a channel/format token before the date. Preserve `ORIGINAL_FILENAME` for provenance when an imported/recovered file had an opaque name.

---

## PB-VA-001 — PB Floral DNA Mark

- `ASSET_ID`: `PB-VA-001`
- `NAME`: PB Floral DNA Mark
- `ASSET_TYPE`: BRAND_DERIVATIVE / DECORATIVE_MARK
- `STATUS`: DESIGN_CANDIDATE / ARTIFACT_REVIEW_PENDING
- `OWNER_DOMAIN`: BRAND / VISUAL
- `DESCRIPTION`: Decorative PeptiBloom visual composition containing a PB monogram, DNA helix, orchid/floral motif and molecular decorative elements in pink/lilac/rose-gold visual language.
- `SOURCE / PROVENANCE`: Owner supplied the real visual source used for the PB/orchid/DNA composition on 2026-08-19: `logo - copia.png`, PNG, 1536x1024 RGBA, SHA-256 `edd40c6118104cda7ecfb13d66881feb5b1cc6aba19b0b1354de69ed254674a1`. This supplied file is provenance evidence for this derivative; it is not thereby promoted to canonical logo authority.
- `CREATED_DATE`: UNKNOWN
- `CANONICAL_MASTER_RELATIONSHIP`: NOT PRIMARY LOGO. The canonical PeptiBloom logo remains `apps/web/public/brand/logo.png` = OFFICIAL / MASTER / DO NOT REGENERATE. The supplied `logo - copia.png` is a separate real visual source/provenance artifact and must not be confused with or replace the canonical master.
- `DERIVED_FROM`: Owner-supplied `logo - copia.png` (SHA-256 above).
- `AUTHORIZED / INTENDED USE`: Decorative Brand applications subject to applicable downstream review. First intended application: `PB-VA-002` Thank You Round Label.
- `PROHIBITED / NON-AUTHORIZED USE`: Must not replace or impersonate the canonical logo; must not be represented as the primary PeptiBloom logo; no scientific Evidence meaning; no regulatory, authenticity or security meaning; no production approval implied by visual completion.
- `SOURCE_FILES`: Actual source artifact supplied to Brand intake: `logo - copia.png`; durable repository binary path PENDING. Do not reconstruct or substitute it.
- `EXPORTS`: No standalone PB Floral DNA Mark export exists at this time per Owner. Do not reconstruct one merely to complete the registry.
- `PRINT_STATE`: NOT ESTABLISHED / not itself a print-approval record
- `RELATED_PACKAGING_ASSET`: `PB-VA-002`
- `EXTERNAL_EDITABLE_SOURCE`: UNKNOWN
- `SUPERSEDES / REPLACED_BY`: NONE KNOWN / NONE KNOWN
- `NOTES`: Provisional classification remains Brand derivative / not primary logo. Owner preference for the current design does not by itself promote this asset to global Brand canon or `APPROVED_DERIVATIVE`.

## PB-VA-002 — Thank You Round Label

- `ASSET_ID`: `PB-VA-002`
- `NAME`: Thank You Round Label
- `ASSET_TYPE`: PACKAGING_APPLICATION / DECORATIVE_ROUND_LABEL
- `STATUS`: DESIGN_CANDIDATE / ARTIFACT_REVIEW_PENDING
- `OWNER_DOMAIN`: PACKAGING / LABELS
- `DESCRIPTION`: Circular decorative/customer-experience packaging label export visibly containing “Thank you” script, the PB/orchid/DNA composition, and pastel pink/lilac/rose-gold treatment.
- `SOURCE / PROVENANCE`: Owner supplied the current real export on 2026-08-19: `a_clean_high_resolution_circular_badge_sticker_st.png`, PNG, 1254x1254 RGBA, SHA-256 `2bb6c35a8b5abdff645bc300b95aecb55b759d01f99cb477722b8cd871350bcd`. Owner identifies it as the current export of Thank You Round Label.
- `CREATED_DATE`: UNKNOWN
- `CANONICAL_MASTER_RELATIONSHIP`: Consumes Brand visual identity but is not a logo and is not a canonical Brand master.
- `DERIVED_FROM`: `PB-VA-001` plus circular packaging-label composition. Exact editable-tool/project provenance remains UNKNOWN because no editable source/reference was supplied.
- `AUTHORIZED / INTENDED USE`: Candidate circular decorative packaging/customer-experience label, subject to Brand/Packaging visual review and print validation before production artwork approval.
- `PROHIBITED / NON-AUTHORIZED USE`: No scientific claim; no regulatory claim; no authenticity/security claim; not production-approved artwork; must not be used to imply Evidence grade or product/commercial eligibility.
- `SOURCE_FILES`: Editable/source design UNKNOWN / not supplied.
- `EXPORTS`: Actual current export supplied to Brand intake: `a_clean_high_resolution_circular_badge_sticker_st.png` (SHA-256 above); durable repository binary path PENDING. Do not reconstruct or substitute it.
- `PRINT_STATE`: NOT_PRINT_TESTED. `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- `RELATED_PACKAGING_ASSET`: Issue #19 — Packaging / Labels / Marketplace Visuals consolidation queue; packaging application authority remains Packaging / Labels.
- `EXTERNAL_EDITABLE_SOURCE`: UNKNOWN
- `SUPERSEDES / REPLACED_BY`: NONE KNOWN / NONE KNOWN
- `NOTES`: Brand / Visual owns the referenced Brand asset identity/provenance; Packaging / Labels owns this application’s label specification, print lifecycle and production-artwork state.

---

## Recovered legacy visual records — July/August 2026

All records in this section are `LEGACY / RECOVERED / SOURCE ARTIFACT` unless a narrower derivative relationship is stated. They are not current Brand, Product, Evidence, Packaging, Legal or commercial canon.

### PB-VA-L001 — Early Visual Identity Guide
- `ORIGINAL_FILENAME`: `Guía de identidad visual PeptiBloom.png`
- `APPROX_DATE`: 2026-08-06
- `ASSET_TYPE`: LEGACY_SOURCE / BRAND_SYSTEM
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact; indexed in Issue #13 legacy recovery.
- `DESCRIPTION`: Historical palette, Playfair Display + Montserrat, iconography/evidence-badge explorations and early identity rules.
- `CURRENT_CANON_RELATIONSHIP`: Historical evidence only; does not replace current canonical logo or WEB M1 visual canon.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L002 — Holographic Label System
- `ORIGINAL_FILENAME`: `Sistema de Etiquetado Holográfico PeptiBloom.png`
- `APPROX_DATE`: 2026-08-13
- `ASSET_TYPE`: LEGACY_SOURCE / PACKAGING_PREVIEW
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact; indexed in Issue #13.
- `DESCRIPTION`: Historical 40×20 mm holographic label concept, Space Grotesk/Outfit, family variants, QR/LOT variable-field architecture, NIIMBOT notes and `laser silver` material concept.
- `CURRENT_CANON_RELATIONSHIP`: Family colors/print notes are historical only; no Evidence semantics or production approval.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L003 — Full Branding Board
- `ORIGINAL_FILENAME`: `image-gen-1(20260817-134928).png`
- `APPROX_DATE`: 2026-08-17
- `ASSET_TYPE`: LEGACY_SOURCE / BRAND_SYSTEM
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact.
- `DESCRIPTION`: Full branding board; historical Blush/Lavender/Mauve/Slate/Off White palette, Playfair Display + Montserrat, logo/submark/icon explorations, orchid/DNA language and applications.
- `CURRENT_CANON_RELATIONSHIP`: Alternative marks do not replace canonical master logo.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L004 — Floral and DNA Concepts
- `ORIGINAL_FILENAME`: `PeptiBloom: conceptos florales y ADN.png`
- `APPROX_DATE`: 2026-08-17
- `ASSET_TYPE`: LEGACY_SOURCE / BRAND_EXPLORATION
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact.
- `DESCRIPTION`: Floral/DNA, orchid, icon/submark and PB-monogram explorations with historical palette strip.
- `CURRENT_CANON_RELATIONSHIP`: Historical exploration only.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L005 — Science/Wellness/Longevity Banner
- `ORIGINAL_FILENAME`: `PeptiBloom: Ciencia, Bienestar y Longevidad(1).png`
- `APPROX_DATE`: 2026-08-17
- `ASSET_TYPE`: LEGACY_SOURCE / BRAND_APPLICATION
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact.
- `DESCRIPTION`: Horizontal brand/banner application with orchid/DNA motif and editorial composition.
- `CURRENT_CANON_RELATIONSHIP`: Historical slogans/taglines/contact presentation are not approved current copy.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L006 — Later Design System / Label Architecture
- `ORIGINAL_FILENAME`: `Sistema de Diseño PeptiBloom.png`
- `APPROX_DATE`: UNKNOWN
- `ASSET_TYPE`: LEGACY_SOURCE / BRAND_SYSTEM / PACKAGING_PREVIEW
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `PROVENANCE`: Recovered File Library artifact.
- `DESCRIPTION`: Later fixed/variable label architecture; historical five-color Purple/Pink/Blue/Teal/Green family exploration.
- `CURRENT_CANON_RELATIONSHIP`: Proposed historical family logic only; no scientific semantics or production approval.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L007 — Vial Label Mock Application
- `ORIGINAL_FILENAME`: `Viales PeptiBloom: ciencia en floración.png`
- `APPROX_DATE`: UNKNOWN
- `ASSET_TYPE`: LEGACY_SOURCE / PACKAGING_PREVIEW
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `DERIVED_FROM`: Related to `PB-VA-L006`
- `DESCRIPTION`: Physical/mock application of the later label/family system to vial presentation.
- `CURRENT_CANON_RELATIONSHIP`: Mock application only; not production artwork or physical validation.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L008 — Visual Legacy Reconciliation v0.1
- `ORIGINAL_FILENAME`: `PeptiBloom_VISUAL_LEGACY_RECONCILIATION_v0.1.docx`
- `APPROX_DATE`: 2026-08-18
- `ASSET_TYPE`: LEGACY_SOURCE / RECONCILIATION_MAP
- `STATUS`: LEGACY_SOURCE / KEEP
- `PROVENANCE`: Recovered reconciliation document.
- `DESCRIPTION`: Reconciliation map preserving KEEP/MODIFY/RETIRE/HOLD decisions and known-missing visual areas.
- `CURRENT_CANON_RELATIONSHIP`: Reconciliation evidence; not replacement Brand canon.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L009 — Physical Product Catalog Grid
- `ORIGINAL_FILENAME`: `Catálogo PeptiBloom: organización pastel premium.png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / CATALOG / PRODUCT_CARD_SYSTEM
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `DESCRIPTION`: Six-panel physical-product catalogue composition including historical PepperBox, Vial Vault, Vial Pod and Multi-Vial Case representations; pastel product-card grammar.
- `CURRENT_CANON_RELATIONSHIP`: Visual/product-concept evidence only; no current geometry/product/commercial truth.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L010 — PepperBox Standalone Product Card
- `ORIGINAL_FILENAME`: `Dispensador PeptiBloom para rutina organizada.png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `DESCRIPTION`: Standalone PepperBox card; historical `PB-3D-001` visual/card identifier and slogan system.
- `CURRENT_CANON_RELATIONSHIP`: `PB-3D-001` remains a legacy visual identifier only.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L011 — Bloom Caps Eight-Variant Grid
- `ORIGINAL_FILENAME`: `Colección PeptiBloom para viales de 3 ml.png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD_SYSTEM
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `DESCRIPTION`: Consolidated historical Bloom Caps PB-CAP-01…08 visual family with per-variant colors and repeated grid/card system.
- `CURRENT_CANON_RELATIONSHIP`: PB-CAP identifiers are legacy visual/card IDs only; no current PRODUCT_ID or physical validation.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L012 — Bloom Caps Alternate Grid
- `ORIGINAL_FILENAME`: `image-gen-1(4).png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD_SYSTEM
- `STATUS`: LEGACY_SOURCE / DERIVATIVE
- `DERIVED_FROM`: `PB-VA-L011`
- `DESCRIPTION`: Alternate eight-card Bloom Caps grid using the same PB-CAP-01…08 structure.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L013 — Bloom ID Standalone Card
- `ORIGINAL_FILENAME`: `image-gen-1(5).png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD
- `STATUS`: LEGACY_SOURCE / DERIVATIVE / LEGACY_COPY_REQUIRES_REVIEW
- `DERIVED_FROM`: `PB-VA-L011`
- `DESCRIPTION`: Standalone Bloom Cap card exploration; historical card grammar and unverified copy.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L014 — Bloom Flower Standalone Card
- `ORIGINAL_FILENAME`: `image-gen-1(6).png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD
- `STATUS`: LEGACY_SOURCE / DERIVATIVE / LEGACY_COPY_REQUIRES_REVIEW
- `DERIVED_FROM`: `PB-VA-L011`
- `DESCRIPTION`: Standalone Bloom Cap card exploration; historical card grammar and unverified copy.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L015 — Bloom Heart Standalone Card
- `ORIGINAL_FILENAME`: `Infografía de tapa corazón violeta PeptiBloom.png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD
- `STATUS`: LEGACY_SOURCE / DERIVATIVE / LEGACY_COPY_REQUIRES_REVIEW
- `DERIVED_FROM`: `PB-VA-L011`
- `DESCRIPTION`: Bloom Heart card exploration with historical badge/floral/studio layout grammar.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L016 — Bloom Day Seven-Day Grid
- `ORIGINAL_FILENAME`: `image-gen-1(7).png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD_SYSTEM
- `STATUS`: LEGACY_SOURCE / REVIEW_REQUIRED
- `DESCRIPTION`: Seven-card Monday–Sunday Bloom Day system with historical PB-DAY-01…07 visual identifiers and day colors.
- `CURRENT_CANON_RELATIONSHIP`: Weekly concept evidence only; no current product/legal/physical validation.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L017 — Bloom Day English Derivative
- `ORIGINAL_FILENAME`: `Calendario floral PeptiBloom de siete días.png`
- `APPROX_DATE`: 2026-08-13
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD_SYSTEM / LOCALIZED_DERIVATIVE
- `STATUS`: LEGACY_SOURCE / DERIVATIVE
- `DERIVED_FROM`: `PB-VA-L016`
- `DESCRIPTION`: English-language Bloom Day system; evidence for historical localization/derivative conventions.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

### PB-VA-L018 — PepperBox Advertising Derivative
- `ORIGINAL_FILENAME`: `image-gen-1(8).png`
- `APPROX_DATE`: 2026-08-12
- `ASSET_TYPE`: LEGACY_SOURCE / PRODUCT_CARD / ADVERTISING_DERIVATIVE
- `STATUS`: LEGACY_SOURCE / DERIVATIVE / LEGACY_COPY_REQUIRES_REVIEW
- `DERIVED_FROM`: Related to `PB-VA-L009` and `PB-VA-L010`
- `DESCRIPTION`: PepperBox advertising variant with floral accents, feature icons and bottom spec strip.
- `FILE_LOCATION`: File Library / durable binary path UNKNOWN

## Known missing target

### PB-VA-MISSING-001 — Family Color Specification Sheets
- `ASSET_ID`: `PB-VA-MISSING-001`
- `NAME`: Family Color Specification Sheets
- `ASSET_TYPE`: LEGACY_SOURCE / TECHNICAL_COLOR_SPECIFICATION
- `STATUS`: KNOWN_MISSING / RECOVERY_ACTIVE
- `DESCRIPTION`: Owner remembers historical family-level print specification sheets containing Pantone/PMS and possibly CMYK/RGB/HEX mappings.
- `PROVENANCE`: Historical existence remembered and recovery search documented in Issue #13; separable source artifact not yet recovered.
- `PROHIBITED / NON-AUTHORIZED USE`: Do not reconstruct Pantone/PMS from HEX and present it as historical truth.
- `FILE_LOCATION`: UNKNOWN / NOT RECOVERED

## Duplicate / derivative clusters

- `PB-VA-L011` → `PB-VA-L012` / `PB-VA-L013` / `PB-VA-L014` / `PB-VA-L015`.
- `PB-VA-L016` → `PB-VA-L017`.
- `PB-VA-L009` / `PB-VA-L010` → `PB-VA-L018` relationship cluster.
- `PB-VA-L006` → `PB-VA-L007`.
- `PB-VA-L003` / `PB-VA-L004` / `PB-VA-L005` form a related historical Brand exploration/application cluster; exact master lineage remains UNKNOWN.

## Operational follow-up

Legacy recovery remains ACTIVE / INCOMPLETE. Register metadata first when binaries remain only in File Library; do not reconstruct missing artifacts from descriptions. New production should follow the WORK 08 foundation in `project/VISUAL_PRODUCTION_FOUNDATION.md`.
