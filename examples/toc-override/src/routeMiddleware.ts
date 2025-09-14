import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	const pageTitle = context.locals.starlightRoute.entry.data.title;
	if (context.locals.starlightRoute.toc) {
		// Set the text of the first item in the table of contents to the page title
		context.locals.starlightRoute.toc.items[0].text = pageTitle;
	}
});
