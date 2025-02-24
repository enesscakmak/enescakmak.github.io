export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export function withBasePath(path) {
  // Just return the path as-is - no base path needed for Cloudflare Pages
  return path;
} 