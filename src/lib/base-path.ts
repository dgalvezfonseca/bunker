export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}
