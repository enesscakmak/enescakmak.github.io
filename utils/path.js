export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export function withBasePath(path) {
  const basePath = getBasePath()
  return path.startsWith('/') ? `${basePath}${path}` : `${basePath}/${path}`
} 