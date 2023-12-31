import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/minecraftItems": {
        target: "http://localhost:3002",
      },
    },
  },
});
