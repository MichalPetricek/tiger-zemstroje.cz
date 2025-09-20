import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// Base URL configuration:
// - For GitHub Pages: '/Tiger-zemstroje.cz/'  
// - For custom domain: '/' or remove base entirely
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true'
const baseUrl = isCustomDomain ? '/' : '/Tiger-zemstroje.cz/'

// https://vite.dev/config/
export default defineConfig({
  base: baseUrl,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
  server: {
    port: 8085,
    host: '0.0.0.0',
    strictPort: false, // Try next available port if 3000 is taken
    open: false, // Don't auto-open browser
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});
