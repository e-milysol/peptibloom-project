import type { Locale } from './config';

interface UiStrings {
  skipToContent: string;
  brandHome: string;
  primaryNavigation: string;
  footerNavigation: string;
  nav: {
    library: string;
    compounds: string;
    researchBasics: string;
    calculator: string;
    methodology: string;
    about: string;
  };
  footer: {
    statement: string;
    scientificLibrary: string;
    concentrationCalculator: string;
    methodology: string;
    about: string;
    initiative: string;
    principles: string;
  };
  siteDescription: string;
  socialImageAlt: string;
  researchGraph: {
    eyebrow: string;
    heading: string;
    relationLabels: Record<'PREREQUISITE' | 'DEEPER' | 'INTERPRETATION' | 'RELATED', string>;
  };
  compounds: {
    eyebrow: string;
    title: string;
    introduction: string;
    emptyTitle: string;
    emptyDescription: string;
    pendingTitle: string;
    pendingDescription: string;
    openLabel: string;
    backLabel: string;
    provenanceLabel: string;
    statusLabels: Record<
      | 'UNAVAILABLE'
      | 'PENDING_EVIDENCE'
      | 'PENDING_SCIENTIFIC_CONTENT'
      | 'READY_FOR_REVIEW'
      | 'APPROVED_FOR_WEB'
      | 'NOT_PUBLICATION_READY',
      string
    >;
  };
}

const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    brandHome: 'Inicio de PeptiBloom',
    primaryNavigation: 'Navegación principal',
    footerNavigation: 'Navegación del pie de página',
    nav: {
      library: 'Biblioteca',
      compounds: 'Compuestos',
      researchBasics: 'Conceptos básicos de investigación',
      calculator: 'Calculadora',
      methodology: 'Metodología',
      about: 'Acerca de',
    },
    footer: {
      statement: 'Una biblioteca de investigación científica basada en evidencia, transparencia y trazabilidad.',
      scientificLibrary: 'Biblioteca científica',
      concentrationCalculator: 'Calculadora de concentración',
      methodology: 'Metodología',
      about: 'Acerca de y transparencia',
      initiative: 'La Biblioteca Científica es una iniciativa de PeptiBloom.',
      principles: 'Evidencia · Transparencia · Trazabilidad',
    },
    siteDescription: 'Una biblioteca de investigación científica basada en evidencia sobre péptidos y compuestos de investigación.',
    socialImageAlt: 'PeptiBloom — Ciencia, longevidad y bienestar',
    researchGraph: {
      eyebrow: 'Ruta de aprendizaje',
      heading: 'Continúa investigando',
      relationLabels: {
        PREREQUISITE: 'Concepto previo',
        DEEPER: 'Profundiza',
        INTERPRETATION: 'Interpreta la evidencia',
        RELATED: 'Concepto relacionado',
      },
    },
    compounds: {
      eyebrow: 'Biblioteca científica',
      title: 'Compuestos',
      introduction: 'Entradas disponibles únicamente cuando su contenido científico y procedencia han sido aprobados para la Web.',
      emptyTitle: 'No hay entradas disponibles',
      emptyDescription: 'Las entradas pendientes no se publican hasta completar las revisiones requeridas.',
      pendingTitle: 'Entrada pendiente',
      pendingDescription: 'Esta entrada no está disponible como publicación científica aprobada.',
      openLabel: 'Abrir entrada',
      backLabel: 'Volver a compuestos',
      provenanceLabel: 'Procedencia',
      statusLabels: {
        UNAVAILABLE: 'No disponible',
        PENDING_EVIDENCE: 'Evidencia pendiente',
        PENDING_SCIENTIFIC_CONTENT: 'Contenido científico pendiente',
        READY_FOR_REVIEW: 'Listo para revisión',
        APPROVED_FOR_WEB: 'Aprobado para la Web',
        NOT_PUBLICATION_READY: 'No listo para publicación',
      },
    },
  },
  en: {
    skipToContent: 'Skip to content',
    brandHome: 'PeptiBloom home',
    primaryNavigation: 'Primary navigation',
    footerNavigation: 'Footer navigation',
    nav: {
      library: 'Library',
      compounds: 'Compounds',
      researchBasics: 'Research Basics',
      calculator: 'Calculator',
      methodology: 'Methodology',
      about: 'About',
    },
    footer: {
      statement: 'A scientific research library built around evidence, transparency and traceability.',
      scientificLibrary: 'Scientific Library',
      concentrationCalculator: 'Concentration Calculator',
      methodology: 'Methodology',
      about: 'About & transparency',
      initiative: 'The Scientific Library is a PeptiBloom initiative.',
      principles: 'Evidence · Transparency · Traceability',
    },
    siteDescription: 'An evidence-first scientific research library for peptides and research compounds.',
    socialImageAlt: 'PeptiBloom — Science, Longevity, Wellness',
    researchGraph: {
      eyebrow: 'Learning path',
      heading: 'Continue exploring',
      relationLabels: {
        PREREQUISITE: 'Prerequisite',
        DEEPER: 'Go deeper',
        INTERPRETATION: 'Interpret the evidence',
        RELATED: 'Related concept',
      },
    },
    compounds: {
      eyebrow: 'Scientific library',
      title: 'Compounds',
      introduction: 'Entries are available only when their scientific content and provenance have been approved for the Web.',
      emptyTitle: 'No entries available',
      emptyDescription: 'Pending entries are not published until the required reviews are complete.',
      pendingTitle: 'Entry pending',
      pendingDescription: 'This entry is unavailable as an approved scientific publication.',
      openLabel: 'Open entry',
      backLabel: 'Back to compounds',
      provenanceLabel: 'Provenance',
      statusLabels: {
        UNAVAILABLE: 'Unavailable',
        PENDING_EVIDENCE: 'Pending evidence',
        PENDING_SCIENTIFIC_CONTENT: 'Pending scientific content',
        READY_FOR_REVIEW: 'Ready for review',
        APPROVED_FOR_WEB: 'Approved for Web',
        NOT_PUBLICATION_READY: 'Not publication-ready',
      },
    },
  },
  fr: {
    skipToContent: 'Aller au contenu',
    brandHome: 'Accueil PeptiBloom',
    primaryNavigation: 'Navigation principale',
    footerNavigation: 'Navigation du pied de page',
    nav: {
      library: 'Bibliothèque',
      compounds: 'Composés',
      researchBasics: 'Notions de recherche',
      calculator: 'Calculatrice',
      methodology: 'Méthodologie',
      about: 'À propos',
    },
    footer: {
      statement: 'Une bibliothèque de recherche scientifique fondée sur les preuves, la transparence et la traçabilité.',
      scientificLibrary: 'Bibliothèque scientifique',
      concentrationCalculator: 'Calculatrice de concentration',
      methodology: 'Méthodologie',
      about: 'À propos et transparence',
      initiative: 'La Bibliothèque scientifique est une initiative de PeptiBloom.',
      principles: 'Preuves · Transparence · Traçabilité',
    },
    siteDescription: 'Une bibliothèque de recherche scientifique fondée sur les preuves concernant les peptides et les composés de recherche.',
    socialImageAlt: 'PeptiBloom — Science, longévité et bien-être',
    researchGraph: {
      eyebrow: 'Parcours pédagogique',
      heading: 'Poursuivre l’exploration',
      relationLabels: {
        PREREQUISITE: 'Notion préalable',
        DEEPER: 'Approfondir',
        INTERPRETATION: 'Interpréter les preuves',
        RELATED: 'Notion associée',
      },
    },
    compounds: {
      eyebrow: 'Bibliothèque scientifique',
      title: 'Composés',
      introduction: 'Les entrées ne sont disponibles que lorsque leur contenu scientifique et leur provenance ont été approuvés pour le Web.',
      emptyTitle: 'Aucune entrée disponible',
      emptyDescription: 'Les entrées en attente ne sont pas publiées avant la fin des examens requis.',
      pendingTitle: 'Entrée en attente',
      pendingDescription: 'Cette entrée est indisponible en tant que publication scientifique approuvée.',
      openLabel: 'Ouvrir l’entrée',
      backLabel: 'Retour aux composés',
      provenanceLabel: 'Provenance',
      statusLabels: {
        UNAVAILABLE: 'Indisponible',
        PENDING_EVIDENCE: 'Preuves en attente',
        PENDING_SCIENTIFIC_CONTENT: 'Contenu scientifique en attente',
        READY_FOR_REVIEW: 'Prêt pour examen',
        APPROVED_FOR_WEB: 'Approuvé pour le Web',
        NOT_PUBLICATION_READY: 'Non prêt pour publication',
      },
    },
  },
} as const satisfies Record<Locale, UiStrings>;

export const getUi = (locale: Locale) => ui[locale];
