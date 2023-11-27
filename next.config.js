/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'joelwickstrom.com', 'api.sanity.io', 'nextjoelapp.fly.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'joelwickstrom.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
