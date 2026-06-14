import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://ai.in.education',
  i18n: {
    defaultLocale: 'zh-HK',
    locales: ['zh-HK', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
