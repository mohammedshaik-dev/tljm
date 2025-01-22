
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tljm/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 172978, hash: 'e3bff0f85b8e08539d755997248af27ebd50d1689953eef1f63377c44c1b0241', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 165651, hash: 'ba248089d371112e800c5429ad5e1e12dd7628edbee91cb5037104b6b459d34d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-V5E5IOQ3.css': {size: 405581, hash: 'OQb5uSfAGKs', text: () => import('./assets-chunks/styles-V5E5IOQ3_css.mjs').then(m => m.default)}
  },
};
