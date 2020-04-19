module.exports = {
    "globDirectory": "/",
    "globPatterns": [
      "*.{html,json,css,js}",
      "*.{jpg,png,jpeg,svg,ico}"
    ],
    "swSrc": "./sw-base.js",
    "swDest": "/service-worker.js",
    "globIgnores": [
      "../workbox-cli-config.js",
      "../sw-base.js",
      "help/**",
    ]
  };