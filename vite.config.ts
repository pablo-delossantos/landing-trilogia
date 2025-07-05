import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { normalizePath } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': normalizePath(fileURLToPath(new URL('./src', import.meta.url))),
    },
  },
  server: {
    port: 3000,
  },
})
