export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/enescakmak.github.io' : ''
}

export function withBasePath(path) {
  return `${getBasePath()}${path}`
} 