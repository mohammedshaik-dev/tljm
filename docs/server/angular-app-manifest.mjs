
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 169928, hash: 'deffd9144798a936ed62e2e1b40cd663b8b15624b57b1b9d05f8d9b3c45255f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162595, hash: '9008daa97a3407c4e402ad95607c051813b73b951f32d1220d0b5a9fcd4eaed1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XQMBQOO6.css': {size: 405586, hash: 'ba51waO4+bE', text: () => import('./assets-chunks/styles-XQMBQOO6_css.mjs').then(m => m.default)}
  },
};
