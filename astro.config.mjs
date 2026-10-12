import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.floristeria-medellin.com",
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/api/"),
      serialize(item) {
        if (
          item.url === "https://www.floristeria-medellin.com/" ||
          item.url === "https://www.floristeria-medellin.com"
        ) {
          item.changefreq = "weekly";
          item.priority = 1.0;
        } else if (item.url.endsWith("/contacto/") || item.url.endsWith("/contacto")) {
          item.changefreq = "monthly";
          item.priority = 0.8;
        } else if (
          item.url.endsWith("/terminos/") ||
          item.url.endsWith("/terminos") ||
          item.url.endsWith("/privacidad/") ||
          item.url.endsWith("/privacidad")
        ) {
          item.changefreq = "yearly";
          item.priority = 0.3;
        } else {
          item.changefreq = "weekly";
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
