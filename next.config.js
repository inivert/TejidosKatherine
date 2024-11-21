/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
