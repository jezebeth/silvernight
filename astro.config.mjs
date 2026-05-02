// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jezebeth.github.io',
  base: '/silvernight',
  integrations: [sitemap()],
});
