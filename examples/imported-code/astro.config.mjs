import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '?raw docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
    }),
  ],
});
