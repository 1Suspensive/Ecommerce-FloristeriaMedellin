import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: reemplazar por el dominio real de la floristería
  site: "https://www.tufloristeria.co",
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
