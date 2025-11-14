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
			customCss: ['katex/dist/katex.css'],
		}),
	],
});
