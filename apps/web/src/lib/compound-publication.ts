import { isLocale, type Locale } from '../i18n/config';

/**
 * Web-owned intake boundary for an already reviewed public representation.
 * This is deliberately not an Evidence schema or a scientific source of truth.
 */
export const COMPOUND_PUBLICATION_SCHEMA_VERSION = 'pb.web.compound-publication.v1' as const;

export const compoundContentLifecycleStates = [
  'DRAFT',
  'EVIDENCE_REVIEWED',
  'CONTENT_APPROVED',
  'WEB_READY',
] as const;

export const compoundPresentationStates = [
  'UNAVAILABLE',
  'PENDING_EVIDENCE',
  'PENDING_SCIENTIFIC_CONTENT',
  'READY_FOR_REVIEW',
  'APPROVED_FOR_WEB',
  'NOT_PUBLICATION_READY',
] as const;

export type CompoundContentLifecycleState = (typeof compoundContentLifecycleStates)[number];
export type CompoundPresentationState = (typeof compoundPresentationStates)[number];
export type CompoundSectionKind = 'scientific-summary' | 'evidence' | 'references' | 'related-research';

export interface CompoundPublicationAuthorization {
  status: 'GRANTED';
  authorizationId: string;
  grantedBy: string;
  grantedAt: string;
}

export interface CompoundProvenanceReference {
  id: string;
  kind: 'EVIDENCE_REPRESENTATION' | 'SCIENTIFIC_CONTENT_REVIEW' | 'SOURCE_REGISTER' | 'PUBLICATION_AUTHORIZATION';
  uri: string;
}

export interface CompoundContentSection {
  kind: CompoundSectionKind;
  heading: string;
  body: string;
  sourceIds: readonly string[];
}

export interface CompoundPublicationPayload {
  schemaVersion: typeof COMPOUND_PUBLICATION_SCHEMA_VERSION;
  compoundId: string;
  locale: Locale;
  lifecycleState: CompoundContentLifecycleState;
  identity: {
    displayName: string;
  };
  sections: readonly CompoundContentSection[];
  provenance: readonly CompoundProvenanceReference[];
  publicationAuthorization?: CompoundPublicationAuthorization;
  /** Any payload carrying this marker is rejected by the production adapter. */
  syntheticFixture?: true;
}

export type CompoundPublicationBlockCode =
  | 'MALFORMED_PAYLOAD'
  | 'UNSUPPORTED_SCHEMA_VERSION'
  | 'UNKNOWN_PUBLICATION_STATE'
  | 'LOCALE_MISMATCH'
  | 'MISSING_EVIDENCE_REPRESENTATION'
  | 'MISSING_SCIENTIFIC_CONTENT'
  | 'MISSING_PROVENANCE'
  | 'CONTENT_NOT_APPROVED'
  | 'WEB_REVIEW_PENDING'
  | 'PUBLICATION_NOT_AUTHORIZED'
  | 'TRUSTED_AUTHORITY_UNAVAILABLE'
  | 'SYNTHETIC_FIXTURE_REJECTED';

export interface CompoundPublicationBlocked {
  ok: false;
  presentationState: Exclude<CompoundPresentationState, 'APPROVED_FOR_WEB'>;
  code: CompoundPublicationBlockCode;
}

export interface CompoundPublicationReady {
  ok: true;
  presentationState: 'APPROVED_FOR_WEB';
  payload: CompoundPublicationPayload;
}

export type CompoundPublicationResult = CompoundPublicationBlocked | CompoundPublicationReady;

const exactKeys = (value: Record<string, unknown>, allowed: readonly string[]): boolean =>
  Object.keys(value).every((key) => allowed.includes(key));

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isIsoDate = (value: unknown): value is string =>
  isNonEmptyString(value) && !Number.isNaN(Date.parse(value));

const hasState = (value: unknown): value is CompoundContentLifecycleState =>
  typeof value === 'string'
  && compoundContentLifecycleStates.some((state) => state === value);

const isIdentity = (value: unknown): value is CompoundPublicationPayload['identity'] =>
  isRecord(value)
  && exactKeys(value, ['displayName'])
  && isNonEmptyString(value.displayName);

const sectionKinds: readonly CompoundSectionKind[] = [
  'scientific-summary',
  'evidence',
  'references',
  'related-research',
];

const isSection = (value: unknown): value is CompoundContentSection =>
  isRecord(value)
  && exactKeys(value, ['kind', 'heading', 'body', 'sourceIds'])
  && typeof value.kind === 'string'
  && sectionKinds.some((kind) => kind === value.kind)
  && isNonEmptyString(value.heading)
  && isNonEmptyString(value.body)
  && Array.isArray(value.sourceIds)
  && value.sourceIds.length > 0
  && value.sourceIds.every(isNonEmptyString);

const provenanceKinds: readonly CompoundProvenanceReference['kind'][] = [
  'EVIDENCE_REPRESENTATION',
  'SCIENTIFIC_CONTENT_REVIEW',
  'SOURCE_REGISTER',
  'PUBLICATION_AUTHORIZATION',
];

const isProvenanceReference = (value: unknown): value is CompoundProvenanceReference =>
  isRecord(value)
  && exactKeys(value, ['id', 'kind', 'uri'])
  && isNonEmptyString(value.id)
  && typeof value.kind === 'string'
  && provenanceKinds.some((kind) => kind === value.kind)
  && isNonEmptyString(value.uri);

const isAuthorization = (value: unknown): value is CompoundPublicationAuthorization =>
  isRecord(value)
  && exactKeys(value, ['status', 'authorizationId', 'grantedBy', 'grantedAt'])
  && value.status === 'GRANTED'
  && isNonEmptyString(value.authorizationId)
  && isNonEmptyString(value.grantedBy)
  && isIsoDate(value.grantedAt);

const blocked = (
  presentationState: CompoundPublicationBlocked['presentationState'],
  code: CompoundPublicationBlockCode,
): CompoundPublicationBlocked => ({ ok: false, presentationState, code });

const parseShape = (input: unknown): CompoundPublicationPayload | null => {
  if (!isRecord(input) || !exactKeys(input, [
    'schemaVersion',
    'compoundId',
    'locale',
    'lifecycleState',
    'identity',
    'sections',
    'provenance',
    'publicationAuthorization',
    'syntheticFixture',
  ])) return null;

  if (
    !isNonEmptyString(input.compoundId)
    || typeof input.locale !== 'string'
    || !isLocale(input.locale)
    || !hasState(input.lifecycleState)
    || !isIdentity(input.identity)
    || !Array.isArray(input.sections)
    || !input.sections.every(isSection)
    || !Array.isArray(input.provenance)
    || !input.provenance.every(isProvenanceReference)
    || (input.publicationAuthorization !== undefined && !isAuthorization(input.publicationAuthorization))
    || (input.syntheticFixture !== undefined && input.syntheticFixture !== true)
  ) return null;

  return input as unknown as CompoundPublicationPayload;
};

/**
 * Adapts a reviewed representation for Web without inferring missing content.
 * Every failure is a controlled non-renderable state; locale fallback is absent by design.
 */
export const adaptCompoundPublication = (
  input: unknown,
  requestedLocale: Locale,
): CompoundPublicationResult => {
  if (isRecord(input) && input.syntheticFixture === true) {
    return blocked('NOT_PUBLICATION_READY', 'SYNTHETIC_FIXTURE_REJECTED');
  }
  if (!isRecord(input)) return blocked('UNAVAILABLE', 'MALFORMED_PAYLOAD');
  if (input.schemaVersion !== COMPOUND_PUBLICATION_SCHEMA_VERSION) {
    return blocked('UNAVAILABLE', 'UNSUPPORTED_SCHEMA_VERSION');
  }
  if (!hasState(input.lifecycleState)) {
    return blocked('NOT_PUBLICATION_READY', 'UNKNOWN_PUBLICATION_STATE');
  }

  const payload = parseShape(input);
  if (!payload) return blocked('UNAVAILABLE', 'MALFORMED_PAYLOAD');
  if (payload.locale !== requestedLocale) return blocked('UNAVAILABLE', 'LOCALE_MISMATCH');

  const provenanceIds = new Set(payload.provenance.map(({ id }) => id));
  if (provenanceIds.size !== payload.provenance.length) {
    return blocked('NOT_PUBLICATION_READY', 'MALFORMED_PAYLOAD');
  }
  const evidence = payload.provenance.some(({ kind }) => kind === 'EVIDENCE_REPRESENTATION');
  if (!evidence) return blocked('PENDING_EVIDENCE', 'MISSING_EVIDENCE_REPRESENTATION');
  if (payload.sections.length === 0) {
    return blocked('PENDING_SCIENTIFIC_CONTENT', 'MISSING_SCIENTIFIC_CONTENT');
  }
  if (!payload.sections.some(({ kind }) => kind === 'scientific-summary')) {
    return blocked('PENDING_SCIENTIFIC_CONTENT', 'MISSING_SCIENTIFIC_CONTENT');
  }
  const scientificSourceIds = new Set(payload.provenance
    .filter(({ kind }) => kind === 'EVIDENCE_REPRESENTATION' || kind === 'SOURCE_REGISTER')
    .map(({ id }) => id));
  if (payload.sections.some(({ sourceIds }) => sourceIds.some((sourceId) =>
    !provenanceIds.has(sourceId) || !scientificSourceIds.has(sourceId)))) {
    return blocked('NOT_PUBLICATION_READY', 'MISSING_PROVENANCE');
  }
  if (payload.lifecycleState === 'DRAFT' || payload.lifecycleState === 'EVIDENCE_REVIEWED') {
    return blocked('PENDING_SCIENTIFIC_CONTENT', 'CONTENT_NOT_APPROVED');
  }
  const contentReview = payload.provenance.some(({ kind }) => kind === 'SCIENTIFIC_CONTENT_REVIEW');
  if (!contentReview) return blocked('NOT_PUBLICATION_READY', 'MISSING_PROVENANCE');
  if (payload.lifecycleState === 'CONTENT_APPROVED') {
    return blocked('READY_FOR_REVIEW', 'WEB_REVIEW_PENDING');
  }
  if (!payload.publicationAuthorization) {
    return blocked('NOT_PUBLICATION_READY', 'PUBLICATION_NOT_AUTHORIZED');
  }

  const authorizationProvenance = payload.provenance.some(({ id, kind }) =>
    kind === 'PUBLICATION_AUTHORIZATION'
    && id === payload.publicationAuthorization?.authorizationId);
  if (!authorizationProvenance) return blocked('NOT_PUBLICATION_READY', 'MISSING_PROVENANCE');

  // Shape, linkage, URI and GRANTED fields are caller-controlled assertions,
  // not proof of review or publication authority. No trusted authority provider
  // is integrated in WEB M2 yet. Keep this Web-owned production boundary closed
  // until an approved integration verifies provenance and authorization against
  // the exact content, compound identity and locale. Never accept a payload flag
  // or caller-supplied verifier as a substitute for that integration.
  return blocked('NOT_PUBLICATION_READY', 'TRUSTED_AUTHORITY_UNAVAILABLE');
};

export interface SyntheticCompoundPreview {
  testOnly: true;
  publicationEligible: false;
  presentationState: 'READY_FOR_REVIEW';
  payload: CompoundPublicationPayload & { syntheticFixture: true };
}

/** Explicit test-only seam proving that neutral fixtures can traverse the renderer contract. */
export const adaptSyntheticCompoundForTest = (input: unknown): SyntheticCompoundPreview | null => {
  const payload = parseShape(input);
  if (!payload || payload.syntheticFixture !== true || payload.lifecycleState !== 'WEB_READY') return null;
  return {
    testOnly: true,
    publicationEligible: false,
    presentationState: 'READY_FOR_REVIEW',
    payload: payload as CompoundPublicationPayload & { syntheticFixture: true },
  };
};
