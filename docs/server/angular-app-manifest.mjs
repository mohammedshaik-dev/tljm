
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 169928, hash: 'e459c9d53bee56002c537bd4c93c66cdfb964419089ed748e37d034ca48e44f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162595, hash: '814780154bee9ca9fb06f1023957c32f86a716a522799e11d7f49de1c79a2193', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XQMBQOO6.css': {size: 405586, hash: 'ba51waO4+bE', text: () => import('./assets-chunks/styles-XQMBQOO6_css.mjs').then(m => m.default)}
  },
};
