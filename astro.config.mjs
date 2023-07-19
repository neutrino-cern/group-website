import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // sitemap: true,
  site: 'https://neutrino-test.web.cern.ch/',
  outDir: 'public',
  publicDir: 'static',
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), react(), preact()]
});