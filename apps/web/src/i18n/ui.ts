import type { Locale } from './config';

interface UiStrings {
  skipToContent: string;
  brandHome: string;
  primaryNavigation: string;
  footerNavigation: string;
  nav: {
    library: string;
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
}

const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    brandHome: 'Inicio de PeptiBloom',
    primaryNavigation: 'Navegación principal',
    footerNavigation: 'Navegación del pie de página',
    nav: {
      library: 'Biblioteca',
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
  },
  en: {
    skipToContent: 'Skip to content',
    brandHome: 'PeptiBloom home',
    primaryNavigation: 'Primary navigation',
    footerNavigation: 'Footer navigation',
    nav: {
      library: 'Library',
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
  },
  fr: {
    skipToContent: 'Aller au contenu',
    brandHome: 'Accueil PeptiBloom',
    primaryNavigation: 'Navigation principale',
    footerNavigation: 'Navigation du pied de page',
    nav: {
      library: 'Bibliothèque',
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
  },
} as const satisfies Record<Locale, UiStrings>;

export const getUi = (locale: Locale) => ui[locale];
