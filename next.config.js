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
  async copyFileToPublicDirectory() {
    return [
      {
        source: './CNAME',
        destination: './out/CNAME',
      },
    ]
  },
}

module.exports = nextConfig