import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep CRA's output folder so the gh-pages deploy script and .gitignore still work
    outDir: "build",
  },
});
