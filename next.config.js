/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    domains: ['www.themoviedb.org'],
  },
}

module.exports = nextConfig
