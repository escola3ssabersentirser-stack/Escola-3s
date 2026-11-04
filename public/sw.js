// Service worker simples da Escola 3S: permite instalar a app.
// Só trata da abertura de páginas; tudo o resto vai direto à internet.
const CACHE = "escola3s-v1";
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.add("/")).catch(() => {}));
});
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.mode !== "navigate") return;
  e.respondWith(fetch(req).catch(() => caches.match("/")));
});
