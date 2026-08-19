# PB-XD-001 — Evidence -> Scientific Content internal contract

FROM: EVIDENCE
TO: SCIENTIFIC CONTENT PRODUCTION
TYPE: CROSS-DOMAIN
STATUS: OPEN
CREATED: 2026-08-19

## Need
Reconcile and approve the minimum shared semantics for the internal `Evidence -> Scientific Content` handoff without allowing Scientific Content requirements to define Evidence's internal schema.

## Why
The current handoff is `PROPOSED / PARTIAL / PENDING FORMALIZATION`. Migration Phase 2 found that a structured shared interface is materially cross-domain and therefore requires PB-XD before it can become approved shared canon.

## Question / decision required
Can Scientific Content consume the following minimum Evidence-owned handoff semantics as sufficient for editorial transformation, subject to Technical Direction approval of the shared contract?

- scientific claim/proposition being represented;
- source/provenance traceability sufficient to inspect support;
- Evidence assessment/interpretation for that claim;
- material uncertainty, contradictions, evidence gaps, and limitations;
- study/source identity context needed to avoid misleading duplication or attribution;
- an Evidence-owned eligibility/review state indicating whether transformation can proceed without filling missing science.

Also confirm these boundaries:
- Scientific Content may render/transform these semantics but may not redefine or strengthen them.
- Missing/insufficient input routes back to Evidence.
- Evidence eligibility/review state is not publication approval.
- Publication blocking remains a downstream governance outcome, not a scientific Evidence field required merely for Content convenience.

## Constraints
- Do not infer or approve Evidence database entities, fields, JSON keys, enums, API endpoints, or public payloads from this request.
- Do not adopt historical Issue #15 concept names as canonical merely because they exist.
- Do not create publication authority for Evidence or Scientific Content.
- Do not alter the separate blocked Evidence -> Web public read contract.
- Do not treat candidate compounds as Evidence-accepted or production-ready.

## Response
Pending Scientific Content / Orchestrator review.

## Resolution
STATUS: OPEN
DECISION/OUTPUT: PENDING
