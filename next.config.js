/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Set basePath and assetPrefix for GitHub Pages (served under /portfolio)
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};
