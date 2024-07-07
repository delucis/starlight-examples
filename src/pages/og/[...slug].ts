import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

const black: [number, number, number] = [0, 0, 0];

export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: 'slug',
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		const hasLongTitle = page.data.title.length > 30;
		const options = {
			description: page.data.description,
			titleLineHeight: 0.1,
			paddingTop: 100,
		};
		if (hasLongTitle) {
			options.description = '';
			options.titleLineHeight = 1;
			options.paddingTop = 50;
		}
		return {
			title: page.data.title,
			description: options.description,
			bgGradient: [black],
			border: { color: black, width: options.paddingTop, side: 'block-start' },
			bgImage: {
				path: './src/pages/og/_bg2.png',
			},
			font: {
				title: {
					families: ['Source Sans Pro'],
					weight: 'SemiBold',
					color: [255, 255, 255],
					size: 72,
					lineHeight: options.titleLineHeight,
				},
				description: {
					families: ['Source Sans Pro'],
					color: [175, 182, 180],
					size: 38,
					lineHeight: 1.4,
				},
			},
			padding: 60,
			fonts: [
				'https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/source-sans-pro@latest/latin-600-normal.woff2',
			],
		};
	},
});
