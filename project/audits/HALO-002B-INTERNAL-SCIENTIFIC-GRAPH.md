# HALO-002B internal scientific graph

The Research Basics graph expresses reviewed scientific/editorial relationships between the 42 existing concepts. It supports learning navigation; it is not an SEO link generator and does not alter scientific source content.

## Identity and localization

- `ArticleNode.articleId` and `conceptKey` are stable, language-independent identities.
- `LocalizedArticle` maps an article identity to a reviewed locale-specific slug and title.
- Graph membership does not mean a localized page exists.
- A target is eligible only when its localized record is explicitly `published` and its route is present in the multilingual publication registry.
- Missing English or French records resolve to `null`; there is no cross-language fallback.

## Relationships and selection

The approved graph contains exactly 42 nodes and 139 directed relationships using `PREREQUISITE`, `DEEPER`, `INTERPRETATION` and `RELATED`, prioritized with `P1`, `P2` and future `P3`.

“Continúa investigando” selects deterministically by priority, conceptual diversity and relationship order. It normally renders at most three recommendations. The explicitly reviewed scientific hubs may render four. It never fills missing positions with weak or untranslated targets.

## Maintaining the graph

To register a reviewed localized article, add one `LocalizedArticle` record with the existing `articleId`, approved locale, localized slug/title and `published` status, then add its real route to the existing publication registry. Do not create placeholder locale records.

To add a relationship, obtain scientific/editorial approval first, then add the directed edge using existing language-independent article IDs. Run `npm run validate:graph`, `npm run check` and `npm run build`.

## HALO-002A content-gap backlog

Editorial reference only; no article is created by HALO-002B.

- P1: analytical method validation.
- P1: assay/content determination versus chromatographic area percentage.
- P1: aseptic processing versus sterilization versus disinfection.
- P2: pH, buffers and formulation compatibility.
- P2: residual moisture and reconstitution behavior.
- P2: sampling, representativeness and chain of custody.
