import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thucydides.net",
  integrations: [
    starlight({
      title: "Thucydides",
      social: {
        discord: "https://discord.gg/RvvqwTwE",
        youtube: "https://youtube.com/thucydides",
        "x.com": "https://x.com/thucydides",
        github: "https://github.com/lwtlab",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    svelte(),
    tailwind({ configFile: "./tailwind.config.cjs" }),
  ],
});
