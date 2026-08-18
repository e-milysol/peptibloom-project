# Evidence Handoff

Owner: EVIDENCE workstream

## Current state

Evidence architecture/reconciliation is ongoing. No public web contract is approved in this coordination baseline.

## Responsibilities

- Preserve scientific provenance.
- Represent uncertainty, contradictions and evidence gaps.
- Keep scientific interpretation separate from operational inventory concepts.
- Coordinate public representations with WEB without allowing UI convenience to dictate scientific schema.

## Contract boundaries

The internal `Evidence -> Scientific Content` contract is distinct from the future Evidence -> WEB public read contract.

Internal Evidence -> Scientific Content contract status: `PROPOSED / PARTIAL / PENDING FORMALIZATION`.

This internal status is not approval. Claims, assessments, studies and sign-off structures remain `UNRESOLVED / REQUIRES FORMAL REPRESENTATION`. These terms do not establish Evidence models, entities, fields, relations, payloads, workflow semantics, acceptance rules or schema.

The Evidence -> WEB public read contract remains unapproved and is a separate WEB M2 gate.

## Cross-domain gate

WEB M1 does not require Evidence integration.
WEB M2 compound pages do.

When ready, Evidence should publish/approve a public read contract describing only production-safe representations needed by the web. Endpoint names, payloads or relations must not be invented by WEB in advance.

## Scientific content rule

Only content that has completed the approved Scientific Inventory/Evidence process may be represented as production scientific content.

Scientific Content Production is an editorial transformation stage only. It does not perform or supersede Evidence assessment, approve scientific claims or Evidence, or independently authorize publication.
