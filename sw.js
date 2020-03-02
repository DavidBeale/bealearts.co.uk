/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.751cf218ff7b078754c7a9d32e0905e5.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app/actions.js",
    "revision": "5d2b70957320201879362145756fdca6"
  },
  {
    "url": "app/components/languageIcon.js",
    "revision": "971e92ee4edb1f382e45e0d081aab2be"
  },
  {
    "url": "app/components/Project.js",
    "revision": "8513db798ac295e2f443607fc8e06f91"
  },
  {
    "url": "app/components/ProjectList.js",
    "revision": "1d370bb803d8af96baeaa8551fa152af"
  },
  {
    "url": "app/components/ProjectNav.js",
    "revision": "c9dcf3c6c0ceeb674d399deb243eeac6"
  },
  {
    "url": "app/components/Spinner.js",
    "revision": "6b6d09495a801dfb7c50989a10e95f12"
  },
  {
    "url": "app/configureStore.js",
    "revision": "f73aa8c9ef6690848bad6f373a8be41d"
  },
  {
    "url": "app/containers/Projects.js",
    "revision": "1599fe3e896516213bb2df6c3154c2b4"
  },
  {
    "url": "app/containers/Root.js",
    "revision": "620283ad95c79a34ef4083b430aa5368"
  },
  {
    "url": "app/reducers.js",
    "revision": "107271c658cd460fce3dda1c83f60562"
  },
  {
    "url": "app/services/GitHubProjectService.js",
    "revision": "31424baaa2cf39bf95f64ecb892324cb"
  },
  {
    "url": "home.html",
    "revision": "3e30acffa443aa7422348009e298320d"
  },
  {
    "url": "images/avatar.png",
    "revision": "744727ae7e9ec57d161095ebefefcfe1"
  },
  {
    "url": "images/icons/logo-196x196.png",
    "revision": "629e68fef5263a57c4b9d6190fd12bee"
  },
  {
    "url": "images/languages/actionscript.png",
    "revision": "3ac8fd16a139ee99f9c93009824ce63b"
  },
  {
    "url": "images/languages/arduino.png",
    "revision": "8617f9da2c4d5e5c603703223d9e9d89"
  },
  {
    "url": "images/languages/coldfusion.png",
    "revision": "5350d1fc6d75b1a632b89aa1e74be9dd"
  },
  {
    "url": "images/languages/java.png",
    "revision": "97bb6b1581cad28d9ab4bc021c3c6516"
  },
  {
    "url": "images/languages/javascript.png",
    "revision": "2a1e8dfcc6a650b96345cf040b871e9b"
  },
  {
    "url": "images/languages/unknown.png",
    "revision": "01f1a78f813b24ee612c63f6e70800ed"
  },
  {
    "url": "images/linkedin-badge.png",
    "revision": "74b1c69753855de2199dea16cf2ae673"
  },
  {
    "url": "images/logo.png",
    "revision": "a3288f668f15e223082ea94004a1ac3e"
  },
  {
    "url": "index.html",
    "revision": "6d2da426435cbfc3e9eaf0754a660f83"
  },
  {
    "url": "site.js",
    "revision": "b1e2ae3bb1309a3ff206dc1613446064"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
