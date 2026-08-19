# Scientific Content Production Handoff

Owner: SCIENTIFIC CONTENT PRODUCTION coordination stage

## Current operating state

CURRENT_STATE: `coordination_editorial_transformation / autonomous governance ready / production scientific content blocked pending Evidence-qualified input`

LAST_COMPLETED:
- Scientific Content migration Phase 1 authority reconciliation completed.
- Scientific Content supplied its domain response to proposed `PB-XD-001` through Issue #13 comment `5344569595`.
- All recovered candidate compounds remain fail-closed for Content transformation.

NEXT_ACTION:
- Continue autonomous Scientific Content governance within the authority boundary below.
- Await and consume Evidence-qualified input when available.
- Participate in `PB-XD-001` review as Scientific Content only; do not approve the shared contract or define Evidence internals.
- When Evidence-qualified material exists, define only the minimum editorial/template structure needed for the downstream representation, preserving upstream scientific meaning and provenance.

BLOCKERS:
- Production scientific transformation is blocked wherever required Evidence-qualified input is missing or insufficient.
- WEB M2 / production compound pages remain blocked until both the Evidence public read contract is approved and production-ready scientific content exists.

OWNER_REQUIRED: `NONE` for current Scientific Content operation. Pending Evidence, PB-XD review, blocked candidates, incomplete references, incomplete template work, Web M2, or pending Legal review do not by themselves require Owner escalation.

DEPENDENCIES:
- Scientific Inventory for research/intake candidates and source-review workflow.
- Evidence for scientific assessment/representation, provenance, uncertainty, contradictions, evidence gaps, and eligibility for editorial transformation.
- Growth for SEO/content briefs only; search demand does not determine scientific truth.
- Web for implementation/publication surfaces; Scientific Content does not modify Web to bypass gates.
- Legal / Regulatory where public use of otherwise scientifically supported content requires legal/regulatory review.

OPEN_REQUESTS:
- `PB-XD-001` — proposed Evidence -> Scientific Content internal shared contract. As of last verification it exists only in draft PR #32 and is not canonical `main`. Scientific Content response has been supplied; Technical Direction / Orchestrator review remains pending.

LAST_VERIFIED_GITHUB_STATE:
- repository: `e-milysol/peptibloom-project`
- branch: `main`
- main SHA: `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`
- verified date: `2026-08-19`
- PR #32: OPEN / DRAFT / UNMERGED at last verification; do not merge or treat its proposed semantics as canonical until approved through normal control.

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

Contract status: `PROPOSED / PARTIAL / PENDING FORMALIZATION`.

`PB-XD-001` is a separate shared-contract gate from Scientific Content migration. Scientific Content may operate autonomously while this dependency remains unresolved, provided it keeps scientific transformation fail-closed where required Evidence input is unavailable.

Scientific Content has accepted in principle, subject to Technical Direction approval, minimum Evidence-owned shared semantics sufficient to preserve:
- the scientific claim/proposition meaning being represented;
- Evidence-qualified support and assessment/interpretation for that claim;
- source/provenance traceability sufficient to inspect support;
- study/source identity context needed to avoid misleading duplication or attribution;
- material limitations and uncertainty;
- contradictions;
- evidence gaps;
- an Evidence-owned eligibility/review state indicating whether editorial transformation may proceed without filling missing science.

A transformed statement must remain traceable to its Evidence-qualified support, limitations, contradictions and evidence-gap state. Scientific Content must not detach prose from the upstream context that constrains its meaning.

This status and Content response do not approve a contract or define Evidence database schema, entities, fields, relations, JSON keys, enums, API endpoints, public payloads, acceptance rules or sign-off semantics.

Evidence eligibility/review state is not publication approval. Publication blocking remains a downstream governance outcome rather than a scientific Evidence field created for Content convenience.

Missing or insufficient input must be routed back to Evidence rather than inferred or filled editorially.

## Scientific Inventory interface

The required workflow remains:

`Scientific Inventory -> Evidence review/representation -> Scientific Content Production -> WEB`

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

`CONTENT COMPLETE` does not imply `READY_FOR_PUBLICATION` unless the applicable downstream publication and legal/regulatory gates are satisfied.

## Migration vs operational blockers

The following are normal Scientific Content operational backlog or blockers and are not, by themselves, Scientific Content migration blockers:
- all ten candidates currently blocked;
- zero `READY_FOR_PUBLICATION` pages;
- incomplete Evidence -> Content contract;
- unresolved Evidence -> Web public read contract;
- incomplete compound template;
- WEB M2 blocked;
- pending Legal review.

Scientific Content migration depends on correctly governing these unresolved states, not resolving them prematurely.
