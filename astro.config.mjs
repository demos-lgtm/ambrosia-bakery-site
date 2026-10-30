import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TEMP: domain not purchased yet. Revert to 'https://patisserieambrosia.com' once it's live and pointed at Netlify.
  site: 'https://cool-salamander-503d9b.netlify.app',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  integrations: [sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } } })],
});
