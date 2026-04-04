import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/proyecto-tic-q1-2026/",
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    watch: {
      usePolling: true, // Obligatorio para detectar cambios en volúmenes Docker
    },
  },
  plugins: [preact(), tailwindcss()],
});
