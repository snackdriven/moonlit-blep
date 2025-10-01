import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Auto-detect GitHub Pages project base from env (e.g., user/repo)
const repo = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || ''

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: repo ? `/${repo}/` : '/',
})
