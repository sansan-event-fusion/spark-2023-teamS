/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/buyer/start",
      },
    ];
  },
}

module.exports = nextConfig
