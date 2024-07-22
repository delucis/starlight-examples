---
title: Contributing
description: Details about how to contribute a new example to the collection.
---

Have you made an example of how to do something with Starlight?
We’d love to see it!

## How to contribute

1. Create an example on StackBlitz. Get started quickly with the [Starlight template](https://astro.new/starlight-basics).

2. [Open a PR](https://github.com/delucis/starlight-examples/) on GitHub adding a new page to the `src/content/docs/examples/` directory.

   <a href="https://github.com/delucis/starlight-examples/new/latest/src/content/docs/examples?filename=example.mdx&value=---%0Atitle%3A%20Short%20title%0Adescription%3A%20Description%20of%20what%20your%20example%20shows%0A---%0A%0Aimport%20StackBlitz%20from%20%27..%2F..%2F..%2Fcomponents%2FStackBlitz.astro%27%3B%0A%0AShort%20introduction%20to%20your%20example.%0A%0A%3CStackBlitz%0A%09projectId%3D%22PROJECT-ID%22%0A%09options%3D%7B%7B%0A%09%09openFile%3A%20%27src%2FPageOverride.astro%2Castro.config.mjs%27%2C%0A%09%7D%7D%0A%2F%3E%0A" target="_blank" noopenerrel="noopener">
     Create a new page using GitHub’s web UI →
   </a>

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
