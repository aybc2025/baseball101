import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Baseball 101 — Hebrew/English interactive PWA teaching baseball basics.
// No backend, no API keys, no DB: this is a fully static app, so it deploys
// straight to GitHub Pages. See CLAUDE.md for the reasoning.
export default defineConfig({
  // IMPORTANT: base must match the GitHub repo name for GitHub Pages project
  // sites (https://<user>.github.io/<repo>/). Update this if the repo name
  // changes. See CLAUDE.md "Deployment model".
  base: '/baseball-101/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: false, // we ship a hand-written public/manifest.webmanifest instead
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        // network-first for navigations/data-like requests, cache-first for
        // hashed build assets — matches the caching policy in the spec.
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages-cache' }
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'font', 'image'].includes(request.destination),
            handler: 'CacheFirst',
            options: { cacheName: 'assets-cache' }
          }
        ]
      }
    })
  ]
})
