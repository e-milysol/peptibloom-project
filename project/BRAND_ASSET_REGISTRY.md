# PeptiBloom Brand / Visual Asset Registry

Owner domain: BRAND / VISUAL

Purpose: durable identity, provenance, status and recoverability registry for PeptiBloom visual assets. This registry is authoritative for Brand-side asset identity/provenance/status only. It does not transfer packaging, scientific, legal, commercial or implementation authority.

## Permanent authority anchors

- Canonical PeptiBloom logo: `apps/web/public/brand/logo.png` = **OFFICIAL / MASTER / DO NOT REGENERATE**.
- `VISUAL COLOR != SCIENTIFIC EVIDENCE GRADE`.
- Legacy or polished visual material is not automatic canon.
- Canva or another external editor may be an `EXTERNAL_EDITABLE_SOURCE`; it is never the sole durable registry.
- `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.

## Storage convention

Registry metadata lives in this file.

When actual non-restricted files are accepted into the repository, use stable asset-ID folders rather than chat/local-machine names:

- Brand-owned visual sources/exports: `assets/brand/<ASSET_ID>/`
- Packaging-owned visual applications/exports: `assets/packaging/<ASSET_ID>/`

Do not create empty folders merely to reserve them. Add source/export files only when the actual artifact is supplied and its provenance can be recorded. Large/generated/editable files require deliberate review before repository storage; external editable references may supplement, but not replace, recoverable durable files/metadata.

Restricted WORK 7 supplier, price, invoice, tracking, payment or private operational information must not be stored here.

## Record fields

Each record should preserve, when applicable:

`ASSET_ID`, `NAME`, `ASSET_TYPE`, `STATUS`, `OWNER_DOMAIN`, `DESCRIPTION`, `SOURCE / PROVENANCE`, `CREATED_DATE`, `CANONICAL_MASTER_RELATIONSHIP`, `DERIVED_FROM`, `AUTHORIZED / INTENDED USE`, `PROHIBITED / NON-AUTHORIZED USE`, `SOURCE_FILES`, `EXPORTS`, `PRINT_STATE`, `RELATED_PACKAGING_ASSET`, `EXTERNAL_EDITABLE_SOURCE`, `SUPERSEDES / REPLACED_BY`, `NOTES`.

Unknown values remain `UNKNOWN`. Reconciliation labels such as `ARTIFACT_REVIEW_PENDING`, `KEEP_CANDIDATE`, `MODIFY_CANDIDATE`, `RETIRE`, `APPROVED_DERIVATIVE` and `PRODUCTION_APPROVED` are descriptive registry states where useful; this file does not create a new project-wide enum.

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
- `SOURCE_FILES`: Actual source artifact supplied to Brand intake: `logo - copia.png`; durable repository binary path PENDING because current authenticated connector cannot ingest the supplied local binary directly and local `gh` is unavailable. Do not reconstruct or substitute it.
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
- `EXPORTS`: Actual current export supplied to Brand intake: `a_clean_high_resolution_circular_badge_sticker_st.png` (SHA-256 above); durable repository binary path PENDING because current authenticated connector cannot ingest the supplied local binary directly and local `gh` is unavailable. Do not reconstruct or substitute it.
- `PRINT_STATE`: NOT_PRINT_TESTED. `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- `RELATED_PACKAGING_ASSET`: Issue #19 — Packaging / Labels / Marketplace Visuals consolidation queue; packaging application authority remains Packaging / Labels.
- `EXTERNAL_EDITABLE_SOURCE`: UNKNOWN
- `SUPERSEDES / REPLACED_BY`: NONE KNOWN / NONE KNOWN
- `NOTES`: Brand / Visual owns the referenced Brand asset identity/provenance; Packaging / Labels owns this application’s label specification, print lifecycle and production-artwork state. A second uploaded 1254x1254 PNG was visible during intake but was not identified by Owner as one of the two requested source/export files, so it is intentionally not registered or inferred into provenance.

## Operational follow-up

The two minimum requested real artifacts have now been inspected and hash-identified. Registry provenance no longer depends on the chat description alone. Binary repository ingestion remains pending tooling availability; this is a storage-execution limitation, not a provenance ambiguity and does not change either asset's approval status.

Next Brand action after binary ingestion becomes available: store the supplied files under their stable asset-ID paths without modification, verify hashes after storage, update repository paths here, and continue normal artifact-level review. Do not create a standalone PB Floral DNA Mark file unless a genuine design/export need later authorizes it.