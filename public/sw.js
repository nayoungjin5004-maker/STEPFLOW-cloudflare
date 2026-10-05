const CACHE='stepflow-offline-v1-4-record-edit-fix-v2';
const SHELL=['/','/index.html','/manifest.webmanifest','/icon-192.png','/icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(url.pathname.startsWith('/api/'))return;

  // 화면 이동은 최신 파일을 먼저 시도하고, 인터넷이 없으면 캐시된 앱을 연다.
  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req).then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put('/index.html',copy)).catch(()=>{});
        return res;
      }).catch(async()=>await caches.match('/index.html')||await caches.match('/'))
    );
    return;
  }

  // 아이콘/manifest 등은 캐시 우선, 없으면 네트워크.
  event.respondWith(
    caches.match(req).then(cached=>cached||fetch(req).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
      return res;
    }))
  );
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('push',e=>{
  let d={title:'STEPFLOW',body:'새 알림이 있습니다.',data:{}};
  try{d={...d,...e.data.json()};}catch(_){try{d.body=e.data.text();}catch(__){}}
  e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'/icon-192.png',badge:'/icon-192.png',data:d.data||{},tag:(d.data&&d.data.kind)||'stepflow-notification'}));
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if('focus'in w)return w.focus();}return clients.openWindow('/');}));});
