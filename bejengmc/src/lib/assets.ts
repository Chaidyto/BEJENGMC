/**
 * Asset helper to properly prefix static assets for GitHub Pages subpaths (/BEJENGMC)
 * while preserving local development and custom domains.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // Detect base path from environment or current window location
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let basePath = envBasePath;

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (pathname.toLowerCase().startsWith("/bejengmc")) {
      basePath = "/BEJENGMC";
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If already prefixed, don't duplicate
  if (basePath && cleanPath.toLowerCase().startsWith(basePath.toLowerCase() + "/")) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
