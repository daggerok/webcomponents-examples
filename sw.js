importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "edf79410949da0b6c75c5499b117f7ec"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "2eab51fa98ed28b23cf1de2416e32427"
  },
  {
    "url": "build/app.js",
    "revision": "b694eb29d25c88d794cb19668ce4764c"
  },
  {
    "url": "build/app.registry.json",
    "revision": "8cf54d3668f909af8e7cbb5293dcfce8"
  },
  {
    "url": "build/app/app.bimwyhdt.pf.js",
    "revision": "a93e54df7101825d1ffa9f6043e878e5"
  },
  {
    "url": "build/app/app.opuojsxl.js",
    "revision": "c6571648301ba8c4137fa64cdb59abf1"
  },
  {
    "url": "build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "build/app/t89fh3lc.js",
    "revision": "5a501be1ab5d104fdfa01e2cbcf14516"
  },
  {
    "url": "build/app/uyykddxl.css",
    "revision": "3d50550407a0c0d076cccbe0d3ec717b"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "40345ccac060585f5918bd9291f72798"
  },
  {
    "url": "manifest.json",
    "revision": "e1865c97974ecba2194b93889afaf7e2"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
