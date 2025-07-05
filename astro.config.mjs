import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jdb-portfolio.vercel.app/',
  integrations: [react(), sitemap()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
})
