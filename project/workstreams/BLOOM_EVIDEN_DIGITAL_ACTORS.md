# Bloom & Eviden Digital Actors

**Workstream ID:** PB-AV-001  
**Status:** ACTIVE  
**Owner:** Emi + ChatGPT  
**Branch:** `feature/bloom-eviden-digital-actors`  
**Scope isolation:** This workstream is independent. It does not authorize or modify Evidence conclusions, Scientific Content claims, Web publication, Product Catalog, Packaging, Analytics, WORK 6, or WORK 7.

## Objective

Develop Bloom and Eviden from frozen visual characters into reproducible digital actors suitable for PeptiBloom audiovisual/editorial production, beginning with a controlled YouTube pilot. The system must preserve character identity, voice, scientific/editorial boundaries, provenance, and repeatability across productions.

## Canonical starting assets

### Bloom
- Asset ID: `PB-EV-BLOOM-CHARACTER-MASTER-V1.0`
- Status: `CANONICAL_FROZEN`
- Binary authority: exact user-approved PNG supplied 2026-08-27
- SHA-256: `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`
- Dimensions: 1536 × 1024 px
- Mode: RGBA
- Bytes: 2,942,176
- Registry: `project/brand/evidence/actors/BLOOM_BINARY_V1.0.md`
- Identity bible: `project/brand/evidence/actors/BLOOM_CHARACTER_IDENTITY_BIBLE_V1.0.md` — `CANONICAL_FROZEN`

### Eviden
- Asset ID: `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0`
- Status: `CANONICAL_FROZEN`
- Binary authority: exact user-approved PNG supplied 2026-08-27
- SHA-256: `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`
- Dimensions: 1536 × 1024 px
- Mode: RGBA
- Bytes: 2,946,020
- Registry: `project/brand/evidence/actors/EVIDEN_BINARY_V1.0.md`
- Identity bible: `project/brand/evidence/actors/EVIDEN_CHARACTER_IDENTITY_BIBLE_V1.0.md` — `REVIEW`

Canonical rule for both: `CHECKSUM_MISMATCH = NOT_CANONICAL`. No redraw, recolor, regeneration from prose, silent overwrite, or material identity change without a new approved version.

## Status vocabulary

- `TODO` — not started.
- `IN_PROGRESS` — actively being developed.
- `BLOCKED` — cannot proceed; blocker must be recorded.
- `REVIEW` — deliverable exists and awaits approval.
- `DONE` — accepted and durable.
- `DEFERRED` — intentionally postponed.

## Sequential roadmap

| ID | Stage | Status | Exit criterion / deliverable |
|---|---|---|---|
| AV-00 | Workstream foundation | DONE | Dedicated branch, durable tracker, scope and canonical master checksums recorded. |
| AV-01 | Canonical asset ingest | IN_PROGRESS | Metadata reconciled; exact PNG binary repository ingest remains pending. |
| AV-02 | Character identity bible | IN_PROGRESS | Bloom `CANONICAL_FROZEN`; Eviden drafted and in `REVIEW`. |
| AV-03 | Turnaround masters | TODO | Approved front / 3⁄4 / profile / back references for each actor derived from canonical identity. |
| AV-04 | Expression library | TODO | Controlled expression set for Bloom and Eviden, individually approved and versioned. |
| AV-05 | Pose & gesture library | TODO | Presentation, conversation, pointing, listening, explaining, reviewing and neutral poses approved. |
| AV-06 | Duo interaction bible | TODO | Relative height/scale, eyelines, personal space, handoff gestures, conversational blocking and joint compositions frozen. |
| AV-07 | Editorial role bible | TODO | Bloom and Eviden roles, handoffs, prohibited role overlap, scientific uncertainty behavior and correction behavior documented. |
| AV-08 | Voice specification | TODO | Vocal age/range, language/accent policy, cadence, energy, pronunciation, emotional limits and forbidden delivery styles approved. No cloned real-person voice without explicit rights/consent. |
| AV-09 | Voice candidates | TODO | Reproducible synthetic voice candidates generated/tested; licensing and commercial-use terms recorded. |
| AV-10 | Voice masters | TODO | One approved, reproducible voice per actor plus settings/IDs/version/provenance frozen. |
| AV-11 | Animation/lip-sync evaluation | TODO | Candidate production methods compared for identity consistency, lip sync, gestures, resolution, export, cost, rights and repeatability. |
| AV-12 | Actor rig/profile | TODO | Reusable actor configuration created for each character; exact inputs/settings/version documented. |
| AV-13 | Scene & cinematography bible | TODO | Approved shot sizes, backgrounds, lighting, framing, overlays, lower-thirds, transitions and forbidden visual treatments. |
| AV-14 | YouTube format bible | TODO | Episode structure, intro/outro, Bloom↔Eviden dialogue pattern, citation display, visual inserts and accessibility/subtitle conventions defined. |
| AV-15 | Script contract | TODO | Machine-checkable script template separates narration, evidence payload, uncertainty, citations, on-screen text, scene directions and claims requiring approval. |
| AV-16 | Evidence/content gate | TODO | Actors may communicate only approved source/content payloads; avatars cannot invent scientific claims or upgrade evidence strength. |
| AV-17 | Pilot script | TODO | 30–60 second non-public pilot script approved using controlled content. |
| AV-18 | Pilot production | TODO | Bloom + Eviden audiovisual pilot rendered with frozen character/voice/scene versions. |
| AV-19 | QA & drift test | TODO | Visual identity, voice identity, lip sync, factual fidelity, citations, pronunciation, accessibility and rendering defects reviewed. |
| AV-20 | Rights/privacy/platform review | TODO | Commercial rights, provider terms, asset provenance, voice rights, disclosure needs and relevant publication constraints recorded. |
| AV-21 | Owner pilot approval | TODO | Owner explicitly accepts or rejects pilot; approval does not automatically authorize public release. |
| AV-22 | Production pipeline v1 | TODO | Repeatable script → evidence gate → storyboard → actor render → edit → QA → approval pipeline documented. |
| AV-23 | Episode asset registry | TODO | Every production records script version, source payload, character masters, voice versions, generator/rig versions, scene assets and output checksums. |
| AV-24 | Public-release gate | TODO | Publication authority and all applicable Evidence/Scientific Content/Legal/Web gates satisfied for a specific episode. |
| AV-25 | YouTube Release 1 | TODO | First approved episode published only after AV-24; URL/date/version recorded. |
| AV-26 | Post-release review | TODO | Caption accuracy, rendering issues, corrections, audience comprehension signals and pipeline improvements logged. |

## AV-01 reconciliation record

Bloom canonical SHA-256 is `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`; provisional `7ec8d8b7d408e2093ff973a17efe1b686dbfc6978a3319575715906d261a5b6c` is superseded. Eviden canonical SHA-256 is `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`; provisional `38189c4ed4c88f04c8bd67deeac6839a0f1d14fe682ccb7f1d67f92ce50599c3` is superseded. Metadata registries exist for both. Exact PNG repository binary ingest remains pending; text records do not substitute for binaries.

## AV-02 record

- Bloom Identity Bible v1.0: `CANONICAL_FROZEN` by Owner approval on 2026-08-27.
- Eviden Identity Bible v1.0: drafted from the exact approved master; `REVIEW` awaiting Owner approval.
- AV-02 remains `IN_PROGRESS` until Eviden is approved/frozen.

## Non-negotiable separation rules

1. This workstream owns actor production mechanics and audiovisual identity, not scientific truth.
2. Evidence remains authority for evidence assessment; Scientific Content/editorial contracts remain authority for publishable scientific wording where applicable.
3. Bloom and Eviden must never turn uncertain/preliminary sources into definitive claims through dialogue, expression, graphics or tone.
4. Character/voice generation tools are implementation dependencies, not scientific sources.
5. A successful pilot is not publication authorization.
6. Public release requires a specific release gate.
7. New actor versions are additive/versioned; frozen masters are never silently replaced.

## Working protocol

- Work sequentially unless a later task is explicitly independent.
- At the end of each working session update this file with statuses, deliverables, blockers, decisions, asset IDs/checksums and exact next action.
- `BLOCKED` items must state what is missing and who/what can unblock them.
- Do not rely on chat history as the canonical tracker.
- Do not mix unrelated project changes into this branch.

## Exact next action

Owner review of `EVIDEN_CHARACTER_IDENTITY_BIBLE_V1.0.md`. If approved, freeze Eviden, mark `AV-02 = DONE`, then begin `AV-03 Turnaround masters`. AV-01 binary ingest remains an explicit parallel infrastructure blocker and must not be falsely marked DONE.