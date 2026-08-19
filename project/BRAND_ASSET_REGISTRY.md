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
- `DESCRIPTION`: Decorative PeptiBloom visual composition reported by Owner as containing a PB monogram, DNA helix, orchid/floral motif and molecular decorative elements in PeptiBloom pink/lilac/rose-gold visual language.
- `SOURCE / PROVENANCE`: Owner reports that the mark was derived from the current PeptiBloom visual identity. Exact source-file provenance is not yet verified because the actual source artifact has not yet been supplied for registry inspection.
- `CREATED_DATE`: UNKNOWN
- `CANONICAL_MASTER_RELATIONSHIP`: NOT PRIMARY LOGO. The canonical PeptiBloom logo remains `apps/web/public/brand/logo.png` = OFFICIAL / MASTER / DO NOT REGENERATE. Exact derivation relationship to the supplied current visual source remains pending artifact inspection.
- `DERIVED_FROM`: Current PeptiBloom visual identity, exact file/path UNKNOWN pending Owner-supplied source artifact.
- `AUTHORIZED / INTENDED USE`: Decorative Brand applications subject to applicable downstream review. First intended application: `PB-VA-002` Thank You Round Label.
- `PROHIBITED / NON-AUTHORIZED USE`: Must not replace or impersonate the canonical logo; must not be represented as the primary PeptiBloom logo; no scientific Evidence meaning; no regulatory, authenticity or security meaning; no production approval implied by visual completion.
- `SOURCE_FILES`: PENDING OWNER SUPPLY / UNKNOWN
- `EXPORTS`: PENDING OWNER SUPPLY / UNKNOWN
- `PRINT_STATE`: NOT ESTABLISHED / not itself a print-approval record
- `RELATED_PACKAGING_ASSET`: `PB-VA-002`
- `EXTERNAL_EDITABLE_SOURCE`: UNKNOWN. If Canva or another editor is used, record the durable reference when supplied, but do not rely on it as the sole recoverable source.
- `SUPERSEDES / REPLACED_BY`: NONE KNOWN / NONE KNOWN
- `NOTES`: Provisional classification is Brand derivative / not primary logo. Owner preference for the current design does not by itself promote this asset to global Brand canon or `APPROVED_DERIVATIVE`.

## PB-VA-002 — Thank You Round Label

- `ASSET_ID`: `PB-VA-002`
- `NAME`: Thank You Round Label
- `ASSET_TYPE`: PACKAGING_APPLICATION / DECORATIVE_ROUND_LABEL
- `STATUS`: DESIGN_CANDIDATE / ARTIFACT_REVIEW_PENDING
- `OWNER_DOMAIN`: PACKAGING / LABELS
- `DESCRIPTION`: Circular decorative/customer-experience packaging label concept reported by Owner: “Thank you” script at top, PB Floral DNA Mark centered, pastel pink/lilac/rose-gold treatment.
- `SOURCE / PROVENANCE`: Owner reports a newly generated circular design using the current PeptiBloom visual language and PB Floral DNA Mark. Actual file has not yet been supplied for registry inspection.
- `CREATED_DATE`: UNKNOWN
- `CANONICAL_MASTER_RELATIONSHIP`: Consumes Brand visual identity but is not a logo and is not a canonical Brand master.
- `DERIVED_FROM`: `PB-VA-001` plus packaging-label composition; exact editable/source provenance pending supplied artifact.
- `AUTHORIZED / INTENDED USE`: Candidate circular decorative packaging/customer-experience label, subject to Brand/Packaging visual review and print validation before production artwork approval.
- `PROHIBITED / NON-AUTHORIZED USE`: No scientific claim; no regulatory claim; no authenticity/security claim; not production-approved artwork; must not be used to imply Evidence grade or product/commercial eligibility.
- `SOURCE_FILES`: PENDING OWNER SUPPLY / UNKNOWN
- `EXPORTS`: PENDING OWNER SUPPLY / UNKNOWN
- `PRINT_STATE`: NOT_PRINT_TESTED. `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- `RELATED_PACKAGING_ASSET`: Issue #19 — Packaging / Labels / Marketplace Visuals consolidation queue; packaging application authority remains Packaging / Labels.
- `EXTERNAL_EDITABLE_SOURCE`: UNKNOWN. If Canva editable source exists, record its reference when supplied; Canva is editing infrastructure, not the durable registry.
- `SUPERSEDES / REPLACED_BY`: NONE KNOWN / NONE KNOWN
- `NOTES`: Brand / Visual owns the referenced Brand asset identity/provenance; Packaging / Labels owns this application’s label specification, print lifecycle and production-artwork state.

## Operational follow-up

The next registry action is artifact intake, not redesign: inspect the minimum Owner-supplied files, record exact filenames/formats/hashable repository paths or external editable references as appropriate, and update `SOURCE_FILES`, `EXPORTS`, `DERIVED_FROM`, `SOURCE / PROVENANCE`, and any applicable print state. Do not reconstruct missing artifacts from textual description when the actual files can be supplied.