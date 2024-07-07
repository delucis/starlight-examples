---
title: Contributing
description: Details about how to contribute a new example to the collection.
---

Have you made an example of how to do something with Starlight?
We’d love to see it!

## How to contribute

1. Create an example on StackBlitz. Get started quickly with the [Starlight template](https://astro.new/starlight-basics).

2. [Open a PR](https://github.com/delucis/starlight-examples/) on GitHub adding a new page to the `src/content/docs/examples/` directory.

By submitting an example, you accept for it to be published under the terms of the [MIT License](https://github.com/delucis/starlight-examples/blob/latest/LICENSE).

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
- Update the value of the [`openFile`](https://developer.stackblitz.com/platform/api/javascript-sdk-options#openfileoption) option with paths to the files in your example a user will need to refer to.
  The syntax is a string of filepaths, separated by commas.
  Common examples here include:
  - custom components or overrides used in your example
  - `astro.config.mjs` if the example demonstrates specific configuration
  - content files that are using or describing your technique
- If needed, the `<StackBlitz>` component accepts any of the [`EmbedOptions`](https://developer.stackblitz.com/platform/api/javascript-sdk-options#embedoptions) documented in StackBlitz’s SDK docs.
