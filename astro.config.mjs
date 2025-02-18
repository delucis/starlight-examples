import { defineConfig, envField } from 'astro/config';
import starlight from '@astrojs/starlight';

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

// https://astro.build/config
export default defineConfig({
	site: NETLIFY_PREVIEW_SITE || 'https://starlight-examples.netlify.app/',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Starlight Examples',
			description: 'Examples of how to do stuff with Astro Starlight',
			social: {
				github: 'https://github.com/delucis/starlight-examples',
			},
			editLink: {
				baseUrl: 'https://github.com/delucis/starlight-examples/edit/latest/',
			},
			lastUpdated: true,
			customCss: ['./src/styles.css'],
			tableOfContents: false,
			sidebar: [
				{ slug: 'index', label: 'Home' },
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				'contributing',
			],
			credits: true,
			components: {
				Head: './src/overrides/Head.astro',
			},
		}),
	],
	env: {
		schema: {
			/** @see https://docs.netlify.com/configure-builds/environment-variables/#git-metadata */
			HEAD: envField.string({ access: 'public', context: 'client', default: 'latest' }),
		},
	},
});
