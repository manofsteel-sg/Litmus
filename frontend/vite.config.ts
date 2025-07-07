import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default frontend port
    proxy: {
      // Proxy API requests to the backend
      '/api': {
        target: 'http://localhost:8080', // Default Spring Boot port
        changeOrigin: true,
        // No rewrite needed if backend paths are already /api/...
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
