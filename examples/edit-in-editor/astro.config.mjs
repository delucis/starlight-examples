import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			components: {
				// Override the default edit link component with a custom one.
				EditLink: './src/components/EditInEditor.astro',
			},
			title: 'My Docs',
		}),
	],
});
