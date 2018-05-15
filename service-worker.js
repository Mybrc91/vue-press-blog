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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d33ccbfc91ac3a872c3050961b4cd457"
  },
  {
    "url": "assets/css/5.styles.53577bdb.css",
    "revision": "7c16f1c7634f6a8658d3ccf5f780c88c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.55d96b2d.js",
    "revision": "694c1b6b9e176dc27840ce64df217376"
  },
  {
    "url": "assets/js/1.3a41dedf.js",
    "revision": "66576a014e55530d74d1bc2ea4aa63b9"
  },
  {
    "url": "assets/js/2.b6f7698c.js",
    "revision": "577b387765e13fd1964aade6ff32c443"
  },
  {
    "url": "assets/js/3.e3250995.js",
    "revision": "afb66e9e5880097c9bda78c1bbc619cf"
  },
  {
    "url": "assets/js/4.4c4cd364.js",
    "revision": "055b8800728c6ebd6d45ef9053adb358"
  },
  {
    "url": "assets/js/app.f5e0e351.js",
    "revision": "b83add2cd9bb7ead793f5c8646aac7db"
  },
  {
    "url": "blog/deploy-gogs-on-raspberrypi.html",
    "revision": "171078aa110752ec7d7c2cf75c3b1e49"
  },
  {
    "url": "blog/Deploy-Vuepress-Blog-On-TravisCI.html",
    "revision": "5fa074402d70a2ccb5696acfa8a55f3c"
  },
  {
    "url": "blog/index.html",
    "revision": "c5c91d981b1d263cbfa1685a95c801f0"
  },
  {
    "url": "blog/wrap-viewpager.html",
    "revision": "2d31e7bebff8ba7c9c23fb54a5961d79"
  },
  {
    "url": "favicon.png",
    "revision": "7a80435df04b3eb691b8f172f09a8473"
  },
  {
    "url": "index.html",
    "revision": "a92cf002d87cd38ab1afd69b45db6815"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
