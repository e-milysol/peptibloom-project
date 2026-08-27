# Bloom & Eviden Digital Actors

**Workstream ID:** PB-AV-001  
**Status:** ACTIVE  
**Owner:** Emi + ChatGPT  
**Branch:** `feature/bloom-eviden-digital-actors`  
**Scope isolation:** This workstream is independent. It does not authorize or modify Evidence conclusions, Scientific Content claims, Web publication, Product Catalog, Packaging, Analytics, WORK 6, or WORK 7.

## Objective
Develop Bloom and Eviden from frozen visual characters into reproducible digital actors suitable for PeptiBloom audiovisual/editorial production, beginning with a controlled YouTube pilot. Preserve character identity, voice, scientific/editorial boundaries, provenance and repeatability.

## Canonical starting assets

### Bloom
- `PB-EV-BLOOM-CHARACTER-MASTER-V1.0` — `CANONICAL_FROZEN`
- SHA-256: `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`
- 1536 × 1024 px, RGBA, 2,942,176 bytes
- Registry: `project/brand/evidence/actors/BLOOM_BINARY_V1.0.md`
- Identity bible: `project/brand/evidence/actors/BLOOM_CHARACTER_IDENTITY_BIBLE_V1.0.md` — `CANONICAL_FROZEN`

### Eviden
- `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0` — `CANONICAL_FROZEN`
- SHA-256: `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`
- 1536 × 1024 px, RGBA, 2,946,020 bytes
- Registry: `project/brand/evidence/actors/EVIDEN_BINARY_V1.0.md`
- Identity bible: `project/brand/evidence/actors/EVIDEN_CHARACTER_IDENTITY_BIBLE_V1.0.md` — `CANONICAL_FROZEN`

Canonical rule: `CHECKSUM_MISMATCH = NOT_CANONICAL`. No redraw, recolor, prose-regeneration, silent overwrite or material identity change under the same version.

## Status vocabulary
`TODO` · `IN_PROGRESS` · `BLOCKED` · `REVIEW` · `DONE` · `DEFERRED`

## Sequential roadmap

| ID | Stage | Status | Exit criterion / deliverable |
|---|---|---|---|
| AV-00 | Workstream foundation | DONE | Dedicated branch, tracker, scope and checksums durable. |
| AV-01 | Canonical asset ingest | IN_PROGRESS | Metadata reconciled; exact PNG binary repository ingest remains pending. |
| AV-02 | Character identity bible | DONE | Bloom and Eviden Identity Bible v1.0 both `CANONICAL_FROZEN`. |
| AV-03 | Turnaround masters | IN_PROGRESS | Approved front / 3⁄4 / profile / back references for each actor, derived from canonical identity and packaged/versioned for production. |
| AV-04 | Expression library | TODO | Controlled expression set for both actors individually approved/versioned. |
| AV-05 | Pose & gesture library | TODO | Presentation/conversation/listening/explaining/reviewing/neutral poses approved. |
| AV-06 | Duo interaction bible | TODO | Scale, eyelines, spacing, handoffs and conversational blocking frozen. |
| AV-07 | Editorial role bible | TODO | Roles, handoffs, prohibited overlap, uncertainty and correction behavior documented. |
| AV-08 | Voice specification | TODO | Vocal range, language/accent, cadence, energy, pronunciation and limits approved. |
| AV-09 | Voice candidates | TODO | Reproducible candidates tested; licensing/commercial terms recorded. |
| AV-10 | Voice masters | TODO | One approved reproducible voice per actor frozen with provenance/settings. |
| AV-11 | Animation/lip-sync evaluation | TODO | Candidate methods compared for identity, lip sync, gestures, export, cost, rights and repeatability. |
| AV-12 | Actor rig/profile | TODO | Reusable actor configurations with exact inputs/settings/version. |
| AV-13 | Scene & cinematography bible | TODO | Shots, backgrounds, lighting, framing, overlays and transitions approved. |
| AV-14 | YouTube format bible | TODO | Episode structure, dialogue pattern, citations, inserts and accessibility defined. |
| AV-15 | Script contract | TODO | Structured template separates narration, evidence, uncertainty, citations, on-screen text and directions. |
| AV-16 | Evidence/content gate | TODO | Actors communicate only approved payloads; cannot invent/upgrade claims. |
| AV-17 | Pilot script | TODO | 30–60 second controlled non-public pilot approved. |
| AV-18 | Pilot production | TODO | Duo pilot rendered with frozen character/voice/scene versions. |
| AV-19 | QA & drift test | TODO | Identity, voice, lip sync, factual fidelity, citations, pronunciation and accessibility reviewed. |
| AV-20 | Rights/privacy/platform review | TODO | Rights, terms, provenance, voice rights and disclosure constraints recorded. |
| AV-21 | Owner pilot approval | TODO | Owner accepts/rejects pilot; no automatic public release. |
| AV-22 | Production pipeline v1 | TODO | Repeatable evidence → script → storyboard → render → edit → QA → approval pipeline. |
| AV-23 | Episode asset registry | TODO | Script/source/character/voice/tool/scene/output versions/checksums recorded. |
| AV-24 | Public-release gate | TODO | Applicable Evidence/Scientific Content/Legal/Web gates satisfied per episode. |
| AV-25 | YouTube Release 1 | TODO | First approved episode published after AV-24. |
| AV-26 | Post-release review | TODO | Corrections, caption/render issues and pipeline improvements logged. |

## AV-01 reconciliation
Both canonical metadata registries are durable. Provisional Bloom hash `7ec8d8b7d408e2093ff973a17efe1b686dbfc6978a3319575715906d261a5b6c` and provisional Eviden hash `38189c4ed4c88f04c8bd67deeac6839a0f1d14fe682ccb7f1d67f92ce50599c3` are superseded. Exact PNG repository binary ingest remains pending; text records do not substitute for binaries.

## AV-02 completion record
- Bloom Identity Bible v1.0 — `CANONICAL_FROZEN`, Owner approved 2026-08-27.
- Eviden Identity Bible v1.0 — `CANONICAL_FROZEN`, Owner approved 2026-08-27.
- AV-02 — `DONE`.

## AV-03 opening contract
Turnaround masters are production references, not opportunities to redesign the characters. Required minimum views per actor: **front, 3/4, profile, back**, with neutral standing pose and stable scale/proportions. Each view must preserve the corresponding frozen Identity Bible. Prefer extraction/controlled derivation from the approved source sheet where usable; any generated/reconstructed view is a candidate until Owner-approved and must never silently replace the source master. Package each accepted turnaround with actor ID, version, source master SHA, view name and derivative checksum. Do not infer unseen details as canonical without review.

## Non-negotiable separation rules
1. This workstream owns actor production mechanics/audiovisual identity, not scientific truth.
2. Evidence/Scientific Content remain scientific wording authorities.
3. Actors never upgrade uncertainty through dialogue, expression, graphics or tone.
4. Generation/voice tools are implementation dependencies, not scientific sources.
5. Successful pilot ≠ publication authorization.
6. Public release requires a specific release gate.
7. New actor versions are additive/versioned; frozen masters are never silently replaced.

## Working protocol
- Work sequentially unless a later task is explicitly independent.
- Update this tracker with statuses, deliverables, blockers, decisions, IDs/checksums and exact next action.
- Do not rely on chat history as canonical state.
- Do not mix unrelated changes into this branch.

## Exact next action
Begin `AV-03` with **Bloom Turnaround Master v1.0**: inventory the front / 3⁄4 / profile / back references already present in the exact approved Bloom sheet, determine which can be cleanly extracted versus which require controlled derivation, and prepare the turnaround candidate package for Owner review. Then repeat for Eviden. AV-01 binary ingest remains an explicit parallel infrastructure blocker.