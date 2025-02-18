import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Custom ToC Demo',
			components: {
				PageSidebar: './src/overrides/PageSidebar.astro',
			},
		}),
	],
});
