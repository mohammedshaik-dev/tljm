
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 169928, hash: 'a91910989baa429a30449127113854e148efd67788b7e5d36b5ecd819b838a0a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162595, hash: 'c81c8284d98096221af5261b5085cbf2c1957b02db2ead6c06a495ddb60dda59', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XQMBQOO6.css': {size: 405586, hash: 'ba51waO4+bE', text: () => import('./assets-chunks/styles-XQMBQOO6_css.mjs').then(m => m.default)}
  },
};
