/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return []
  },
  distDir: 'out',
}

module.exports = nextConfig