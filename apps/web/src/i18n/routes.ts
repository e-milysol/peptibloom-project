import type { Locale } from './config';
import { localizedPath } from './config';

const spanishRoutes = [
  '/', '/about/', '/calculator/', '/library/', '/methodology/', '/research-basics/',
  '/research-basics/que-es-un-aminoacido/',
  '/research-basics/quien-descubrio-aminoacidos-por-que-se-llaman-asi/',
  '/research-basics/viales-materiales-cierres/',
  '/research-basics/que-es-un-coa/',
  '/research-basics/como-leer-un-coa/',
  '/research-basics/coa-100-seguridad/',
  '/research-basics/que-es-espectrometria-de-masas/',
  '/research-basics/como-verificar-coa-laboratorios-europa/',
  '/research-basics/dosis-concentracion-volumen-escala-jeringa/',
  '/research-basics/tipos-escalas-jeringas/',
  '/research-basics/por-que-liofilizado-parece-cake/',
  '/research-basics/liofilizado-colapsado-agrietado-retraido/',
  '/research-basics/liofilizado-siempre-blanco/',
  '/research-basics/que-degrada-peptidos-temperatura-luz-humedad-oxidacion-agitacion/',
  '/research-basics/identidad-pureza-cantidad-no-son-lo-mismo/',
  '/research-basics/hplc-99-que-significa/',
  '/research-basics/hplc-vs-lc-ms/',
  '/research-basics/impurezas-degradacion-agregados-peptidos/',
  '/research-basics/como-se-fabrica-un-peptido/',
  '/research-basics/que-es-spps/',
  '/research-basics/proteger-desproteger-aminoacido/',
  '/research-basics/por-que-peptidos-largos-son-dificiles/',
  '/research-basics/que-significa-lote-lot-batch/',
  '/research-basics/fabricacion-caducidad-retest-fechas/',
  '/research-basics/que-significa-mg-por-vial/',
  '/research-basics/que-significa-research-use-only-ruo/',
  '/research-basics/precision-exactitud-diferencia/',
  '/research-basics/incertidumbre-medicion-que-significa/',
  '/research-basics/limite-deteccion-cuantificacion-lod-loq/',
  '/research-basics/especificacion-criterio-aceptacion-resultado/',
  '/research-basics/que-significa-conservar-2-8-c/',
  '/research-basics/excursion-temperatura-que-significa/',
  '/research-basics/temperatura-ambiente-controlled-room-temperature/',
  '/research-basics/cadena-frio-que-es-como-se-controla/',
  '/research-basics/esteril-vs-libre-endotoxinas/',
  '/research-basics/que-es-bioburden-carga-microbiana/',
  '/research-basics/que-es-endotoxina-bacteriana/',
  '/research-basics/filtro-esterilizante-elimina-endotoxinas/',
  '/research-basics/agua-esteril-vs-bacteriostatica/',
  '/research-basics/que-significa-bacteriostatico/',
  '/research-basics/bacteriostatico-no-significa-esteril-para-siempre/',
  '/research-basics/que-es-alcohol-bencilico-conservante/',
] as const;

/**
 * Generated URL inventory, not a claim that legacy page content has completed
 * localization review. New locale-prefixed routes are added only after their
 * complete page is editorially approved and physically exists.
 */
export const publishedRoutes = {
  es: spanishRoutes,
  en: [],
  fr: [],
} as const satisfies Record<Locale, readonly string[]>;

export const publishedUrls = (Object.entries(publishedRoutes) as [Locale, readonly string[]][])
  .flatMap(([locale, routes]) => routes.map((route) => localizedPath(route, locale)));

export const isRoutePublished = (pathname: string, locale: Locale): boolean =>
  publishedRoutes[locale].some((route) => route === pathname);
