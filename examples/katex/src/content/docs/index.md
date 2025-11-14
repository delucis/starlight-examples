---
title: Starlight + KaTeX
description: Example of extending Starlight to support KaTeX (LaTeX) math syntax
---

This project sets up the `remark-math` and `rehype-katex` Markdown extensions to add math syntax support.

## Set-up

### Install dependencies

```sh
npm install remark-math rehype-katex katex
```

### Configure `astro.config.mjs`

Import the Markdown plugins and use them in Astro’s `markdown` config:

```js title = "astro.config.mjs"
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKaTeX from 'rehype-katex';

export default defineConfig({
  // Configure `remark-math` and `rehype-katex` plugins:
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKaTeX],
  },

  integrations: [
    starlight({
      // ...
    }),
  ],
});
```

### Fix styling

In order to properly display math content, you have to add KaTeX CSS file to the head of your pages. This can be achieved by declaring the file as a custom CSS file inside your Starlight config in `astro.config.mjs`:

```js title = 'astro.config.mjs'
starlight({
	title: 'KaTeX Example',
  // Add KaTeX CSS.
  customCss: ['katex/dist/katex.css'],
}),
```

## Examples

Here are some examples of the syntax in use:

### Inline Syntax

#### Input

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c= 0$ and they are $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$.
```

#### Output

When $a \ne 0$, there are two solutions to $ax^2 + bx + c= 0$ and they are
$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$.

### Block syntax

#### Input

````markdown
The probability of getting $k$ heads when flipping $n$ coins is:

$
P(E) = {n \choose k} p^k (1-p)^{n-k}
$
````

#### Output

The probability of getting $k$ heads when flipping $n$ coins is:

$
P(E) = {n \choose k} p^k (1-p)^{n-k}
$

### Another example

#### Input

```md
$
A_{m,n} = 
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
 \end{pmatrix}
$
```

#### Output

$
A_{m,n} = 
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
 \end{pmatrix}
$
