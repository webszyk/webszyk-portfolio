import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  css: {
    postcss: 'postcss.config.js'
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
}) 