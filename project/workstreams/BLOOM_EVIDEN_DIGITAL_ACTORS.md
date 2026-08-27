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
- Expression Library v1.0 — `CANONICAL_FROZEN`

### Eviden
- Master: `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0` — `CANONICAL_FROZEN`
- SHA-256: `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`
- Identity Bible v1.0 — `CANONICAL_FROZEN`
- Turnaround Master v1.0 — `CANONICAL_FROZEN`
- Expression Library v1.0 — `REVIEW`

Canonical rule: `CHECKSUM_MISMATCH = NOT_CANONICAL`. No redraw, recolor, prose-regeneration, silent overwrite or material identity change under the same version.

## Sequential roadmap

| ID | Stage | Status | Current state |
|---|---|---|---|
| AV-00 | Workstream foundation | DONE | Branch, tracker, handoff and scope durable. |
| AV-01 | Canonical asset ingest | IN_PROGRESS | Metadata reconciled; exact PNG repository binary ingest remains pending. |
| AV-02 | Character identity bible | DONE | Bloom + Eviden frozen. |
| AV-03 | Turnaround masters | DONE | Bloom + Eviden exact-source turnaround references frozen. |
| AV-04 | Expression library | IN_PROGRESS | Bloom frozen; Eviden exact-source 15-expression library in Owner review. |
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
Exact actor master binaries are still not stored in the repository asset path. Their metadata and canonical checksums are durable, but AV-01 must not be marked DONE until exact PNG binaries are physically ingested and verified.

## AV-02 completion
Bloom and Eviden Identity Bible v1.0 are both `CANONICAL_FROZEN` by Owner approval on 2026-08-27.

## AV-03 completion
Bloom and Eviden Turnaround Master v1.0 are both `CANONICAL_FROZEN` by Owner approval on 2026-08-27. Turnarounds are exact canonical-source crops, not transparent rig-ready sprites.

## AV-04 record

### Bloom
`project/brand/evidence/actors/BLOOM_EXPRESSION_LIBRARY_V1.0.md` — `CANONICAL_FROZEN` by Owner approval on 2026-08-27. Fifteen exact-source expressions with per-asset checksums; no facial synthesis/redraw.

### Eviden
`project/brand/evidence/actors/EVIDEN_EXPRESSION_LIBRARY_V1.0.md` — `REVIEW`. Fifteen exact-source expressions: Neutral, Focused, Curious, Thoughtful, Surprised, Analytical, Explaining, Confident, Concerned, Skeptical, Pensive, Clarifying, Emphatic, Approving and Calm Smile. Each has its own SHA-256 and traces directly to `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0`. No facial synthesis/redraw was used.

Expression references are not animation-ready facial rigs or viseme sets. Cleaning, masking, enlargement, interpolation and rig linkage are separate controlled derivatives.

## Separation rules
1. This workstream owns actor production mechanics/audiovisual identity, not scientific truth.
2. Evidence/Scientific Content remain scientific wording authorities.
3. Actors never upgrade uncertainty through dialogue, expression, graphics or tone.
4. Generation/voice tools are implementation dependencies, not scientific sources.
5. Successful pilot does not imply publication authorization.
6. New actor versions are additive/versioned; frozen masters are never silently replaced.

## Exact next action
Owner review of Eviden Expression Library v1.0. If approved, freeze Eviden's library, mark `AV-04 = DONE`, and begin `AV-05 Pose & Gesture Library` with Bloom first.