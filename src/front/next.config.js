/** @type {import('next').NextConfig} */

module.exports = (phase, {defaultConfig}) =>{
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*"
      },
    ];
  }

  return {rewrites}
}