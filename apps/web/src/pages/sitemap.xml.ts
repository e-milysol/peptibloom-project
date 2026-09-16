import type { APIRoute } from 'astro';
import { publishedUrls } from '../i18n/routes';

export const prerender = true;

const origin = 'https://peptibloomproject.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publishedUrls.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>`;

export const GET: APIRoute = () => new Response(sitemap, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  },
});
