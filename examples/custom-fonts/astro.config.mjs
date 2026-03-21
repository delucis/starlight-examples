// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  fonts: [
    // Create a new font family using the Fontsource provider for the
    // "Kalam" font.
    {
      provider: fontProviders.fontsource(),
      name: "Kalam",
      cssVariable: "--font-kalam",
    },
  ],
  integrations: [
    starlight({
      components: {
        // Override the `Head` component with a custom one that will be used to
        // add the font to pages' head.
        Head: "./src/components/Head.astro",
      },
      customCss: [
        // Relative path to a custom CSS file where the custom font will be used.
        "./src/styles/custom.css",
      ],
      title: "My Docs",
    }),
  ],
});
