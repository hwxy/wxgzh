import proxy from 'koa-proxies';

export let staticProxy = proxy('/static', {
  target: 'http://127.0.0.1:3000',
  changeOrigin: true,
  prependPath: false
})
