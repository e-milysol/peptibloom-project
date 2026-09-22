import {
  COMPOUND_PUBLICATION_SCHEMA_VERSION,
  type CompoundPublicationPayload,
} from '../lib/compound-publication';

/**
 * Neutral contract fixture. It names no real compound and asserts no scientific fact.
 * The production adapter rejects every payload carrying `syntheticFixture: true`.
 */
export const syntheticCompoundPublicationFixture = {
  schemaVersion: COMPOUND_PUBLICATION_SCHEMA_VERSION,
  compoundId: 'test-only.synthetic-subject',
  locale: 'es',
  lifecycleState: 'WEB_READY',
  identity: {
    displayName: 'Sujeto sintético de prueba',
  },
  sections: [
    {
      kind: 'scientific-summary',
      heading: 'Contenido sintético',
      body: 'Texto neutro utilizado únicamente para verificar la canalización de presentación.',
      sourceIds: ['test-only.source-register'],
    },
  ],
  provenance: [
    {
      id: 'test-only.evidence-representation',
      kind: 'EVIDENCE_REPRESENTATION',
      uri: 'test-only://evidence-representation',
    },
    {
      id: 'test-only.source-register',
      kind: 'SOURCE_REGISTER',
      uri: 'test-only://source-register',
    },
  ],
  syntheticFixture: true,
} as const satisfies CompoundPublicationPayload;
