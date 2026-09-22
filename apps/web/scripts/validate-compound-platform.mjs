import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root: appRoot, logLevel: 'silent', server: { middlewareMode: true } });

try {
  const publication = await server.ssrLoadModule('/src/lib/compound-publication.ts');
  const fixtures = await server.ssrLoadModule('/src/data/compound-synthetic-fixtures.ts');
  const fixture = fixtures.syntheticCompoundPublicationFixture;
  const clone = () => structuredClone(fixture);
  const adapt = (payload, locale = 'es') => publication.adaptCompoundPublication(payload, locale);

  const expectBlocked = (name, payload, code, locale = 'es') => {
    const result = adapt(payload, locale);
    assert.equal(result.ok, false, `${name}: unsafe payload was accepted`);
    assert.equal(result.code, code, `${name}: expected ${code}, got ${JSON.stringify(result)}`);
    console.log(`PASS ${name}`);
  };

  const syntheticPreview = publication.adaptSyntheticCompoundForTest(clone());
  assert.ok(syntheticPreview, 'neutral synthetic fixture must traverse the test-only adapter');
  assert.equal(syntheticPreview.testOnly, true);
  assert.equal(syntheticPreview.publicationEligible, false);
  console.log('PASS valid neutral synthetic approved-state adapter fixture');

  expectBlocked('synthetic fixture leakage', clone(), 'SYNTHETIC_FIXTURE_REJECTED');

  const missingEvidence = clone();
  delete missingEvidence.syntheticFixture;
  missingEvidence.provenance = missingEvidence.provenance.filter(
    ({ kind }) => kind !== 'EVIDENCE_REPRESENTATION',
  );
  expectBlocked('missing Evidence representation', missingEvidence, 'MISSING_EVIDENCE_REPRESENTATION');

  const missingContent = clone();
  delete missingContent.syntheticFixture;
  missingContent.sections = [];
  expectBlocked('missing Scientific Content', missingContent, 'MISSING_SCIENTIFIC_CONTENT');

  const missingSummary = clone();
  delete missingSummary.syntheticFixture;
  missingSummary.sections[0].kind = 'related-research';
  expectBlocked('missing scientific summary', missingSummary, 'MISSING_SCIENTIFIC_CONTENT');

  const unapproved = clone();
  delete unapproved.syntheticFixture;
  unapproved.lifecycleState = 'EVIDENCE_REVIEWED';
  expectBlocked('unapproved content', unapproved, 'CONTENT_NOT_APPROVED');

  const unknownState = clone();
  delete unknownState.syntheticFixture;
  unknownState.lifecycleState = 'MAYBE_PUBLIC';
  expectBlocked('unknown publication state', unknownState, 'UNKNOWN_PUBLICATION_STATE');

  const missingProvenance = clone();
  delete missingProvenance.syntheticFixture;
  missingProvenance.sections[0].sourceIds = ['test-only.missing-source'];
  expectBlocked('missing required provenance', missingProvenance, 'MISSING_PROVENANCE');

  const wrongProvenanceKind = clone();
  delete wrongProvenanceKind.syntheticFixture;
  wrongProvenanceKind.sections[0].sourceIds = ['test-only.scientific-content-review'];
  wrongProvenanceKind.provenance.push({
    id: 'test-only.scientific-content-review',
    kind: 'SCIENTIFIC_CONTENT_REVIEW',
    uri: 'test-only://scientific-content-review',
  });
  expectBlocked('non-scientific provenance cannot support content', wrongProvenanceKind, 'MISSING_PROVENANCE');

  const incompleteLocale = clone();
  delete incompleteLocale.syntheticFixture;
  expectBlocked('incomplete locale without fallback', incompleteLocale, 'LOCALE_MISMATCH', 'en');

  expectBlocked('malformed payload', 'not-an-object', 'MALFORMED_PAYLOAD');

  const unsupportedSchema = clone();
  delete unsupportedSchema.syntheticFixture;
  unsupportedSchema.schemaVersion = 'pb.web.compound-publication.v999';
  expectBlocked('unsupported schema version', unsupportedSchema, 'UNSUPPORTED_SCHEMA_VERSION');

  const missingAuthorization = clone();
  delete missingAuthorization.syntheticFixture;
  missingAuthorization.provenance.push({
    id: 'test-only.scientific-content-review',
    kind: 'SCIENTIFIC_CONTENT_REVIEW',
    uri: 'test-only://scientific-content-review',
  });
  expectBlocked('missing publication authorization', missingAuthorization, 'PUBLICATION_NOT_AUTHORIZED');

  // Ephemeral neutral data proves the production-approved path. It is never
  // exported into route inventory and makes no real scientific assertion.
  const approved = clone();
  delete approved.syntheticFixture;
  approved.publicationAuthorization = {
    status: 'GRANTED',
    authorizationId: 'test-only.publication-authorization',
    grantedBy: 'test-harness',
    grantedAt: '2026-01-01T00:00:00.000Z',
  };
  approved.provenance.push({
    id: 'test-only.scientific-content-review',
    kind: 'SCIENTIFIC_CONTENT_REVIEW',
    uri: 'test-only://scientific-content-review',
  }, {
    id: 'test-only.publication-authorization',
    kind: 'PUBLICATION_AUTHORIZATION',
    uri: 'test-only://publication-authorization',
  });
  const approvedResult = adapt(approved);
  assert.equal(approvedResult.ok, true, JSON.stringify(approvedResult));
  assert.equal(approvedResult.presentationState, 'APPROVED_FOR_WEB');
  console.log('PASS valid neutral approved production-adapter shape');

  console.log('Compound platform validation: 14/14 fail-closed and adapter scenarios passed.');
} finally {
  await server.close();
}
