import type { Locale } from '../i18n/config';
import { localizedPath } from '../i18n/config';
import { isRoutePublished } from '../i18n/routes';
import {
  articleNodes,
  articleRelationships,
  localizedArticles,
  recognizedHubArticleIds,
  type ArticleNode,
  type ArticleRelationship,
  type LocalizedArticle,
  type RelationType,
} from '../data/research-basics';

export interface ResolvedArticle extends LocalizedArticle {
  url: string;
}

export interface ResearchRecommendation {
  relationship: ArticleRelationship;
  article: ResolvedArticle;
}

const articleNodeById = new Map(articleNodes.map((article) => [article.articleId, article]));

export const resolveLocalizedArticle = (articleId: string, locale: Locale): ResolvedArticle | null => {
  const localizedArticle = localizedArticles.find((article) =>
    article.articleId === articleId
    && article.locale === locale
    && article.publicationStatus === 'published');

  if (!localizedArticle) return null;

  const unprefixedPath = `/research-basics/${localizedArticle.slug}/`;
  if (!isRoutePublished(unprefixedPath, locale)) return null;

  return { ...localizedArticle, url: localizedPath(unprefixedPath, locale) };
};

export const resolveArticleFromPathname = (pathname: string, locale: Locale): ResolvedArticle | null => {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return localizedArticles
    .filter((article) => article.locale === locale && article.publicationStatus === 'published')
    .map((article) => resolveLocalizedArticle(article.articleId, locale))
    .find((article) => article?.url === normalizedPath) ?? null;
};

const defaultRelationOrder: readonly RelationType[] = ['PREREQUISITE', 'DEEPER', 'INTERPRETATION', 'RELATED'];
const foundationRelationOrder: readonly RelationType[] = ['DEEPER', 'INTERPRETATION', 'PREREQUISITE', 'RELATED'];

const relationOrderFor = (source: ArticleNode, relationships: readonly ArticleRelationship[]) => {
  const hasStrongPrerequisite = relationships.some((relationship) =>
    relationship.relationType === 'PREREQUISITE' && relationship.priority === 'P1');

  return source.conceptualDepth === 'FOUNDATION' && !hasStrongPrerequisite
    ? foundationRelationOrder
    : defaultRelationOrder;
};

export const selectResearchRecommendations = (
  sourceArticleId: string,
  locale: Locale,
): ResearchRecommendation[] => {
  const source = articleNodeById.get(sourceArticleId);
  if (!source) return [];

  const eligible = articleRelationships
    .filter((relationship) => relationship.sourceArticleId === sourceArticleId)
    .map((relationship) => ({
      relationship,
      article: resolveLocalizedArticle(relationship.targetArticleId, locale),
    }))
    .filter((candidate): candidate is ResearchRecommendation =>
      candidate.article !== null && candidate.article.articleId !== sourceArticleId);

  if (eligible.length === 0) return [];

  const limit = recognizedHubArticleIds.has(sourceArticleId) ? 4 : 3;
  const order = relationOrderFor(source, eligible.map(({ relationship }) => relationship));
  const selected: ResearchRecommendation[] = [];

  for (const priority of ['P1', 'P2'] as const) {
    for (const relationType of order) {
      const candidate = eligible.find(({ relationship }) =>
        relationship.priority === priority
        && relationship.relationType === relationType
        && !selected.some(({ article }) => article.articleId === relationship.targetArticleId));
      if (candidate) selected.push(candidate);
      if (selected.length === limit) return selected;
    }
  }

  for (const priority of ['P1', 'P2', 'P3'] as const) {
    for (const candidate of eligible) {
      if (candidate.relationship.priority !== priority) continue;
      if (selected.some(({ article }) => article.articleId === candidate.article.articleId)) continue;
      selected.push(candidate);
      if (selected.length === limit) return selected;
    }
  }

  return selected;
};
