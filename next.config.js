/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.sanity.io',
            'joelwickstrom.com',
            'api.sanity.io',
            'nextjoelapp.fly.dev',
            media_url.replace(/^[^.]*/, 'https://cdn.sanity.io'),
        ]
    }
}

module.exports = nextConfig
