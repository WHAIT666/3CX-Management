// src/setupProxy.ts
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '172.31.0.139',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding to the target
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Bearer ${localStorage.getItem('threeCXAccessToken')}`);
      },
    })
  );
};
