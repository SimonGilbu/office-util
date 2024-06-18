/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedForwardedHosts: ['localhost:3000'],
            allowedOrigins: ['tilbud.officeconsult.no']
        },
    },
};

export default nextConfig;