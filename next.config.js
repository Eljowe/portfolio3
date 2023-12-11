/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
};

module.exports = nextConfig;
