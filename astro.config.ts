import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import swup from '@swup/astro'
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import UnoCSS from 'unocss/astro'

import { themeConfig } from './src/.config'

// https://astro.build/config
export default defineConfig({
  site: themeConfig.site.website,
  prefetch: true,
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    mdx(),
    robotsTxt(),
    sitemap(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      cache: true,
      preload: true,
      accessibility: true,
      smoothScrolling: true,
      updateHead: true,
      updateBodyClass: true,
    }),
    react(),
  ],
  output: 'hybrid',
  adapter: vercel(),
})
