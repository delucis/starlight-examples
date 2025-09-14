# Starlight Examples

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Practical examples of doing stuff in Starlight documentation sites, accompanied by StackBlitz embeds.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build the production site to `./dist/`           |
| `pnpm run preview`         | Preview the build locally, before deploying      |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Testing

You can test that the projects in the `examples/` build successfully by running tests from a terminal:

```sh
pnpm t
```

### Filtering tests

Run specific tests with the `--filter` flag:

```sh
# Only test the CSS icons example
pnpm t -- --filter css-icons

# Filter can be set multiple times to select a subset of tests
pnpm t -- --filter git-authors --filter git-changelog
```

### Skipping tests

Skip specific tests using the `--skip` flag:

```sh
# Test all examples except for the mathjax example:
pnpm t -- --skip mathjax

# Skip can be set multiple times to skip more than one example
pnpm t -- --skip imported-code --skip transclusion
```
