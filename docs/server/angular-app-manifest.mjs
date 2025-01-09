
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 169930, hash: 'e502d15349641077f816fdbcd204aa5cce98a815287db1ae4c1c42d6852a300c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162597, hash: '276deff6b1005c516862c50541f92d35db30f50f28eeab670f63b08b16b00531', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XQMBQOO6.css': {size: 405586, hash: 'ba51waO4+bE', text: () => import('./assets-chunks/styles-XQMBQOO6_css.mjs').then(m => m.default)}
  },
};
