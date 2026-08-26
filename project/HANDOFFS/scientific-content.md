# Scientific Content Production Handoff

Owner: SCIENTIFIC CONTENT PRODUCTION coordination stage

## Current operating state

MIGRATION_ACCEPTED: `APPROVED` on 2026-08-19 for Scientific Content Production autonomous operational ownership only.

CURRENT_STATE: `DOMAIN_OPERATION ACTIVE / coordination_editorial_transformation / PB-XD-002 response active / production scientific content blocked pending Evidence-qualified input`

LAST_COMPLETED:
- Scientific Content migration Phase 1 authority reconciliation completed.
- Scientific Content migration Phase 2 durable-state reconciliation completed.
- Product Owner approved Scientific Content Production migration and autonomous operational ownership on 2026-08-19.
- Scientific Content supplied its domain response to proposed `PB-XD-001` through Issue #13 comment `5344569595`.
- Technical Direction approved `PB-XD-001` on 2026-08-19 for the minimum internal Evidence -> Scientific Content shared semantics.
- All recovered candidate compounds remain fail-closed for Content transformation.

NEXT_ACTION:
- Continue active autonomous Scientific Content governance within the authority boundary below.
- Await and consume Evidence-qualified input when available under the approved `PB-XD-001` semantics.
- Respond to open `PB-XD-002` with the minimum public-content fields and transformation constraints needed for Release 1, without redefining Evidence semantics, selecting an unqualified candidate or authorizing publication.
- When Evidence-qualified material exists, define only the minimum editorial/template structure needed for the downstream representation, preserving upstream scientific meaning and provenance.

BLOCKERS:
- Production scientific transformation is blocked wherever required Evidence-qualified input is missing or insufficient.
- `PB-XD-002` remains open; no Evidence-qualified Library pilot or Blog opportunity is currently supplied to Scientific Content.
- WEB M2 / production compound pages remain blocked until both the Evidence public read contract is approved and production-ready scientific content exists.

OWNER_REQUIRED: `NONE` for current Scientific Content operation. Pending Evidence, blocked candidates, incomplete references, incomplete template work, Web M2, or pending Legal review do not by themselves require Owner escalation.

DEPENDENCIES:
- Scientific Inventory for research/intake candidates and source-review workflow.
- Evidence for scientific assessment/representation, provenance, uncertainty, contradictions, evidence gaps, and eligibility for editorial transformation.
- Growth for SEO/content briefs only; search demand does not determine scientific truth.
- Web for implementation/publication surfaces; Scientific Content does not modify Web to bypass gates.
- Legal / Regulatory where public use of otherwise scientifically supported content requires legal/regulatory review.

OPEN_REQUESTS:
- No open Evidence -> Scientific Content PB-XD remains after Technical Direction approval of `PB-XD-001`.
- `PB-XD-001` is resolved and preserved under `project/REQUESTS/resolved/`; its approval does not approve Evidence -> Web or any publication/candidate/claim gate.
- `PB-XD-002` is open for the distinct Release 1 Evidence / Public Content contract. Scientific Content may define transformation-preservation requirements but may not supply missing Evidence or approve a candidate, claim or publication.

LAST_VERIFIED_CONTROL_PLANE_STATE:
- verified date: `2026-08-26`;
- internal `PB-XD-001`: `APPROVED / RESOLVED`;
- public-content `PB-XD-002`: `OPEN`;
- all ten recovered candidates: `CONTENT BLOCKED` and `NOT_EVIDENCE_ACCEPTED` upstream;
- Web M2 and publication: `BLOCKED`.

## Purpose

Scientific Content Production is the editorial transformation stage between Evidence review/representation and WEB consumption. It transforms eligible Evidence input into publication-oriented scientific content without becoming a scientific source of truth.

## Authority boundary

### Scientific Content owns

Within approved upstream and downstream contracts, Scientific Content may own:
- editorial transformation of Evidence-qualified material;
- scientific writing structure and editorial organization;
- readability and terminology consistency;
- FAQ construction from approved source material;
- reference formatting without altering source identity;
- content-template use and minimum template development where needed;
- controlled transformation for downstream Web/publication;
- preservation and clear presentation of uncertainty, limitations, contradictions and evidence gaps supplied upstream.

### Scientific Content does not own

Scientific Content:
- does not own scientific truth;
- does not perform or supersede Evidence assessment or grading;
- does not approve scientific claims or Evidence;
- does not independently interpret studies as scientific authority;
- does not create safety conclusions, dosage/protocol recommendations or clinical significance;
- does not determine legal/regulatory claim permissibility;
- does not independently authorize publication;
- does not own Web implementation or Growth strategy;
- must not strengthen, invent or fill missing scientific claims, studies, evidence, references or certainty.

Representing this stage is coordination-state documentation only and grants no new scientific or publication authority.

## Internal Evidence handoff

`Evidence -> Scientific Content`

Contract status: `APPROVED / RESOLVED` through `PB-XD-001`.

Technical Direction approved the minimum Evidence-owned shared semantics needed to preserve:
- the scientific claim/proposition meaning being represented;
- Evidence-qualified support and assessment/interpretation for that claim;
- source/provenance traceability sufficient to inspect support;
- study/source identity context needed to avoid misleading duplication or attribution;
- material limitations and uncertainty;
- contradictions;
- evidence gaps;
- an Evidence-owned eligibility/review state indicating whether editorial transformation may proceed without filling missing science.

Scientific Content may render or transform those semantics but may not strengthen, redefine or replace them. A transformed statement must remain traceable to its Evidence-qualified support, limitations, contradictions and evidence-gap state. Scientific Content must not detach prose from the upstream context that constrains its meaning.

The approved contract does not define Evidence database schema, entities, fields, relations, JSON keys, enums, API endpoints, public payloads, acceptance rules or sign-off semantics. Downstream requirements do not define Evidence internals.

Evidence eligibility/review state is not publication approval. Publication blocking remains a downstream governance outcome rather than a scientific Evidence field created for Content convenience.

Missing or insufficient input must be routed back to Evidence rather than inferred or filled editorially.

`PB-XD-001` does not approve Evidence -> Web, WEB M2, scientific publication, any candidate, any Evidence assessment or any public claim.

## Scientific Inventory interface

The required workflow remains:

`Scientific Inventory -> Evidence review/representation -> Scientific Content Production -> WEB`

Permanent readiness distinction:

`SCIENTIFIC INVENTORY CANDIDATE != EVIDENCE ACCEPTED != CONTENT READY != CONTENT COMPLETE != READY_FOR_PUBLICATION`

Scientific Inventory candidate or legacy-request status does not make content ready. Inventory may provide research/intake context, but scientific material intended for production transformation requires Evidence qualification first.

## Candidate content state

The following are workflow/editorial states only, not scientific assessments and not a new project-wide enum:

- 5-Amino-1MQ — `SCIENTIFIC INVENTORY CANDIDATE / CONTENT BLOCKED`
- GHK-Cu — `SCIENTIFIC INVENTORY CANDIDATE / CONTENT BLOCKED`
- KPV — `SCIENTIFIC INVENTORY CANDIDATE / CONTENT BLOCKED`
- MOTS-c — `SCIENTIFIC INVENTORY CANDIDATE / CONTENT BLOCKED`
- NAD+ — `SCIENTIFIC INVENTORY CANDIDATE / CONTENT BLOCKED`
- retatrutide — `LEGACY REQUEST REQUIRES REVALIDATION / CONTENT BLOCKED`
- glutathione — `LEGACY REQUEST REQUIRES REVALIDATION / CONTENT BLOCKED`
- CJC-1295 without DAC — `UNRESOLVED INTAKE / CONTENT BLOCKED`
- ipamorelin — `UNRESOLVED INTAKE / CONTENT BLOCKED`
- adipotide — `UNRESOLVED INTAKE / CONTENT BLOCKED`

No candidate is `READY_FOR_TRANSFORMATION` or `READY_FOR_PUBLICATION` in the last verified canonical state.

## Provenance and claim-preservation requirements

Permanent operating rule:

`NO PROVENANCE -> NO SCIENTIFIC TRANSFORMATION` where source traceability is necessary to support the intended content.

Scientific Content must not invent or fill citation gaps, including PMIDs, DOIs, titles, authors, trial identifiers, patents or other source identities.

Editorial transformation may improve clarity, structure, readability and terminology consistency. It must not improve evidence strength, certainty, clinical significance, regulatory status, safety confidence or benefit magnitude.

KNOWN, UNKNOWN, THEORETICAL, CONTRADICTORY and ANECDOTAL distinctions, plus any formally approved Evidence-specific states, must remain substantively equivalent after transformation.

## Content template / style state

No canonical comprehensive compound template is currently established by this handoff.

A complete compound template is not required for Scientific Content migration. Historical extensive library specifications are migration evidence only and must not be revived as canon by default.

Future template work must consume approved Evidence semantics and downstream Web requirements. Any new structure that is not already canonical must be identified as `PROPOSED` until approved through the applicable workflow.

## Growth / Web / Legal boundaries

Growth may supply search demand, query clusters, content opportunities, FAQ opportunities and approved content briefs. Search demand does not determine scientific truth, and SEO wording must not strengthen scientific claims or weaken caution.

Web owns implementation and publication surfaces. Scientific Content supplies eligible editorial payloads/content requirements and does not modify production Web merely to publish a page or bypass Evidence/publication gates.

Legal / Regulatory may restrict whether or how scientifically supported content may be used publicly. Evidence support does not equal legal marketing permission. Where applicable Legal input is required, Scientific Content remains fail-closed.

Routine coordination with these domains uses the Control Plane without Owner relay. PB-XD is reserved for material cross-domain shared semantic/interface contracts.

## Automation boundary

Automation may validate completeness, perform transformations permitted by an approved contract, or route material to human review.

Automation may never approve Evidence, approve scientific content, authorize publication or publish scientific content.

## Publication gate

Scientific Content Production does not bypass the existing WEB M2 gate. Production compound pages remain blocked until both:
1. the Evidence public read contract is approved; and
2. production-ready scientific content exists.

`PB-XD-002` is the open Release 1 cross-domain request for that public-content handoff. Opening or answering it does not itself satisfy Legal, Scientific QA, Accessibility, Web, merge or publication authorization gates.

`CONTENT COMPLETE` does not imply `READY_FOR_PUBLICATION` unless the applicable downstream publication and legal/regulatory gates are satisfied.

## Migration vs operational blockers

Scientific Content migration is `ACCEPTED` for autonomous operational ownership. That migration approval does not approve Evidence schema, scientific claims, candidate readiness, publication readiness, WEB M2, publication, or Legal/Regulatory clearance, and it does not bypass normal review/merge authority for durable repository changes.

`PB-XD-001` is now separately approved by Technical Direction and does not expand those non-authorizations.

The following are normal Scientific Content operational backlog or blockers and are not Scientific Content migration blockers:
- all ten candidates currently blocked;
- zero `READY_FOR_PUBLICATION` pages;
- open `PB-XD-002` / unresolved Evidence -> Web public-content contract;
- incomplete compound template;
- WEB M2 blocked;
- pending Legal review.

Scientific Content migration depends on correctly governing these unresolved states, not resolving them prematurely.
