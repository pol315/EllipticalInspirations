const CACHE_NAME = 'elliptical-cards-cache-v1';
const urlsToCache = [
    '/',
	'/index.html',
	'/logo.png',
    '/styles.css',
	'/script.js',
	'/Sortable.js',
    '/manifest.json',
    '/icon-192x192.png',
	'/icon-512x512.png',
	'/cards/card1.png',
	'/cards/card2.png',
	'/cards/card3.png',
	'/cards/card4.png',
	'/cards/card5.png',
	'/cards/card6.png',
	'/cards/card7.png',
	'/cards/card8.png',
	'/cards/card9.png',
	'/cards/card10.png',
	'/cards/card11.png',
	'/cards/card12.png',
	'/cards/card13.png',
	'/cards/card14.png',
	'/cards/card15.png',
	'/cards/card16.png',
	'/cards/card17.png',
	'/cards/card18.png',
	'/cards/card19.png',
	'/cards/card20.png',
	'/cards/card21.png',
	'/cards/card22.png',
	'/cards/card23.png',
	'/cards/card24.png',
	'/cards/card25.png',
	'/cards/card26.png',
	'/cards/card27.png',
	'/cards/card28.png',
	'/cards/card29.png',
	'/cards/card30.png',
	'/cards/card31.png',
	'/cards/card32.png',
	'/cards/card33.png',
	'/cards/card34.png',
	'/cards/card35.png',
	'/cards/card36.png',
	'/cards/card37.png',
	'/cards/card38.png',
	'/cards/card39.png',
	'/cards/card40.png',
	'/cards/card41.png',
	'/cards/card42.png',
	'/cards/card43.png',
	'/cards/card44.png',
	'/cards/card45.png',
	'/cards/card46.png',
	'/cards/card47.png',
	'/cards/card48.png',
	'/cards/card49.png',
	'/cards/card50.png',
	'/shuffle.mp3',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
