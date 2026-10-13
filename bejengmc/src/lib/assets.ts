/**
 * Dynamic asset path helper that works seamlessly on:
 * 1. GitHub Pages subpath (https://chaidyto.github.io/BEJENGMC/)
 * 2. Custom domain (https://www.bejengmc.store/)
 * 3. Localhost (http://localhost:3000/)
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If running in browser under the /BEJENGMC subfolder
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname.toLowerCase();
    if (pathname.startsWith("/bejengmc")) {
      if (cleanPath.toLowerCase().startsWith("/bejengmc/")) {
        return cleanPath;
      }
      return `/BEJENGMC${cleanPath}`;
    }
  }

  // If compiled with NEXT_PUBLIC_BASE_PATH
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (envBasePath && !cleanPath.toLowerCase().startsWith(envBasePath.toLowerCase() + "/")) {
    return `${envBasePath}${cleanPath}`;
  }

  return cleanPath;
}
