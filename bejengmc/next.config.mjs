/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Automatically add /BEJENGMC subpath when deployed to GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions ? '/BEJENGMC' : ''),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions ? '/BEJENGMC/' : undefined),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions ? '/BEJENGMC' : ''),
  },
};

export default nextConfig;
