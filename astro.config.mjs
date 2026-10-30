import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://patisserieambrosia.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  integrations: [sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } } })],
});
