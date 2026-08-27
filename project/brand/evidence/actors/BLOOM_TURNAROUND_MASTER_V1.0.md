# Bloom Turnaround Master v1.0

**Workstream:** `PB-AV-001 — Bloom & Eviden Digital Actors`  
**Checkpoint:** `AV-03 — Turnaround masters`  
**Character:** Bloom  
**Status:** `REVIEW`  
**Source authority:** `PB-EV-BLOOM-CHARACTER-MASTER-V1.0`  
**Source SHA-256:** `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`

## Purpose

Establish the first production-turnaround candidate for Bloom using only the exact views already present in the canonical approved character sheet. This step is **not a redesign** and does not introduce new unseen canonical details.

## Derivation policy

`EXACT_CROP_FROM_CANONICAL_MASTER`

No redraw, recolor, inpainting, generative reconstruction or identity reinterpretation was used for this candidate package.

## Candidate views

| View | Crop box from 1536×1024 source | Output px | SHA-256 | Status |
|---|---:|---:|---|---|
| FRONT | `[360,45,505,515]` | 145×470 | `0347cdac113eff38e036ae0fff09bd994232b9dd2f1d6a371dd22dc6c236b913` | REVIEW |
| THREE_QUARTER | `[500,45,635,515]` | 135×470 | `06a48ded1607a5012d8a57891a021102829731e9f3a29a4f7476a10bd78d1569` | REVIEW |
| PROFILE | `[625,45,765,515]` | 140×470 | `3a0466dd905cf11aeb41a7cadbb6362d130394c0d490d88f37073d1de4ef5cd6` | REVIEW |
| BACK | `[755,45,895,515]` | 140×470 | `1ddd414161fe6f42b9acab4432e3f0bab6c106cbd5ec16cbb6a287d064ec86cd` | REVIEW |

The candidate package also contains a full source-panel crop and a four-view review sheet generated only from the exact source crops.

## Important limitations

- These are source-sheet crops, not transparent rig-ready sprites.
- Small source-sheet background/adjacent artifacts may remain.
- Cleaning, masking, segmentation or reconstruction must be treated as a new controlled derivative with its own checksum and approval.
- These crops may be frozen as turnaround **reference views** if Owner approves them, while separate animation-ready assets can later be produced under AV-12/production tooling.
- If a cleaner canonical turnaround is required, it must be derived under explicit review; a generated approximation may not silently replace these source-derived references.

## Acceptance criteria

Owner review should confirm:

- front view is recognizably canonical Bloom;
- 3/4 view matches frozen identity;
- profile matches hair/face/body proportions;
- back view preserves coat/hair silhouette and approved identity;
- relative body scale/proportions across the four views are acceptable as production reference;
- no source crop accidentally includes content that materially confuses the actor silhouette.

## Decision pending

**Current status: `REVIEW`.**

If approved, this registry becomes `CANONICAL_FROZEN` as Bloom Turnaround Master v1.0 and Bloom's AV-03 component becomes complete. Then repeat the same exact-source extraction for Eviden before AV-03 can close.