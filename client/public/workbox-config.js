module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{html,js,css,png,jpg,svg,eot,ttf,woff,sass,tsx,ts}'],
  swDest: 'service-worker.js',
  clientsClaim: true,
  skipWaiting: true
};