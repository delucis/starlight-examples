import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { feedLoader } from '@ascorbic/feed-loader';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  releases: defineCollection({
    loader: feedLoader({
      url: 'https://api.cors.lol/?url=https://github.com/withastro/starlight/releases.atom',
    }),
  }),
};
