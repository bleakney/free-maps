//define gloabl constants
const APP_PREFIX = 'Budget-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./",
    'index.html',
    'js/index.js',
    'css/styles.css',
    "icons/icon-192x192.png", 
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "icons/icon-128x128.png",
    "icons/icon-144x144.png",
    "icons/icon-152x152.png",
    "icons/icon-192x192.png",
    "icons/icon-384x384.png",
    "icons/icon-512x512.png",
    'manifest.json' 
];

self.addEventListener('install', function (e) {
    //perform install steps
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(FILES_TO_CACHE);
            })
    );

});

//activate and instructions to manage cache
self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
});

//intercept fetch requests
self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
      caches.match(e.request)
        .then(function (request) {
            // if cache is available, respond with cache
            if (request) { 
                console.log('responding with cache : ' + e.request.url)
                return request
            } else {       // if there are no cache, try fetching request
                console.log('file is not cached, fetching : ' + e.request.url)
                return fetch(e.request)
        }
  
        // You can omit if/else for console.log & put one line below like this too.
        // return request || fetch(e.request)
      })
    );
});