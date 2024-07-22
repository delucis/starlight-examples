---
title: Custom title link
description: Link to any location from your site title
---

import StackBlitz from '../../../components/StackBlitz.astro';

By default, Starlight will use the [`site`](https://docs.astro.build/en/reference/configuration-reference/#site) value in `astro.config.mjs` to generate the link your site title points to, adding a language path to it for multilingual sites.

You can set any arbitrary link by overriding the `SiteTitle` component and setting [`Astro.props.siteTitleHref`](https://starlight.astro.build/reference/overrides/#sitetitlehref) like in this example.

<StackBlitz
	projectId="github-yfj9ey"
	options={{
		openFile: 'astro.config.mjs,src/overrides/SiteTitle.astro',
	}}
/>
