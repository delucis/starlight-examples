import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	// Although `site` in `astro.config.mjs` is set to docs.example.com, we override it to go to example.com
	context.locals.starlightRoute.siteTitleHref = 'https://example.com/';
});
