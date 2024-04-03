import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  base: "/fem-hangman-game",
  plugins: [solid()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
