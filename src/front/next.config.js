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
    // 로컬에서 동작시킬경우 CORS를 처리할 웹서버가 없기때문에
    // node.js 의 프록시설정으로 backend에 보낼 요청자체를 우회한다.
    if(process.env.NODE_ENV !== 'production '){
      return [
        {
          source: "/api/:path*",                        // api root 요청은 프록시서버로 우회
          destination: "http://localhost:3001/:path*",  // 이쪽으로 전송
        }
      ]
    }
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
