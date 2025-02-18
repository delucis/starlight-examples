---
title: Contributing
description: Details about how to contribute a new example to the collection.
---

Have you made an example of how to do something with Starlight?
We’d love to see it!

## How to contribute

1. Create an example on StackBlitz. Get started quickly with the [Starlight template](https://astro.new/starlight-basics).

2. Download your example and add it to this repo in the `examples/` directory.

3. Add a new page to the `src/content/docs/examples/` directory using the [page template](#page-template) below.

4. Open a PR adding your changes on GitHub.

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
	example="EXAMPLE-DIR"
	title="EXAMPLE TITLE"
	description="EXAMPLE DESCRIPTION"
	openFile="src/PageOverride.astro,astro.config.mjs"
/>
```

- Update the `title` and `description` props and frontmatter to briefly describe your example.
- Replace `EXAMPLE-DIR` with the name of the directory you created in the `examples/` directory.
- Update the value of the [`openFile`](https://developer.stackblitz.com/platform/api/javascript-sdk-options#openfileoption) option with paths to the files in your example a user will need to refer to.
  The syntax is a string of filepaths, separated by commas.
  Common examples here include:
  - custom components or overrides used in your example
  - `astro.config.mjs` if the example demonstrates specific configuration
  - content files that are using or describing your technique
- If needed, the `<StackBlitz>` component also accepts the following boolean attributes:
  - `clickToLoad`: defer loading the project until a user interacts with the embed
  - `showSidebar`: expand the IDE sidebar on load (only works on larger screens)
