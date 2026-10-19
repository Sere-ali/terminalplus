// IMPORTANT (Macaly agent): Do not change or remove anything in this file unless you 100% understand it.
// This config wires up Macaly-specific behavior (Visual Edits tagger, allowed hosts, dev build, prerender).
// Modifying it without full understanding can break Macaly app functionality for the user.

import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import errorOverlay from "@visulima/vite-overlay"
import { macalyTagger } from '@macaly/static-tagger'

const config = defineConfig({
  server: {
    allowedHosts: ['.macaly.dev', '.macaly.app', '.macaly-app.com', '.macaly-user-data.dev', '.e2b.app', '.e2b-juliett.dev'],
  },
  ...(process.env.DEV_BUILD && {
    build: {
      target: 'esnext',
      minify: false,
      cssMinify: false,
      sourcemap: false,
      reportCompressedSize: false,
      modulePreload: {
        polyfill: false,
      },
    },
  }),
  plugins: [
    devtools({ injectSource: { enabled: false } }),
    // Macaly Tagger is crucial for proper functionality of Visual Edits in Macaly
    !!process.env.DEV_BUILD && macalyTagger({
      ignorePackages: [
        '@react-three/fiber',
        '@react-three/drei',
        '@react-three/postprocessing',
      ],
    }),
    errorOverlay({
      forwardConsole: true,
      forwardedConsoleMethods: ["error", "warn"],
    }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        // Keep prerender enabled for DEV_BUILD (preview) otherwise preview will not work!
        enabled: !!process.env.DEV_BUILD,
        autoSubfolderIndex: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: false,
        failOnError: true,
      },
    }),
    // IMPORTANT: Do not remove nitro() — required for production build. Do NOT create nitro.config.ts; it breaks both production and preview builds.
    nitro({
      compressPublicAssets: true,
      // Protections du navigateur : pas d'intégration du site dans une autre page, HTTPS obligatoire, scripts de ce site seulement.
      routeRules: {
        '/**': {
          headers: {
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Permissions-Policy': 'camera=(), microphone=(self), geolocation=(), payment=()',
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Content-Security-Policy':
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
              "font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self'; worker-src 'self'; " +
              "manifest-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
          },
        },
      },
    }),
    viteReact(),
  ],
})

export default config
