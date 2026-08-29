# PeptiBloom Evidence Editorial — Canonical Freeze Decision v1.0

**Decision date:** 2026-08-29  
**Status:** `FROZEN_CANONICAL`  
**Scope:** PeptiBloom Evidence editorial avatars, canonical masters, retained expression/pose derivatives, and corrected reference sheets.

## Decision

The PeptiBloom Evidence editorial asset library v1 is hereby declared **`FROZEN_CANONICAL`**.

This decision freezes the approved identity, taxonomy, retained binary assets, authoritative SHA-256 values, and artifact-class resolution policy described below. Future changes must be introduced as an explicit new revision/version; frozen v1 binaries must not be silently replaced, redrawn, re-generated, or mutated in place.

## Canonical masters

- **Bloom — `PB-BLOOM-EDITORIAL-v1.0.png`**  
  SHA-256: `9f4e850998f5f973a7bb623b461c77bf8e3e71f2690d21d12dd928baa1f8edc9`
- **Eviden — `PB-EVIDEN-EDITORIAL-v1.0.png`**  
  SHA-256: `8e123182dca9f3d36fc1aa2649c37d028cfa6007bd9070bcd7b4257581e3ca18`

Both authoritative master binaries are persisted in Git and passed SHA-256 verification against the recorded values.

## Canonical derivative set

The retained reusable derivative taxonomy contains exactly **32 canonical assets**:

- Bloom expressions: `BL-X01..BL-X08`
- Bloom poses: `BL-P01..BL-P08`
- Eviden expressions: `EV-X01..EV-X08`
- Eviden poses: `EV-P01..EV-P08`

All 32 retained derivative PNGs are persisted in Git and passed recorded technical + visual identity QA. Post-persistence SHA-256 verification against `assets/assets.json` returned **PASS 32/32**, with zero canonical mismatches.

`EV-X08_Shiva.png` is retained under `assets/extras/` solely as **non-canonical stock/history**. It is explicitly excluded from the canonical 32-asset taxonomy and must not be used as a canonical Eviden asset.

## Corrected reference sheets

The following corrected reference-sheet binaries are part of the frozen v1 controlled library:

- `PB-BLOOM-EDITORIAL-REFERENCE-SHEET-v1.0-corrected.png`  
  SHA-256: `711fd358832d441358d4da44f69a242f1e929e07d609d7c0b7f073d1b8a46b5e`
- `PB-EVIDEN-EDITORIAL-REFERENCE-SHEET-v1.0-corrected.png`  
  SHA-256: `78f518cd21a179a2c391487d1329d0072107f01f8aabed49e43adb9c0e44503b`
- `PB-BLOOM-EVIDEN-EDITORIAL-PAIR-REFERENCE-SHEET-v1.0-corrected.png`  
  SHA-256: `b83bee8fe45e611411833362cd0d068dd5c431e3844271612151b5a96fe965c1`

Reference sheets are **indexes only**. They must not be used as extraction sources for reusable assets.

## Resolution policy

The previous 2048×2048 versus 1024×1536 discrepancy is resolved as an artifact-class distinction:

- **Reference sheets:** editorial/index compositions; a square layout specification such as 2048×2048 may apply where documented.
- **Individual reusable derivatives:** canonical production assets validated at **1024×1536**, PNG, RGBA, transparent background.

No regeneration of the 32 canonical derivatives is required solely to force a square reference-sheet resolution.

## Persistence evidence

- Commit `7e06bf35afd576c7515d1e2f7bb384dd53e2e71a` persists the authoritative masters, 32 retained canonical derivatives, manifest data, and non-canonical historical extra.
- Commit `51cdb72531c2a316bf09faf6632b83b959ec0552` persists the three corrected reference-sheet binaries.
- Local post-persistence verification returned **PASS 32/32** for canonical derivative SHA-256 checks and **PASS 2/2** for authoritative master SHA-256 checks.
- Reference-sheet source hashes were verified immediately before repository copy and match the authoritative values recorded above.

## Governance consequence

From this decision forward:

1. the v1 retained set is **`FROZEN_CANONICAL`**;
2. frozen binary bytes and their recorded SHA-256 values are authoritative for v1;
3. any future visual correction, alternate pose/expression, stylistic evolution, or replacement must receive a new asset revision/version and must not overwrite v1 silently;
4. props remain composition context only and do not become character identity or imply scientific authority;
5. this freeze decision does **not** itself authorize Web deployment, production publication, scientific claims, or automatic merge of the branch.

## Controlled sources

This decision is read together with:

- `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md`
- `PB-EVIDENCE-EDITORIAL-EXPRESSION-POSE-LIBRARY-v0.1.md`
- `PB-EVIDENCE-EDITORIAL-DERIVATIVE-PRODUCTION-CHECKLIST-v0.1.md`
- `PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS-QA-v0.1.md`
- `assets/assets.json`
- `assets/qa/production_manifest.json`
- `assets/masters/`
- `assets/derived/`
- `assets/reference-sheets/`

**Final v1 canonical freeze decision: APPROVED — `FROZEN_CANONICAL`.**
