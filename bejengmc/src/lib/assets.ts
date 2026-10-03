/**
 * Asset helper for custom domain (www.bejengmc.store) and local development.
 * Static assets are located at the domain root.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
}
