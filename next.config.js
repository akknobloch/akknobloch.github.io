/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/akknobloch.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/akknobloch.github.io' : '',
}

module.exports = nextConfig



