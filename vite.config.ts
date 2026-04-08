import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/hueynet/', // hueynet 为仓库名
  plugins: [react(), tailwindcss()],
})
