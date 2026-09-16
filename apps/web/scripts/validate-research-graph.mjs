import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'vite';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root: appRoot, logLevel: 'silent', server: { middlewareMode: true } });

try {
  const data = await server.ssrLoadModule('/src/data/research-basics.ts');
  const graph = await server.ssrLoadModule('/src/lib/research-basics-graph.ts');
  const routes = await server.ssrLoadModule('/src/i18n/routes.ts');

  const nodeIds = new Set(data.articleNodes.map(({ articleId }) => articleId));
  assert.equal(data.articleNodes.length, 42, 'Expected exactly 42 article nodes');
  assert.equal(nodeIds.size, 42, 'Article IDs must be unique');
  assert.equal(data.localizedArticles.length, 42, 'Expected exactly 42 published Spanish records');
  assert.equal(data.articleRelationships.length, 139, 'Expected exactly 139 directed relationships');

  const relationTypes = new Set(data.relationTypes);
  const priorities = new Set(data.relationshipPriorities);
  const connectedNodeIds = new Set();

  for (const relationship of data.articleRelationships) {
    assert(nodeIds.has(relationship.sourceArticleId), `Unknown source: ${relationship.sourceArticleId}`);
    assert(nodeIds.has(relationship.targetArticleId), `Unknown target: ${relationship.targetArticleId}`);
    assert.notEqual(relationship.sourceArticleId, relationship.targetArticleId, 'Self-links are not allowed');
    assert(relationTypes.has(relationship.relationType), `Invalid relation type: ${relationship.relationType}`);
    assert(priorities.has(relationship.priority), `Invalid priority: ${relationship.priority}`);
    connectedNodeIds.add(relationship.sourceArticleId);
    connectedNodeIds.add(relationship.targetArticleId);
  }

  assert.equal(connectedNodeIds.size, 42, 'The graph must contain zero orphan articles');

  for (const article of data.localizedArticles) {
    const resolved = graph.resolveLocalizedArticle(article.articleId, 'es');
    assert(resolved, `Spanish article did not resolve: ${article.articleId}`);
    assert(routes.isRoutePublished(`/research-basics/${article.slug}/`, 'es'), `Route is not published: ${article.slug}`);
    assert(existsSync(join(appRoot, 'src/pages/research-basics', `${article.slug}.astro`)), `Page file is missing: ${article.slug}`);
    assert.equal(graph.resolveLocalizedArticle(article.articleId, 'en'), null, `English fallback detected: ${article.articleId}`);
    assert.equal(graph.resolveLocalizedArticle(article.articleId, 'fr'), null, `French fallback detected: ${article.articleId}`);
  }

  const hub = graph.selectResearchRecommendations('rb.identity-purity-quantity', 'es');
  assert.equal(hub.length, 4, 'Recognized hub should expose four strong, diverse recommendations');
  assert.equal(new Set(hub.map(({ relationship }) => relationship.relationType)).size >= 2, true, 'Hub selection should be conceptually diverse');

  const entry = graph.selectResearchRecommendations('rb.research-use-only', 'es');
  assert.equal(entry.length, 2, 'Legitimate entry node should expose its two approved relationships');

  const lowDegree = graph.selectResearchRecommendations('rb.amino-acid-history', 'es');
  assert.equal(lowDegree.length, 1, 'Low-degree article should not receive manufactured recommendations');

  const unavailable = graph.selectResearchRecommendations('rb.identity-purity-quantity', 'en');
  assert.equal(unavailable.length, 0, 'Unpublished locale targets must not resolve');

  const deterministicA = graph.selectResearchRecommendations('rb.certificate-of-analysis', 'es');
  const deterministicB = graph.selectResearchRecommendations('rb.certificate-of-analysis', 'es');
  assert.deepEqual(deterministicA, deterministicB, 'Selection ordering must be deterministic');

  console.log('Research graph validation passed: 42 nodes, 139 relationships, 0 orphans.');
} finally {
  await server.close();
}
