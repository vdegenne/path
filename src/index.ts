export function explode(path: string) {
	return path
		.replace(/^\s+/, '')
		.replace(/^\/+/, '')
		.split('/')
		.filter((i) => i)
}

export function basename(path: string): string {
	const parts = explode(path)
	if (parts.length === 0) {
		if (path.replace(/^\s+/, '').startsWith('/')) {
			return '/'
		}
	}
	return parts[parts.length - 1] || ''
}

export function dirname(path: string): string {
	const parts = explode(path)
	const startsWithSlash = path.replace(/^\s+/, '').startsWith('/')
	parts.pop()
	return (startsWithSlash ? '/' : '') + parts.join('/') || '/'
}

export function join(...parts: string[]) {
	if (parts.length === 0) {
		return ''
	}
	const startsWithSlash = parts[0]!.replace(/^\s+/, '').startsWith('/')
	const total = explode(parts.join('/')).join('/')
	return (startsWithSlash ? '/' : '') + total
}

// Alias for dirname
export const oneDirectoryUp = dirname
