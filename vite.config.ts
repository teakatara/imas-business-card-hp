import vue from "@vitejs/plugin-vue";
import ViteFonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    ViteFonts({
      fontsource: {
        families: [
          {
            name: "Roboto",
            weights: [100, 300, 400, 500, 700, 900],
            styles: ["normal", "italic"],
          },
        ],
      },
    }),
  ],
});
