---
title: Starlight + MathJax
description: Example of extending Starlight to support MathJax (LaTeX) math syntax
---

This project sets up the `remark-math` and `rehype-mathjax` Markdown extensions to add math syntax support.

## Set-up

### Install dependencies

```sh
npm install remark-math rehype-mathjax
```

### Configure `astro.config.mjs`

Import the Markdown plugins and use them in Astro’s `markdown` config:

```js
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

export default defineConfig({
  // Configure `remark-math` and `rehype-mathjax` plugins:
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },

  integrations: [
    starlight({
      // ...
    }),
  ],
});
```

### Fix styling

By default, Starlight styles all images in Markdown content with `display: block`, forcing MathJax’s inline SVGs onto new lines. Fix this by creating a small CSS file:

```css
/* src/mathjax.css */
mjx-container svg {
  display: inline !important;
}
```

And adding it to your Starlight config in `astro.config.mjs`:

```js
starlight({
  title: 'MathJax Example',
  // Custom CSS to style MathJax equations
  customCss: ['./src/mathjax.css'],
});
```

## Examples

Here are some examples of the syntax in use:

### Inline Syntax

#### Input

```md
Lift($L$) can be determined by Lift Coefficient ($$C_L$$) like the following equation.
```

#### Output

Lift($L$) can be determined by Lift Coefficient ($$C_L$$) like the following equation.

### Block syntax

#### Input

```md
$
 \begin{matrix}
  a & b & c \\
  d & e & f \\
  g & h & i
 \end{matrix}
$
```

#### Output

$
 \begin{matrix}
  a & b & c \\
  d & e & f \\
  g & h & i
 \end{matrix}
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
