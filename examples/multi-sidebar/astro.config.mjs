import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Acme Inc.',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        { label: 'Product 1', autogenerate: { directory: 'product-1' } },
        { label: 'Product 2', autogenerate: { directory: 'product-2' } },
      ],
      components: {
        Sidebar: './src/overrides/Sidebar.astro',
        Pagination: './src/overrides/Pagination.astro',
      },
    }),
  ],
});
