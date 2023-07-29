const { createProxyMiddleware} = require('next-http-proxy-middleware');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) =>{
    /** svg 포맷 이미지를 다루기 위해 webpack 로더 추가*/
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*',
        permanent: false,
      },
    ];
  },
  async middleware() {
    return [
      createProxyMiddleware('/api', {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }),
    ];
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
