import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      editLink: {
        baseUrl:
          'https://github.com/withastro/starlight/edit/main/examples/basics/',
      },
      components: {
        Pagination: './src/components/Pagination.astro',
      },
    }),
  ],
});
