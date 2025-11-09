import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math'
import rehypeKaTeX from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
	// Configure `remark-math` and `rehype-katex` plugins:
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKaTeX],
	},

	integrations: [
		starlight({
			title: 'KaTeX Example',
      		// Add KaTeX css.
      		head: [
        		{
          			tag: 'link',
          			attrs: {
						rel: 'stylesheet',
						'href': 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.css',
						integrity: 'sha512-1jSEPj+0P3loEV9Bqx/6P3V6MXp4SGDSuLZwvwOECspSHwdHhQvGd27PJba8AVpwUldurvLTgzN+oX37uNiwOw==',
						crossorigin: 'anonymous'
          			},
        		},
      		],
		}),
	],
});
