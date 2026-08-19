# Evidence Handoff

Owner: EVIDENCE workstream

## CURRENT_STATE

`MIGRATION_ACCEPTED = APPROVED` on 2026-08-19 for Evidence migration and autonomous domain operation only.

`TRAINING = COMPLETE`

`MIGRATION = ACCEPTED`

`DOMAIN_OPERATION = ACTIVE`

Evidence architecture/reconciliation is sufficiently durable for autonomous continuation. No Evidence database schema, API, public read contract, scientific claim, compound assessment, publication, dose, protocol or recommendation is approved by the migration decision.

`PB-XD-001` is separately `APPROVED / RESOLVED` by Technical Direction for the minimum internal Evidence -> Scientific Content shared semantics. That approval does not merge PR #32, unblock WEB M2, approve any candidate, create production-ready scientific content, grant Legal/regulatory approval, grant commercial eligibility, or transfer Scientific Inventory / Scientific Content / Web authority to Evidence.

Permanent guardrails:

`SCIENTIFIC_CERTAINTY_BY_WISHFUL_THINKING = PROHIBITED`

`DOWNSTREAM_AGREEMENT_AS_EVIDENCE = FALSE`

`INVENTED_API_TO_MAKE_WEB_HAPPY = VERY_PROHIBITED`

## LAST_COMPLETED

- Initial Evidence migration reconciliation completed.
- Evidence Migration Phase 2 architecture/internal-contract reconciliation completed.
- Evidence migration finalization completed.
- Product Owner approved Evidence migration and autonomous domain operation on 2026-08-19.
- Scientific Content supplied its downstream semantic response to `PB-XD-001` in Issue #13 comment `5344569595`.
- Technical Direction reviewed the actual request and downstream response and approved `PB-XD-001` on 2026-08-19.
- The approved minimum shared semantics are recorded in `project/CANON.md` on this normal change-control branch and the request is moved to `project/REQUESTS/resolved/`.
- Scientific Content migration is Owner-approved and domain operation is active.
- Scientific Inventory migration is Owner-approved and domain operation is active.
- All ten recovered candidates remain fail-closed and `NOT_EVIDENCE_ACCEPTED`.

## NEXT_ACTION

- Continue active Evidence operations under current canon and the approved `PB-XD-001` shared semantics.
- Continue Evidence-domain architecture and scientific review work only within approved authority; do not invent implementation schema to satisfy Content or Web.
- Accept Scientific Inventory candidate handoffs fail-closed, preserving identity/provenance uncertainty and separating discovery provenance from scientific evidence.
- When scientifically qualified material exists, expose only the approved minimum Evidence-owned semantics needed for Scientific Content transformation.
- Keep the separate Evidence -> Web public read contract unresolved until its own governance step is authorized and approved.

## BLOCKERS

Migration blockers: `NONE`.

Operational dependencies/backlog:
- no approved Evidence -> Web public read contract exists;
- no current candidate is Evidence-accepted/qualified;
- production-ready scientific content remains absent;
- WEB M2 therefore remains blocked.

These unresolved states do not prevent Evidence autonomous operation when governed fail-closed.

## OWNER_REQUIRED

`NONE` currently.

Normal PR review/merge, incomplete research, candidate blocking, absent production content and the unresolved Evidence -> Web contract do not by themselves require Owner escalation.

## DEPENDENCIES

- Scientific Inventory for candidate intake, minimum identity normalization, intake provenance, deduplication control and routing context.
- Scientific Content Production for downstream editorial transformation after Evidence qualification under the approved internal shared contract.
- Web / Technical Direction for the future separate public read contract and downstream implementation gates.
- Orchestrator for cross-domain review/coordination through Issue #13.
- Legal / Regulatory where scientifically supported material may still require separate legal/regulatory review for public use.

## OPEN_REQUESTS

- No open Evidence -> Scientific Content PB-XD remains after Technical Direction approval of `PB-XD-001`.
- `PB-XD-001` is preserved for traceability under `project/REQUESTS/resolved/` on this branch.
- The separate Evidence -> Web public read contract remains unresolved and is not approved by `PB-XD-001`.

## LAST_VERIFIED_GITHUB_STATE

Verified 2026-08-19:
- repository: `e-milysol/peptibloom-project`;
- canonical `main` at review start: `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`;
- PR #32: OPEN / DRAFT / UNMERGED and subject to normal review/merge authority; branch `docs/evidence-migration-phase2`;
- `PB-XD-001`: `APPROVED / RESOLVED` by Technical Direction on the PR #32 branch;
- PR #41: Scientific Content migration baseline, OPEN / DRAFT / UNMERGED; Scientific Content migration separately Owner-approved in Issue #13;
- PR #42: Scientific Inventory migration baseline, OPEN / DRAFT / UNMERGED; Scientific Inventory migration separately Owner-approved in Issue #13.

## EVIDENCE OWNS

Within current canon and the migration baseline, Evidence owns:
- scientific claim/proposition representation;
- scientific source/provenance and source traceability;
- scientific assessment/interpretation;
- uncertainty and limitations;
- contradictions;
- evidence gaps;
- necessary study/source scientific context for correct interpretation and non-duplication;
- scientific eligibility/review state for downstream editorial transformation.

Evidence must preserve scientific provenance and must not manufacture certainty to satisfy downstream Content or Web.

## EVIDENCE DOES NOT OWN

Evidence does not own merely by virtue of being Evidence:
- Scientific Inventory intake authority or candidate identity workflow;
- Scientific Content editorial transformation;
- Web implementation or publication surface;
- publication approval;
- Legal/regulatory permission;
- commercial eligibility, Catalog truth or `READY_FOR_SALE`;
- private WORK 7 supplier/procurement/inventory/landed-cost truth;
- operational inventory semantics unless an explicit cross-domain contract approves a specific interface.

Evidence support does not itself constitute publication, regulatory or commercial authorization.

## SCIENTIFIC INVENTORY -> EVIDENCE BOUNDARY

Expected flow:

`Scientific Inventory -> Evidence review/representation -> Scientific Content Production -> WEB`

Permanent fail-closed invariants:

`DISCOVERY SOURCE != SCIENTIFIC EVIDENCE`

`CANDIDATE EXISTS != IDENTITY NORMALIZED != EVIDENCE REQUESTED != EVIDENCE ACCEPTED / QUALIFIED`

`INVENTORY CANDIDATE != EVIDENCE ACCEPTED != CONTENT READY != CONTENT COMPLETE != READY_FOR_PUBLICATION`

Scientific Inventory may provide working identity, verified aliases/qualifiers, intake provenance, unresolved identity questions, duplication/collision risks and workflow context. It must not pre-populate efficacy, safety, mechanism, evidence grade, dosing, scientific conclusions or Evidence acceptance.

Evidence may accept candidate intake while preserving `UNKNOWN / REQUIRES_NORMALIZATION` where identity or provenance is unresolved.

## EVIDENCE -> SCIENTIFIC CONTENT CONTRACT STATE

Internal contract status: `APPROVED / RESOLVED` through `PB-XD-001`.

Approved minimum Evidence-owned semantics that must remain preserved through editorial transformation:
- scientific claim/proposition meaning;
- Evidence-qualified support and assessment/interpretation;
- source/provenance traceability;
- necessary study/source identity context;
- limitations and uncertainty;
- contradictions;
- evidence gaps;
- Evidence-owned eligibility/review state for editorial transformation.

Scientific Content may render or transform these semantics but may not strengthen, redefine or replace them. Missing or insufficient Evidence input must route back to Evidence rather than being inferred editorially.

The shared contract does not define Evidence database schema, fields, JSON keys, enums, relations, API endpoints or public payloads. Downstream requirements do not define Evidence internal schema.

Evidence eligibility for transformation is not publication approval.

## EVIDENCE -> WEB CONTRACT STATE

Evidence -> Web public read contract: `UNAPPROVED / BLOCKED / SEPARATE FROM MIGRATION AND PB-XD-001`.

Evidence must not invent a public API/payload merely to unblock Web. WEB M2 remains blocked until both an approved Evidence public read contract and production-ready scientific content exist.

## CANDIDATE EVIDENCE STATE

Workflow state only; no substantive compound research is implied:

- 5-Amino-1MQ — `SCIENTIFIC INVENTORY CANDIDATE / NOT_EVIDENCE_ACCEPTED`
- GHK-Cu — `SCIENTIFIC INVENTORY CANDIDATE / NOT_EVIDENCE_ACCEPTED`
- KPV — `SCIENTIFIC INVENTORY CANDIDATE / NOT_EVIDENCE_ACCEPTED`
- MOTS-c — `SCIENTIFIC INVENTORY CANDIDATE / NOT_EVIDENCE_ACCEPTED`
- NAD+ — `SCIENTIFIC INVENTORY CANDIDATE / NOT_EVIDENCE_ACCEPTED`
- retatrutide — `LEGACY_REQUEST_REQUIRES_REVALIDATION / NOT_EVIDENCE_ACCEPTED`
- glutathione — `LEGACY_REQUEST_REQUIRES_REVALIDATION / NOT_EVIDENCE_ACCEPTED`
- CJC-1295 without DAC — `UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED`
- ipamorelin — `UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED`
- adipotide — `UNRESOLVED_INTAKE / NOT_EVIDENCE_ACCEPTED`

All ten remain fail-closed unless future Evidence work changes their state through the applicable scientific governance process.

No candidate is qualified for Scientific Content transformation or publication on the basis of current workflow state.

## PROVENANCE / UNCERTAINTY REQUIREMENTS

Evidence must durably preserve, at minimum:
- source traceability;
- assessment/interpretation traceability;
- uncertainty and limitations;
- contradictions;
- evidence gaps;
- distinction between evidence and anecdote where applicable;
- sufficient study/source context to avoid misleading duplication or attribution.

Where traceability is required for the intended scientific transformation, the downstream operating rule is:

`NO PROVENANCE -> NO SCIENTIFIC TRANSFORMATION`

Evidence supplies the scientific provenance semantics needed for that rule; Scientific Content remains a downstream transformer and does not become Evidence.

## PUBLICATION / TRANSFORMATION BOUNDARIES

Evidence may determine scientific eligibility for downstream transformation. That state says whether material is sufficiently reviewed/represented for Scientific Content to transform without inventing missing science.

It does not independently authorize publication.

Publication blocking is a downstream governance outcome, not a scientific Evidence field invented for Content convenience. Scientific Content and Web remain fail-closed where upstream or publication gates are unsatisfied.

`PB-XD-001` does not approve Evidence -> Web, WEB M2, scientific publication, any candidate, any Evidence assessment or any public claim.

## CROSS-DOMAIN AUTONOMY

Evidence may coordinate directly through the Control Plane with Scientific Inventory, Scientific Content, Web / Technical Direction and Orchestrator. Issue #13 is the live asynchronous mailbox for routine coordination. PB-XD is used for material shared semantic/interface contracts.

Owner relay is not required for normal candidate handoff, contract clarification, PR review or unresolved scientific backlog. Use `OWNER_REQUIRED` only when a genuine Product Owner decision is identified.
