import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	// Get the base path of the current URL
	// e.g. `/product-2/some-page/` returns `/product-2/`
	const currentBase = context.url.pathname.split('/').slice(0, 2).join('/') + '/';

	const { pagination, entry } = context.locals.starlightRoute;

	// Filter our sidebar groups that do not include links to the current product.
	context.locals.starlightRoute.sidebar = context.locals.starlightRoute.sidebar.filter(
		(entry) =>
			entry.type === 'group' &&
			entry.entries.some(
				(subEntry) => subEntry.type === 'link' && subEntry.href.startsWith(currentBase)
			)
	);

	// Remove pagination links across product categories.
	if (pagination.prev && !pagination.prev.href.startsWith(currentBase)) {
		pagination.prev = undefined;
	}
	if (pagination.next && !pagination.next.href.startsWith(currentBase)) {
		pagination.next = undefined;
	}
});
