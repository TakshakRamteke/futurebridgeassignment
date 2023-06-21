/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'takshakramteke.tech',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
