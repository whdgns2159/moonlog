/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compiler : {
    styleComponents : true
  },
  async rewrites(){
    if(process.env.NODE_ENV !== 'production'){
      return [
        {
          destination: 'http://localhost:8090/:path',
          source: '/api/:path',
        }
      ]
    }else{
      return []
    }
  },
  reactStrictMode : true
}
