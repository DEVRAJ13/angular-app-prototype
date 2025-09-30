
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app-prototype/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-app-prototype/home",
    "route": "/angular-app-prototype"
  },
  {
    "renderMode": 2,
    "route": "/angular-app-prototype/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-app-prototype/categories"
  },
  {
    "renderMode": 2,
    "route": "/angular-app-prototype/offers"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24681, hash: '8d59495e01548c48ce1f551cd2dd28caa6b29b83951413d9d6915de66e86e23e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17134, hash: 'dc9e0333a116d32d5f31cd50d4e614d542c466b05d80855d56a047a75dc4ddcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26119, hash: '9ca2b8c94fccaa76f847280279c3d876e37b41191c5c91bd09228f4cfaf02b83', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 26139, hash: 'a43f59a7bb17242e759b7b9f7a494fdc59742ead6ab794ad77dd951cf1d75ae6', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'offers/index.html': {size: 26128, hash: '523c758a9ded8564d7fdb7149a7a8d57238f4516a0112f50c1426a7f287fb911', text: () => import('./assets-chunks/offers_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
