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
  }
}

module.exports = nextConfig
