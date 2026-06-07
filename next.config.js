/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    basePath: process.env.BUILD_FOR_GITHUB_PAGES === 'true' ? '/DOSYSTEMS.CO.KE' : '',
    assetPrefix: process.env.BUILD_FOR_GITHUB_PAGES === 'true' ? '/DOSYSTEMS.CO.KE/' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
