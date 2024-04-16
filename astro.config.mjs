import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), icon(), sitemap()]
});