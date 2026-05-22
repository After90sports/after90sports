import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',      // generates static files in /out
  trailingSlash: true,   // Hostinger expects index.html in subdirs
  images: {
    unoptimized: true,   // required for static export (no Next.js image server)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
