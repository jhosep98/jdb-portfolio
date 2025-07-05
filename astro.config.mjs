import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jdb-portfolio.vercel.app/',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
