import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  /*
  base: (process.env.NODE_ENV === 'production')
    ? '/[repositoryName]/' : './',
    */
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "src")
    },
  },
  build: {
    sourcemap: true,
    outDir: "docs",
  },
});
