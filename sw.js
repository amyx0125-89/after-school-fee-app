const CACHE='fee-app-v17.4';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).then(r=>{
    const c=r.clone(); caches.open(CACHE).then(cache=>cache.put(e.request,c)).catch(()=>{}); return r;
  }).catch(()=>caches.match(e.request)));
});
