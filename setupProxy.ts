// src/setupProxy.ts
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(
    '/api/systemstatus',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Alvo deve ser o teu backend local
      changeOrigin: true,
      pathRewrite: {
        '^/api/systemstatus': '/api/systemstatus', // Certifica-te de que o caminho está correto
      },
      onProxyReq: (proxyReq, req, res) => {
        const token = localStorage.getItem('threeCXAccessToken');
        if (token) {
          proxyReq.setHeader('Authorization', `Bearer ${token}`);
        }
      },
    })
  );
};
