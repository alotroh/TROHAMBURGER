import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site.mjs';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', SITE_URL).href}\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
