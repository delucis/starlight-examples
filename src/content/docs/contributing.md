---
title: Contributing
---

Have you made an example of how to do something with Starlight?
We’d love to see it!

## How to contribute

1. Create an example on StackBlitz. Get started quickly with the [Starlight template](https://astro.new/starlight-basics).

2. [Open a PR](https://github.com/delucis/starlight-examples/) on GitHub adding a new page to the `src/content/docs/demos/` directory.

## Page template

Here’s a template you can use for a new page:

```mdx
---
title: Short title
description: Description of what your example shows
---

import StackBlitz from '../../../components/StackBlitz.astro';

Short introduction to your example.

<StackBlitz
	projectId="PROJECT-ID"
	options={{
		openFile: 'src/PageOverride.astro,astro.config.mjs',
	}}
/>
```

- Replace `PROJECT-ID` with the id of your StackBlitz example. This is often something like `github-reja36`.
- Update the value of the `openFile` option with paths to the key files in your example.
- If needed, the `<StackBlitz>` component accepts any of the [`EmbedOptions`](https://developer.stackblitz.com/platform/api/javascript-sdk-options#embedoptions) documented in StackBlitz’s SDK docs.
