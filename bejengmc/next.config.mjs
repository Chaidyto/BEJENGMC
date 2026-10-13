import fs from 'fs';
import path from 'path';

// Auto-detect if a custom domain CNAME is present
const hasCname = 
  (fs.existsSync(path.resolve(process.cwd(), 'CNAME')) && fs.readFileSync(path.resolve(process.cwd(), 'CNAME'), 'utf8').trim().length > 0) ||
  (fs.existsSync(path.resolve(process.cwd(), '../CNAME')) && fs.readFileSync(path.resolve(process.cwd(), '../CNAME'), 'utf8').trim().length > 0) ||
  (fs.existsSync(path.resolve(process.cwd(), 'public/CNAME')) && fs.readFileSync(path.resolve(process.cwd(), 'public/CNAME'), 'utf8').trim().length > 0);

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// If no CNAME exists on GitHub Actions, deploy with /BEJENGMC subpath for chaidyto.github.io/BEJENGMC
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions && !hasCname ? '/BEJENGMC' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
