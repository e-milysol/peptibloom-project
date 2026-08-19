# Scientific Inventory Handoff

Owner: SCIENTIFIC INVENTORY workstream

## CURRENT_STATE

Scientific Inventory is the scientific/research intake and identity-reconciliation workstream. It is active and its Evidence handoff is in progress. It does not publish directly and does not qualify scientific evidence.

Expected flow:

`Scientific Inventory -> Evidence review/representation -> Scientific Content Production -> WEB`

Recovered candidate classifications remain coordination/intake states only. All ten current candidates remain `NOT_EVIDENCE_ACCEPTED`; none is eligible for Scientific Content transformation or publication on the basis of Inventory state alone.

## SCIENTIFIC INVENTORY OWNS

Within current canon, Scientific Inventory owns the minimum intake/reconciliation work needed to prepare candidates for Evidence:
- candidate intake and intake traceability;
- candidate-name/identity normalization sufficient for routing;
- aliases, synonyms, spelling and distinguishing qualifiers needed to avoid accidental collisions;
- intake provenance and discovery-source context;
- candidate deduplication without merging potentially distinct scientific entities prematurely;
- preservation of unresolved identity/provenance questions;
- candidate workflow state and handoff to Evidence.

Research-queue prioritization authority is not explicitly assigned by current canon and must not be inferred.

## SCIENTIFIC INVENTORY DOES NOT OWN

Scientific Inventory does not independently own or approve:
- scientific truth or Evidence acceptance;
- evidence grading, efficacy, safety, mechanism or pharmacokinetic conclusions;
- dosing, protocols or clinical-use recommendations;
- scientific claims or publication readiness;
- Legal/regulatory classification or claim permissibility;
- Catalog/SKU/commercial eligibility or `READY_FOR_SALE`;
- supplier/procurement/private-stock truth.

## DEFINITION OF INVENTORY

`Scientific Inventory` means the scientific/research candidate intake universe and its workflow/identity/provenance state.

It is not physical stock, private vial inventory, procurement inventory, Catalog/Pricing, Commerce stock, supplier catalog or product availability. WORK 7 / Private Master remains authoritative for restricted supplier, procurement, inventory, logistics and landed-cost truth; only minimum sanitized candidate/provenance facts may cross into the public scientific workflow when governance permits.

## CANDIDATE INTAKE / IDENTITY NORMALIZATION STATE

Inventory must distinguish candidate existence from normalized identity and from Evidence qualification. The current repository does not approve a database schema or exact status enum for this.

Minimum operating rule:
- preserve a canonical working candidate name plus identity-relevant aliases/qualifiers when verified;
- do not merge entities merely because commercial/historical names look similar;
- formulation, modification, salt/complex or other scientifically meaningful distinctions remain separate or unresolved until identity is verified;
- unresolved identity is preserved as `UNKNOWN / REQUIRES_NORMALIZATION` conceptually rather than guessed.

False merge is worse than temporary duplication.

## PROVENANCE RULES

Preserve why/how a candidate entered the intake workflow where known, without turning discovery provenance into scientific support.

Possible historical sources include Owner/project requests, Evidence/Content requests, supplier/commercial discovery, literature discovery and legacy project material. No project-wide provenance enum is approved here.

Invariant:

`DISCOVERY SOURCE != SCIENTIFIC EVIDENCE`

Supplier lists, price lists, COAs, Reddit/community material and historical PeptiBloom documents may explain discovery, commercial naming or questions requiring verification. They do not independently establish scientific identity where ambiguity remains, efficacy, safety, mechanism, dosage or Evidence acceptance. Restricted WORK 7 material stays private.

## CURRENT TEN-CANDIDATE STATE

These are workflow/intake classifications only; no substantive compound research or scientific assessment is implied.

| Candidate | Identity / normalization | Intake / provenance | Evidence request/state | Blocker / ambiguity | Content eligibility |
|---|---|---|---|---|---|
| 5-Amino-1MQ | working name recovered; normalization beyond name NOT VERIFIED | recovered Scientific Inventory candidate | candidate for Evidence reconciliation; `NOT_EVIDENCE_ACCEPTED` | detailed identity/provenance NOT VERIFIED | BLOCKED |
| GHK-Cu | working name recovered; GHK/GHK-Cu distinctions must not be inferred | recovered Scientific Inventory candidate | candidate for Evidence reconciliation; `NOT_EVIDENCE_ACCEPTED` | detailed identity/provenance NOT VERIFIED | BLOCKED |
| KPV | working name recovered; normalization beyond name NOT VERIFIED | recovered Scientific Inventory candidate | candidate for Evidence reconciliation; `NOT_EVIDENCE_ACCEPTED` | detailed identity/provenance NOT VERIFIED | BLOCKED |
| MOTS-c | working name recovered; normalization beyond name NOT VERIFIED | recovered Scientific Inventory candidate | candidate for Evidence reconciliation; `NOT_EVIDENCE_ACCEPTED` | detailed identity/provenance NOT VERIFIED | BLOCKED |
| NAD+ | working term recovered; terminology/form distinctions NOT VERIFIED | recovered Scientific Inventory candidate | candidate for Evidence reconciliation; `NOT_EVIDENCE_ACCEPTED` | identity/form normalization remains unverified | BLOCKED |
| retatrutide | working name recovered; normalization beyond name NOT VERIFIED | legacy request requiring revalidation | `LEGACY_REQUEST_REQUIRES_REVALIDATION`; `NOT_EVIDENCE_ACCEPTED` | intake request/provenance must be revalidated | BLOCKED |
| glutathione | working term recovered; form distinctions NOT VERIFIED | legacy request requiring revalidation | `LEGACY_REQUEST_REQUIRES_REVALIDATION`; `NOT_EVIDENCE_ACCEPTED` | identity/form and intake provenance require revalidation | BLOCKED |
| CJC-1295 without DAC | qualifier is identity-relevant and must be preserved; full normalization unresolved | unresolved recovered intake | `UNRESOLVED_INTAKE`; `NOT_EVIDENCE_ACCEPTED` | identity/provenance unresolved; do not collapse with other CJC-1295 forms | BLOCKED |
| ipamorelin | working name recovered; normalization beyond name NOT VERIFIED | unresolved recovered intake | `UNRESOLVED_INTAKE`; `NOT_EVIDENCE_ACCEPTED` | intake provenance/normalization unresolved | BLOCKED |
| adipotide | working name recovered; normalization beyond name NOT VERIFIED | unresolved recovered intake | `UNRESOLVED_INTAKE`; `NOT_EVIDENCE_ACCEPTED` | intake provenance/normalization unresolved | BLOCKED |

## EVIDENCE HANDOFF STATE

Inventory may prepare and route a candidate; Evidence owns scientific qualification.

Fail-closed distinctions:

`CANDIDATE EXISTS != IDENTITY NORMALIZED != EVIDENCE REQUESTED != EVIDENCE ACCEPTED / QUALIFIED`

No Inventory field or historical candidate list may pre-fill Evidence conclusions.

The internal `Evidence -> Scientific Content` contract remains `PROPOSED / PARTIAL / PENDING FORMALIZATION`. Draft PR #32 proposes Evidence architecture and `PB-XD-001` for that shared semantic interface; neither is approved or merged. Scientific Content has supplied an in-principle response in Issue #13, subject to Technical Direction approval. This does not change Inventory authority.

## EVIDENCE -> CONTENT / PUBLICATION BOUNDARY

`INVENTORY CANDIDATE != EVIDENCE ACCEPTED != CONTENT READY != CONTENT COMPLETE != READY_FOR_PUBLICATION`

Scientific Inventory must not route unqualified scientific material around Evidence into Content as content-ready truth. WEB M2 compound pages remain blocked until both an approved Evidence public read contract exists and production-ready scientific content exists.

## CATALOG / WORK 7 / LEGAL BOUNDARIES

A Scientific Inventory candidate does not automatically become a Catalog product, SKU, commercially eligible item, available product or `READY_FOR_SALE`. A Catalog/operational entry does not establish Evidence acceptance or scientific qualification.

WORK 7 / Private Master owns restricted procurement/inventory truth. `PRIVATE PROCUREMENT FACT != SCIENTIFIC EVIDENCE`.

Scientific Inventory may record a research candidate; Legal / Regulatory owns applicable legal determinations. `research candidate` is not a legal classification or workaround.

## LAST_COMPLETED

Phase 1 migration reconciliation verified current canon, Control Plane, Issue #13, current Scientific Inventory/Evidence/Scientific Content/Web/Private Master handoffs, the empty canonical `project/REQUESTS/open/` queue, and draft PR #32 / PB-XD-001 coordination state. No substantive compound research was performed.

## NEXT_ACTION

After normal review of this migration baseline, continue operational intake normalization and provenance reconciliation for the ten candidates, routing Evidence-ready candidates through the existing fail-closed Evidence workflow. Do not wait for every identity or Evidence review to be complete before considering migration governance ready.

## BLOCKERS

Migration blockers: none identified in current canon, provided this handoff is accepted through normal review.

Operational dependencies/backlog include unresolved candidate identity/provenance, Evidence intake/review, unresolved PB-XD-001, the unapproved Evidence public read contract and absent production-ready compound content. These do not by themselves block Scientific Inventory migration.

## OWNER_REQUIRED

None currently identified. Routine identity normalization, provenance cleanup, Evidence backlog and candidate intake do not require Owner relay. A future material scope expansion or Owner-reserved research-priority choice may require escalation.

## DEPENDENCIES

- Evidence for scientific qualification;
- Scientific Content Production for editorial transformation after Evidence qualification;
- Web for downstream publication consumption only after gates pass;
- Legal / Regulatory for legal determinations;
- WORK 7 / Private Master for restricted procurement/inventory truth.

## OPEN_REQUESTS

Canonical `project/REQUESTS/open/` on `main` is currently empty. `PB-XD-001` exists only in draft PR #32 and therefore is not yet durable canonical open-request state.

## LAST_VERIFIED_GITHUB_STATE

Verified 2026-08-19 against `main` SHA `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`.

Relevant live coordination: Issue #13. Draft PR #32 remains OPEN / DRAFT / UNMERGED and proposes Evidence Phase 2 architecture plus PB-XD-001; its HEAD is `66754d79b74f728d61ad470d6251644b3abd5e20`.
