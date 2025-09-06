/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/zshot-fe',
  assetPrefix: '/zshot-fe/',  // Added trailing slash
  trailingSlash: true,        // Added this
  images: {
    unoptimized: true,
  },
  output: 'export'
}

export default nextConfig
