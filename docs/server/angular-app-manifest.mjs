
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 169928, hash: 'b14b77a7788cb5d520de9448bc7854218f5b673708197f43f73238a091f46040', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162595, hash: 'f1e61dde1ac5e95510eb3757cf479c90c0c43379eb52c32eef98d881c7c7105e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XQMBQOO6.css': {size: 405586, hash: 'ba51waO4+bE', text: () => import('./assets-chunks/styles-XQMBQOO6_css.mjs').then(m => m.default)}
  },
};
