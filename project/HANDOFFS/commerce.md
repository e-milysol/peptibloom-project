# Commerce Handoff

Owner: COMMERCE domain

Status: MIGRATION BASELINE / NON-PRODUCTION

This handoff records the current durable Commerce operating baseline. It does not approve a commerce platform, payment provider, production checkout, product sale, pricing, Legal eligibility, scientific claims, or any cross-domain data contract.

## CURRENT_STATE

- Commerce architecture and design work exists, but production Commerce is not authorized.
- Platform selection remains unresolved. No Shopify, Medusa, payment-provider, tax, shipping, checkout or production-deployment commitment is approved by this handoff.
- PR #31 (`test(web): add provider-neutral commerce mock spike`) remains `PROPOSED / SPIKE`: synthetic-only, provider-neutral, non-production, and hard-disabled for real checkout.
- No real checkout authorization exists.
- No product is currently established as `READY_FOR_SALE`.
- Bloom Caps is a Physical Products design candidate, not a first-sale or sale-ready Commerce candidate. Current canonical Physical Products state keeps Bloom Caps at `PRE_G0`, with CAD unauthorized.
- Catalog/Pricing truth remains separate from Commerce sale eligibility.
- Legal/regulatory eligibility remains separate from Commerce readiness.
- WORK 7 / Private Master remains authoritative for private supplier, procurement, cost, landed-cost, logistics and private inventory truth; those data must remain private.
- Routine coordination uses the current Control Plane queues, including Issue #13 for Orchestrator coordination and Issue #14 for Catalog/Pricing coordination.

## LAST_COMPLETED

- Commerce Phase 2 reconciliation completed against the current Control Plane.
- The existing Commerce workstreams were reconciled as working/proposed material rather than automatically promoted to canon.
- Provider-neutral synthetic Commerce spike evidence exists in PR #31, but the PR remains unmerged and does not create provider, checkout or sale authorization.
- Physical Products authority and clean-sheet design controls are now durable under PB-DEC-501 and PB-DEC-502; Commerce must consume only approved/sanitized upstream truth when an applicable cross-domain contract exists.

## NEXT_ACTION

Continue useful non-production Commerce work within authority while preserving fail-closed gates. Before any production storefront, checkout, payment, real product publication, or automated cross-domain dependency proceeds, obtain the applicable upstream approvals and Owner authorization where required.

Do not select a platform merely to close migration.

## BLOCKERS

Migration baseline blocker addressed by this handoff proposal.

Production/sale remains blocked until all applicable gates are satisfied, including authoritative product truth, Catalog/Pricing truth, Legal/regulatory eligibility, territory constraints, payment-provider acceptance, shipping/returns readiness, production authorization and any other applicable domain-specific approval.

Unknown or missing approvals remain `UNKNOWN` / not authorized.

## OWNER_REQUIRED

`NO`

No Owner decision is required merely to operate Commerce in its current non-production scope or to complete migration review. Platform/provider selection may remain unresolved until it becomes a genuine blocking decision.

## DEPENDENCIES

- **Physical Products / Accessories** — physical product identity, design/provenance/specification, factual IP/license evidence, prototype/manufacturing and physical-validation state.
- **Catalog / Pricing** — catalog eligibility, SKU/presentation truth and pricing authority.
- **Legal / Regulatory** — legal classification, regulatory eligibility, territory/legal gates and legal interpretation.
- **Web** — Astro storefront implementation and publication execution.
- **Brand / Visual** — approved identity and visual assets.
- **Analytics** — measurement taxonomy and production Analytics gates.
- **Growth** — acquisition/distribution; Commerce owns conversion rather than acquisition.
- **Evidence / Scientific Content** — scientific claims/evidence/publication authority remains separate.
- **WORK 7 / Private Master** — private procurement, supplier, cost, landed-cost, logistics and private inventory truth remains private and separate.
- **Owner** — applicable production, provider, regulated-sale, financial and other reserved approvals.

## OPEN_REQUESTS

- `project/REQUESTS/open/` contained no substantive open request at the last migration reconciliation.
- Routine coordination should use the established Control Plane queues rather than asking the Owner to relay messages.

## LAST_VERIFIED_GITHUB_STATE

- Repository: `e-milysol/peptibloom-project`
- Base branch: `main`
- Verified base SHA for this handoff branch: `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`
- PR #31 HEAD at reconciliation: `3984369beb3da1ae0ac34703cae50aa8332a6d3e`
- PR #31 state at reconciliation: OPEN, unmerged, `PROPOSED / SPIKE`.

## COMMERCE OWNS

Within approved scope, Commerce owns commercial/store architecture and readiness coordination, storefront commercial presentation architecture, product-state gating for Commerce, collections, cart/checkout architecture, conversion funnel, catalogue-request commercial flow, shipping/returns customer journey, commerce-platform evaluation, and coordination of the conditions required before a product can become sellable.

Commerce may consume authoritative upstream facts and evaluate whether Commerce gates are satisfied. It must not manufacture upstream truth.

## COMMERCE DOES NOT OWN

Commerce does not own or silently absorb:

- Catalog/Pricing source-of-truth or price approval;
- Physical Products design, provenance, manufacturability or physical-validation authority;
- Brand/Visual authority;
- Web implementation/publication authority;
- Growth acquisition authority;
- Analytics taxonomy/production authorization;
- Legal/regulatory interpretation or approval;
- Evidence/scientific assessment, claims or scientific publication;
- WORK 7 private supplier/procurement/cost/logistics/private-inventory truth;
- Owner-reserved production, provider, financial or regulated-sale decisions.

A technical capability, product existence, manufacturability, catalog listing or price does not by itself establish `READY_FOR_SALE`.

## COMMERCE CROSS-DOMAIN GATES

Commerce must fail closed.

- Physical candidate != first-sale candidate.
- Catalog-listed != sale-eligible.
- Priced != sale-eligible.
- Legally eligible in one product model/territory != eligible in another.
- Mock checkout != production checkout.
- Provider spike != provider approval.
- Successful CI/preview != Commerce approval.
- No product may be treated as `READY_FOR_SALE` unless all applicable authoritative commercial, product, Legal/regulatory, territorial, pricing, payment-provider, shipping/returns and Owner gates are satisfied.
- A `PB-XD-NNN` contract is required before Commerce relies on a material or automated cross-domain data contract, identifier mapping, synchronization mechanism or shared semantic interface. Domain-local reconciliation and isolated synthetic spikes do not by themselves require PB-XD.

## FIRST-SALE STATE

No authoritative first-sale candidate is currently established by the Control Plane.

Bloom Caps must not be promoted into this role merely because it is the current Physical Products clean-sheet design exercise. It remains a physical-design candidate only.

Commerce may prepare non-production sale-gate logic and synthetic storefront contracts without inventing a first-sale candidate.

## PR #31

PR #31 remains `PROPOSED / SPIKE`.

Do not infer from its existence, mergeability, tests, CI or preview deployment that a provider, checkout architecture, production Commerce implementation or product sale is approved.
