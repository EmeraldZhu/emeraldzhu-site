import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import { remarkLocalImages } from "./src/lib/remark-local-images.mjs"

// https://astro.build/config
export default defineConfig({
  site: "https://emeraldzhu.com",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  markdown: {
    remarkPlugins: [remarkLocalImages],
  },
  image: {
    // Generate responsive sizes (srcset) for images in posts
    layout: "constrained",
    responsiveStyles: true,
  },
})
