import type { APIRoute } from 'astro';

export const prerender = true;

const origin = 'https://peptibloomproject.com';
const routes = [
  '/',
  '/about/',
  '/calculator/',
  '/library/',
  '/methodology/',
  '/research-basics/',
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
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () => new Response(sitemap, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  },
});
