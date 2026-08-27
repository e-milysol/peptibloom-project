# Bloom & Eviden Digital Actors

**Workstream ID:** PB-AV-001  
**Status:** ACTIVE  
**Owner:** Emi + ChatGPT  
**Branch:** `feature/bloom-eviden-digital-actors`

## Current canonical actor state

### Bloom
- Master: `PB-EV-BLOOM-CHARACTER-MASTER-V1.0` — `CANONICAL_FROZEN`
- SHA-256: `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`
- Identity Bible v1.0 — `CANONICAL_FROZEN`
- Turnaround Master v1.0 — `CANONICAL_FROZEN`

### Eviden
- Master: `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0` — `CANONICAL_FROZEN`
- SHA-256: `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`
- Identity Bible v1.0 — `CANONICAL_FROZEN`
- Turnaround Master v1.0 — `REVIEW`

Canonical rule: `CHECKSUM_MISMATCH = NOT_CANONICAL`. No redraw, recolor, prose-regeneration, silent overwrite or material identity change under the same version.

## Sequential roadmap

| ID | Stage | Status | Current state |
|---|---|---|---|
| AV-00 | Workstream foundation | DONE | Branch, tracker, handoff and scope durable. |
| AV-01 | Canonical asset ingest | IN_PROGRESS | Metadata reconciled; exact PNG repository binary ingest remains pending. |
| AV-02 | Character identity bible | DONE | Bloom + Eviden frozen. |
| AV-03 | Turnaround masters | IN_PROGRESS | Bloom frozen; Eviden candidate in Owner review. |
| AV-04 | Expression library | TODO | Not started. |
| AV-05 | Pose & gesture library | TODO | Not started. |
| AV-06 | Duo interaction bible | TODO | Not started. |
| AV-07 | Editorial role bible | TODO | Not started. |
| AV-08 | Voice specification | TODO | Not started. |
| AV-09 | Voice candidates | TODO | Not started. |
| AV-10 | Voice masters | TODO | Not started. |
| AV-11 | Animation/lip-sync evaluation | TODO | Not started. |
| AV-12 | Actor rig/profile | TODO | Not started. |
| AV-13 | Scene & cinematography bible | TODO | Not started. |
| AV-14 | YouTube format bible | TODO | Not started. |
| AV-15 | Script contract | TODO | Not started. |
| AV-16 | Evidence/content gate | TODO | Not started. |
| AV-17 | Pilot script | TODO | Not started. |
| AV-18 | Pilot production | TODO | Not started. |
| AV-19 | QA & drift test | TODO | Not started. |
| AV-20 | Rights/privacy/platform review | TODO | Not started. |
| AV-21 | Owner pilot approval | TODO | Not started. |
| AV-22 | Production pipeline v1 | TODO | Not started. |
| AV-23 | Episode asset registry | TODO | Not started. |
| AV-24 | Public-release gate | TODO | Not started. |
| AV-25 | YouTube Release 1 | TODO | Not started. |
| AV-26 | Post-release review | TODO | Not started. |

## AV-01 note
Exact actor master binaries are still not stored in the repository asset path. Their metadata and canonical checksums are durable, but AV-01 must not be marked DONE until the exact PNG binaries are physically ingested and verified.

## AV-02 completion
Bloom and Eviden Identity Bible v1.0 are both `CANONICAL_FROZEN` by Owner approval on 2026-08-27.

## AV-03 record

### Bloom
`project/brand/evidence/actors/BLOOM_TURNAROUND_MASTER_V1.0.md` is `CANONICAL_FROZEN`, Owner approved 2026-08-27. The four canonical reference crops are exact source-master crops:
- FRONT `0347cdac113eff38e036ae0fff09bd994232b9dd2f1d6a371dd22dc6c236b913`
- THREE_QUARTER `06a48ded1607a5012d8a57891a021102829731e9f3a29a4f7476a10bd78d1569`
- PROFILE `3a0466dd905cf11aeb41a7cadbb6362d130394c0d490d88f37073d1de4ef5cd6`
- BACK `1ddd414161fe6f42b9acab4432e3f0bab6c106cbd5ec16cbb6a287d064ec86cd`

### Eviden
`project/brand/evidence/actors/EVIDEN_TURNAROUND_MASTER_V1.0.md` is in `REVIEW`. The four candidate reference crops are exact source-master crops:
- FRONT `4ec78db5be5b8e4d0d08caab648ff5572be4911cbdc592dbf009675214704ae1`
- THREE_QUARTER `c845d62a6bd71985469deb2e78efea1461b3f80c4a1ad1b510eeb7a5a48fd897`
- PROFILE `8c9e311ac55f037c32a98c51953ee91f86d902b7872da39f7eef5c4d3e1fe9d7`
- BACK `14c1570336548112732d79e28b25339d974da5ad3d556d0e28ea6d5629434885`

Turnaround references are not transparent rig-ready sprites. Cleaning/segmentation is a separate controlled derivative.

## Separation rules
1. This workstream owns actor production mechanics/audiovisual identity, not scientific truth.
2. Evidence/Scientific Content remain scientific wording authorities.
3. Actors never upgrade uncertainty through dialogue, expression, graphics or tone.
4. Generation/voice tools are implementation dependencies, not scientific sources.
5. Successful pilot does not imply publication authorization.
6. New actor versions are additive/versioned; frozen masters are never silently replaced.

## Exact next action
Owner review of Eviden Turnaround Master v1.0. If approved, freeze it and mark `AV-03 = DONE`; then begin `AV-04 Expression Library`, starting with Bloom.