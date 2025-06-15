
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // this helps during development
    historyApiFallback: true,
  },
  build: {
    // helps during deployment on Netlify/Vercel
    rollupOptions: {
      input: "/index.html",
    },
  },
});
