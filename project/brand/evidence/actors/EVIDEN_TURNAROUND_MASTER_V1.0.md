# Eviden Turnaround Master v1.0

**Workstream:** `PB-AV-001 — Bloom & Eviden Digital Actors`  
**Checkpoint:** `AV-03 — Turnaround masters`  
**Character:** Eviden  
**Status:** `REVIEW`  
**Source authority:** `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0`  
**Source SHA-256:** `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`

## Purpose

Establish Eviden's first production-turnaround candidate using only the exact views already present in the canonical approved character sheet. This step is not a redesign and introduces no unseen canonical details.

## Derivation policy

`EXACT_CROP_FROM_CANONICAL_MASTER`

No redraw, recolor, inpainting, generative reconstruction or identity reinterpretation was used.

## Candidate views

| View | Crop box from 1536×1024 source | Output px | SHA-256 | Status |
|---|---:|---:|---|---|
| FRONT | `[350,45,500,520]` | 150×475 | `4ec78db5be5b8e4d0d08caab648ff5572be4911cbdc592dbf009675214704ae1` | REVIEW |
| THREE_QUARTER | `[495,45,635,520]` | 140×475 | `c845d62a6bd71985469deb2e78efea1461b3f80c4a1ad1b510eeb7a5a48fd897` | REVIEW |
| PROFILE | `[630,45,770,520]` | 140×475 | `8c9e311ac55f037c32a98c51953ee91f86d902b7872da39f7eef5c4d3e1fe9d7` | REVIEW |
| BACK | `[765,45,905,520]` | 140×475 | `14c1570336548112732d79e28b25339d974da5ad3d556d0e28ea6d5629434885` | REVIEW |

The candidate package also contains a full source-panel crop and four-view review sheet derived only from exact source crops.

## Limitations

- These are source-sheet reference crops, not transparent rig-ready sprites.
- Any cleaning, segmentation, masking or reconstruction must be a new controlled derivative with a new checksum and explicit approval.
- Generated approximations may never silently replace these source-derived references.

## Acceptance criteria

Owner review should confirm that front, 3/4, profile and back views preserve Eviden's frozen face, glasses, hair silhouette, coat/wardrobe, body proportions and relative scale across the set.

**Current status: `REVIEW`.**

If approved, this registry becomes `CANONICAL_FROZEN`, Eviden's AV-03 component becomes complete, and AV-03 may close.