import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), icon()]
});