import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site.mjs';

// https://astro.build
export default defineConfig({
  // Перед деплоем поменяйте SITE_URL в src/config/site.mjs на реальный домен —
  // от него зависят canonical, sitemap.xml и Open Graph.
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
