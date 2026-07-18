import vue from "@vitejs/plugin-vue";
import path from "path";
import ViteFonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    vuetify(),
    ViteFonts({
      fontsource: {
        families: [
          {
            name: "Caveat",
            weights: [400, 500, 600, 700],
            styles: ["normal"],
            subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
          },
          {
            name: "Kaisei Tokumin",
            weights: [400, 500, 700, 800],
            styles: ["normal"],
            subsets: ["cyrillic", "latin", "latin-ext", "japanese"],
          },
        ],
      },
    }),
  ],
  base: "./",
  build: {
    assetsInlineLimit: 0,
  },
});
