/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['upload.wikimedia.org', 'i.pravatar.cc'],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/addMessage",
        destination: "http://localhost:3000/api/addMessage",
      },
    ];
  },
}

module.exports = nextConfig
