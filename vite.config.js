import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base is set for GitHub Pages. If you rename the repo, update `base`.
export default defineConfig({
  base: '/cookie_idea/',
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'docs', // output to docs/ so GitHub Pages can serve from main/docs
    emptyOutDir: true
  }
})
