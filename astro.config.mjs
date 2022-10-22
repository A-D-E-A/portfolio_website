import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from "@astrojs/sitemap";

//
// https://astro.build/config
//    output: 'server',
//    adapter: netlify()
//});

export default defineConfig({
  site: "https://adam-ambrosino.tk",
  integrations: [sitemap()]
});