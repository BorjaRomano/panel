// Service worker mínimo: solo hace el panel instalable como app. No guarda nada en caché,
// así cada actualización publicada en GitHub llega al recargar.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
