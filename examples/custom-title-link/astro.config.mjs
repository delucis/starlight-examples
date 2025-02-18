import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Site is set, but will not be used for the title link due to the override.
	site: 'https://docs.example.com/',
  integrations: [
    starlight({
      title: 'example.com',
      components: {
        SiteTitle: './src/overrides/SiteTitle.astro',
      },
    }),
  ],
});
