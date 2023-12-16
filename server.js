const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // 配置代理
    server.use('/api', createProxyMiddleware({
        target: 'http://your-api-domain.com', // 目标 API 地址
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/', // 重写路径
        },
    }));

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
