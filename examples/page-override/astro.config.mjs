import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
    }),
  ],

  vite: {
    resolve: {
      alias: [
        {
          find: /^\..*\/Page\.astro$/,
          replacement: fileURLToPath(
            new URL('./src/PageOverride.astro', import.meta.url)
          ),
        },
      ],
    },
  },
});
