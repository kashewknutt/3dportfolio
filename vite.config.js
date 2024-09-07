import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://portfolio-backend-fi2pkmiff-rajat-disawals-projects.vercel.app/',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
