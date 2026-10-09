import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const githubPagesFallback = {
  name: 'github-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
  },
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/PreEntregaReact/' : '/',
  plugins: [react(), githubPagesFallback],
}))
