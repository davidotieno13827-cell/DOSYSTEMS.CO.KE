/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    basePath: '/DOSYSTEMS.CO.KE',
    assetPrefix: '/DOSYSTEMS.CO.KE/',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
