/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [{ source: '/gno-api/:path*', destination: '/api/:path*' }];
  },
};

module.exports = nextConfig;
