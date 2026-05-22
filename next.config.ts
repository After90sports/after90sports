import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',       // generates static files in /out
  trailingSlash: true,    // Hostinger expects index.html in subdirs
  poweredByHeader: false, // don't expose X-Powered-By header
  images: {
    unoptimized: true,    // required for static export (no Next.js image server)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
    ],
  },
  // Note: headers() has no effect with output:'export'.
  // Security headers are set via public/.htaccess (Apache/Hostinger).
}

export default nextConfig
