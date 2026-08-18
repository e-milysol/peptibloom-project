# Private Master Handoff — WORK 7

Owner: WORK 7 — Inventory / Procurement / Landed Cost

Implementation repository: `e-milysol/peptibloom-private-master` (PRIVATE)

## Scope

WORK 7 owns the private operational master for supplier/procurement/inventory/landed-cost workflows and related private operational records.

This domain is not the WORK 6 App Core Personal Inventory.

## Repository / privacy boundary

The public repository `e-milysol/peptibloom-project` remains the shared project Control Plane and may carry sanitized governance/status only.

Restricted WORK 7 information must remain private, including where applicable:

- supplier/contact details;
- private acquisition prices and payment information;
- shipment/tracking identifiers;
- invoices/addresses;
- private commercial terms;
- private COAs/tests/documents;
- private storage paths or credentials;
- raw operational database extracts.

When a public handoff cannot be safely sanitized, report only `PRIVATE REVIEW REQUIRED` and keep the substantive material in the private environment.

## Separation from App Core / WORK 6

Private Master and App Core must remain separate in:

- database;
- deployment;
- document storage;
- credentials/access boundary;
- domain models;
- user/health identity.

No cross-domain FK, shared health identity, implicit synchronization or shared credential is approved.

A future interface between these domains requires an explicit cross-domain request/contract.

## Control Plane protocol

Before significant work, WORK 7 should read the current public Control Plane and applicable Issue #13 coordination instructions, then verify the private repository state.

When review is needed, provide a sanitized `WORK 7 -> ORCHESTRATOR` message with:

- private repo identifier;
- branch/PR/HEAD/base when safe to disclose;
- scope;
- validations;
- decisions used;
- blocker/approval requested.

Do not copy restricted operational data into Issue #13 or public `project/` files.

## Current organizational status

- ownership: `WORK 7`;
- repo assignment: `e-milysol/peptibloom-private-master`;
- repo visibility: private;
- App Core boundary: separate;
- public Control Plane reporting: sanitized only.

Detailed implementation state remains owned by the private repository and WORK 7 handoff process.
