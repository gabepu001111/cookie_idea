import { defineConfig } from 'vite'

// IMPORTANT: base is set for GitHub Pages. If you rename the repo, update `base`.
export default defineConfig({
  // Use a relative base so built assets use relative paths (works for GitHub Pages and local previews)
  base: './',
  // Use esbuild's automatic JSX transform so we don't need @vitejs/plugin-react.
  esbuild: {
    // automatic runtime (React 17+) — keeps JSX transform compatible with React 18
    jsx: 'automatic',
    jsxImportSource: 'react'
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'docs', // output to docs/ so GitHub Pages can serve from main/docs
    emptyOutDir: true
  }
})
