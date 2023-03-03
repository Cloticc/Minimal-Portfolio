import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Minimal-Portfolio/'
      : '/',
  },
});
