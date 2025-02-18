import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

// https://astro.build/config
export default defineConfig({
	// Configure `remark-math` and `rehype-mathjax` plugins:
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},

	integrations: [
		starlight({
			title: 'MathJax Example',
			// Custom CSS to style MathJax equations
			customCss: ['./src/mathjax.css'],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
		}),
	],
});
