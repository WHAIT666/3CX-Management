import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/3cx': {
        target: 'https://172.31.0.139',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/3cx/, '')
      }
    }
  }
})
