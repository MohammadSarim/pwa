const cacheName = 'No1 Seller';
const staticAssets = [ "/",
    "index.html",
    "script/main.js",
    "script/register.js",
    "script/submit.js",
    
    "style/submit.css",
    "files/login.html",
    "files/signup.html",
    "files/post.html",
    "style/main.css",
    "style/register.css",
    "style/post.css",
    "style/submit.css",
    
    
    // "./pics/Shopping-Cart-PNG-Image-84606.png",
    // "./pics/wallpaper-1915058.jpg",
    // "./pics/1.jpg",
    // "./pics/2.jpg",
    // "./pics/3.jpg",
    // "./pics/4.jpg",
    // "./pics/5.jpg",
    // "./pages/adds.html",
    // "./pages/ecomerce.html",
    // "./add.js",
    // "./adds.css"
    
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(staticAssets);
            })
    );
})
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}