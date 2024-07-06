import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'StarBlitz',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: ['./src/styles.css'],
			tableOfContents: false,
			sidebar: [
				{ slug: 'index', label: 'Home' },
				{
					label: 'Demos',
					autogenerate: { directory: 'demos' },
				},
			],
		}),
	],
});
