# PeptiBloom Blocker Registry

This file contains only dependencies that currently prevent defined work from proceeding. Unapproved choices that do not stop current work are tracked as open decisions in `PROJECT_STATE.yaml`.

## Active blockers

### WEB M1 visual foundation approval

Status: BLOCKED

WEB M1 implementation must not begin until Technical Direction approves or corrects the proposed Visual Foundation. The M1 architecture and launch plan remain APPROVED.

### WEB M2 Evidence gate

Status: BLOCKED

Compound Index/Detail backed by scientific data requires:
1. approved Evidence public read contract;
2. production-ready scientific content.

Frontend must not bypass this gate with invented data or manual scientific pages.

## Open decisions tracked elsewhere

The following are PROPOSED decisions in `PROJECT_STATE.yaml`, not current development blockers:

- PB-DEC-001 — technical protection for `main`;
- PB-DEC-002 — public launch primary language;
- PB-DEC-003 — production domain and hosting.
