import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Starlight Examples',
			description: 'Examples of how to do stuff with Astro Starlight',
			social: {
				github: 'https://github.com/delucis/starlight-examples',
			},
			customCss: ['./src/styles.css'],
			tableOfContents: false,
			sidebar: [
				{ slug: 'index', label: 'Home' },
				{
					label: 'Demos',
					autogenerate: { directory: 'demos' },
				},
				'contributing',
			],
			credits: true,
		}),
	],
});
