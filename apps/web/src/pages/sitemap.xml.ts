import type { APIRoute } from 'astro';

export const prerender = true;

const origin = 'https://peptibloomproject.com';
const routes = ['/', '/about/', '/calculator/', '/library/', '/library/retatrutide/', '/methodology/'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () => new Response(sitemap, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  },
});
