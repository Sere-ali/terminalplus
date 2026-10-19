import jakartaFont from '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url'
import frauncesFont from '@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2?url'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

// CSS imported as a side effect — do NOT add `?url` or `?inline`.
import '../styles.css'
import { InstallBar } from '@/components/install-app'
import siteMetadata from '../metadata.json'

const rootMeta = siteMetadata['/']

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title: rootMeta.title },
      { name: 'description', content: rootMeta.description },
      { name: 'theme-color', content: '#0A4D32' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'TERMINALE+' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ],
    links: [
      { rel: 'preload', as: 'font', type: 'font/woff2', href: jakartaFont, crossOrigin: 'anonymous' },
      { rel: 'preload', as: 'font', type: 'font/woff2', href: frauncesFont, crossOrigin: 'anonymous' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Capte tout de suite l'invitation d'installation du navigateur (elle arrive avant le chargement du site) et active le mode hors-ligne. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.__me=fetch('/api/me',{credentials:'same-origin'}).then(function(r){return r.ok?r.json():null}).catch(function(){return null});" +
              "window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__bip=e;window.dispatchEvent(new Event('tp-bip'))});" +
              "(function(){var cur=null;function go(){var a=document.activeElement;if(a&&/^(INPUT|TEXTAREA)$/.test(a.tagName)&&a.value)return;try{var t=+sessionStorage.getItem('tp_rl')||0;if(Date.now()-t<30000)return;sessionStorage.setItem('tp_rl',String(Date.now()))}catch(e){}location.reload()}" +
              "function check(){fetch('/api/version',{cache:'no-store'}).then(function(r){return r.json()}).then(function(d){if(!d||!d.v)return;if(cur===null)cur=d.v;else if(d.v!==cur)go()}).catch(function(){})}" +
              "check();setInterval(check,45000);document.addEventListener('visibilitychange',function(){if(!document.hidden)check()});" +
              "window.addEventListener('vite:preloadError',function(e){if(e.preventDefault)e.preventDefault();go()})})();" +
              "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}",
          }}
        />
      </head>
      <body>
          {children}
          <InstallBar />
          <Scripts />
      </body>
    </html>
  )
}
