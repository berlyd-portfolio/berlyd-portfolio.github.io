!function(){"use strict";const e=1606412936081,t=`cache${e}`,n=["/client/client.397c0342.js","/client/inject_styles.5607aec6.js","/client/index.9e488b5d.js","/client/gallery.e21af23e.js","/client/resume.ba9a0b8c.js"].concat(["/service-worker-index.html","/artwork/hidden_season_scaled.png","/artwork/hidden_season_scaled.webp","/artwork/pelton_gaming_scaled.png","/artwork/pelton_gaming_scaled.webp","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/manifest.json"]),a=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),c=n.hostname===self.location.hostname&&n.port!==self.location.port,o=n.host===self.location.host&&a.has(n.pathname),i="only-if-cached"===t.request.cache&&!o;!s||c||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const a=await n.match(t);if(a)return a;throw e}}(t.request))())}))}();