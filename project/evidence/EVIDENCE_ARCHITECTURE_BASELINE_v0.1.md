# Evidence Architecture Baseline v0.1

Status: PROPOSED ARCHITECTURE / PB-XD-001 SHARED SEMANTICS APPROVED
Owner: Evidence
Date: 2026-08-19

This document is a minimum architecture proposal for migration review. `PB-XD-001` separately approves only the internal Evidence -> Scientific Content shared semantics recorded below. Neither this document nor that approval defines a database schema, API, public read contract, scientific claim, compound assessment, publication, dose, protocol, or recommendation.

## Reconciled artifact classes

### CANONICAL / APPROVED
- `project/CANON.md`, `project/DECISIONS.md`, `project/PROJECT_STATE.yaml`, `project/STATUS.md`, and `project/BLOCKERS.md` are the current Control Plane authority.
- `project/HANDOFFS/evidence.md`, `scientific-inventory.md`, and `scientific-content.md` are current domain coordination state.
- The approved workflow direction is Scientific Inventory -> Evidence review/representation -> Scientific Content Production -> Web consumption.
- Evidence owns scientific review/representation, provenance, uncertainty, contradictions, evidence gaps, and scientific interpretation within its approved authority.
- Scientific Content Production is editorial transformation only and cannot approve Evidence, strengthen missing science, authorize publication, or bypass Evidence gates.
- `PB-XD-001` approves the minimum internal Evidence -> Scientific Content shared semantics while leaving Evidence implementation schema and the separate public contract unapproved.
- WEB M2 remains blocked until both an approved Evidence public read contract and production-ready scientific content exist.

### PROPOSED
- Issue #15 architectural concepts such as claim-level assessment, versioned assessment, study/publication separation, exact locators, research-integrity representation, extracted numerical data, post-publication events, screening audit, and AI provenance remain proposals unless separately approved.
- Historical names such as `ClaimAssessment`, `EvidenceAssessment`, `EvidenceLink`, `AIProcessTrace`, `EvidenceOperationTrace`, and `GenerationTrace` are not canonical entity names.

### HISTORICAL
- Issue #15 recovered Decision Register material and legacy scientific/protocol chat findings are historical inputs for reconciliation, not current canon.
- Recovered claim-level evidence and protocol-provenance chains are directional historical concepts, not implemented schema.

### SUPERSEDED / DUPLICATE
- Historical methodology lineages that restate provenance, uncertainty, claim-level review, or arithmetic-versus-recommendation separation should be reconciled into the current Evidence/Scientific Inventory workflow rather than creating parallel scientific authority.
- Any historical compound-level evidence grade that would replace claim-specific support is unsuitable as a governing Evidence representation.

### UNKNOWN
- No approved Evidence database entity model, field set, relation model, API payload, acceptance rule, or Evidence sign-off semantic is currently established.
- `apps/api/evidence/` exists as a Django app shell, but it has no scientific models or model migrations; its existence is not an Evidence schema.

## Minimum Evidence architecture

The minimum architecture is conceptual, not a field list:

1. **Scientific subject / candidate context** — the thing under review. Candidate presence does not imply Evidence acceptance.
2. **Scientific claim / proposition** — the unit whose support, uncertainty, contradiction, or gap can be assessed. Evidence support must not be inferred from a compound-level summary.
3. **Source material** — inspectable scientific material used in review.
4. **Provenance / source context** — the traceable context needed to understand where source-derived information came from and what it represents.
5. **Study identity / study context** — when applicable, enough identity to avoid treating multiple publications or versions of one study as independent evidence. Exact implementation remains proposed.
6. **Evidence assessment / interpretation** — Evidence-owned review of what the inspected material supports for a claim, including uncertainty and limitations. The entity/name/versioning mechanism remains proposed.
7. **Contradiction and evidence-gap representation** — explicit scientific review outcomes, not editorial defects. `No evidence identified in the reviewed corpus` must not be silently converted into `no evidence exists`.
8. **Eligibility state for downstream transformation** — Evidence may determine whether reviewed scientific material is sufficiently represented for Scientific Content to transform without inventing missing science. This is not publication approval.

No additional schema is justified in migration Phase 2.

## Evidence -> Scientific Content concept reconciliation

| Concept | Evidence owns scientific concept? | Existing canonical representation? | Reuse / new representation | Cross-domain note |
| --- | --- | --- | --- | --- |
| claims | YES | Shared meaning approved through PB-XD-001; no schema | A claim-level representation is required before structured handoff; exact model/name remains proposed | Shared semantics approved; implementation remains Evidence-owned |
| assessments | YES | Shared meaning approved through PB-XD-001; no schema | Evidence-owned assessment representation required; do not inherit historical names automatically | Shared semantics approved; implementation remains Evidence-owned |
| studies | PARTIAL | Provenance/source principles exist; no canonical Study model | Represent study identity/context only as needed for scientific traceability; publication/version separation remains proposed | No downstream domain owns scientific study identity |
| sources | YES | Canonical principle: inspectable sources/provenance | Reuse the source/provenance principle; implementation remains open | PB-XD-001 approves internal semantics, not a public payload |
| provenance | YES for scientific provenance | Canonical principle exists | Reuse and normalize; do not import historical enum lists as canon | Operational provenance remains with its owning domain |
| contradictions | YES | Canonical responsibility exists | Explicit Evidence representation required; exact structure open | Scientific Content may render but not redefine |
| evidence gaps | YES | Canonical responsibility exists | Explicit Evidence representation required; exact structure open | Scientific Content may render but not redefine |
| sign-off | LIMITED | Transformation eligibility semantics approved through PB-XD-001; no publication sign-off semantic | Evidence may expose review/eligibility state, but must not create publication approval authority | Publication authorization remains outside Evidence |
| publication blocking | NO as scientific data | Governance gates already exist | Do not create an Evidence scientific field merely for downstream workflow. Evidence eligibility can be an input; publication blocking is a downstream gate outcome | Web/Content governance consumes the gate outcome |

## Approved internal contract semantics

Under `PB-XD-001`, Scientific Content may consume only Evidence-reviewed material that is explicitly eligible for the intended editorial transformation. The handoff must preserve, at minimum:
- the scientific claim/proposition being represented;
- source/provenance traceability sufficient to inspect support;
- Evidence assessment/interpretation for that claim;
- material uncertainty, contradictions, evidence gaps, and limitations;
- study/source identity context needed to avoid misleading duplication or attribution;
- an Evidence-owned eligibility/review state that says whether transformation can proceed without filling missing science.

Scientific Content must not infer omitted claims, assessments, sources, provenance, certainty, contradictions, gaps, or eligibility. It must route missing/insufficient input back to Evidence.

This approval deliberately does **not** define database fields, JSON keys, enums, Evidence API endpoints, public payloads, or publication approval.

## Candidate workflow reconciliation

The recovered ten candidates remain workflow/intake records only:

| Candidate | Reconciled intake state |
| --- | --- |
| 5-Amino-1MQ | SCIENTIFIC_INVENTORY_CANDIDATE / NOT_EVIDENCE_ACCEPTED |
| GHK-Cu | SCIENTIFIC_INVENTORY_CANDIDATE / NOT_EVIDENCE_ACCEPTED |
| KPV | SCIENTIFIC_INVENTORY_CANDIDATE / NOT_EVIDENCE_ACCEPTED |
| MOTS-c | SCIENTIFIC_INVENTORY_CANDIDATE / NOT_EVIDENCE_ACCEPTED |
| NAD+ | SCIENTIFIC_INVENTORY_CANDIDATE / NOT_EVIDENCE_ACCEPTED |
| retatrutide | LEGACY_REQUEST_REQUIRES_REVALIDATION / NOT_EVIDENCE_ACCEPTED |
| glutathione | LEGACY_REQUEST_REQUIRES_REVALIDATION / NOT_EVIDENCE_ACCEPTED |
| CJC-1295 without DAC | UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED |
| ipamorelin | UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED |
| adipotide | UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED |

These labels are migration workflow descriptions, not scientific assessments or new Evidence taxonomy. No substantive compound research is authorized by this document.

## Cross-domain disposition

The material internal Evidence -> Scientific Content shared semantic interface was coordinated and approved through `PB-XD-001`, while explicitly leaving Evidence's internal schema and scientific assessment authority with Evidence.

The separate Release 1 Evidence / Public Content contract is `PB-XD-002` and remains open. Evidence -> Web, WEB M2 and publication remain blocked and are not defined here.
