// Removes leading/trailing slashes and spaces; optionally preserves a leading slash
export function trim(input: string, preserveRootSlash = false) {
	let trimmed = input.replace(/^[\/\s]+|[\/\s]+$/g, '')
	if (preserveRootSlash && input.startsWith('/')) {
		trimmed = '/' + trimmed
	}
	return trimmed
}

// Splits a path into segments, ignoring empty segments
export function explode(path: string) {
	return trim(path)
		.split('/')
		.filter((i) => i)
}

// Returns the last segment of a path
export function basename(path: string) {
	const parts = explode(path)
	return parts.pop() || ''
}

// Returns the parent path of a given path; optionally preserves a leading slash
export function dirname(path: string, preserveRootSlash = false) {
	const parts = explode(trim(path, preserveRootSlash))
	if (parts.length <= 1) return preserveRootSlash ? '/' : ''
	parts.pop()
	const result = parts.join('/')
	return preserveRootSlash ? '/' + result : result
}

// Alias for dirname
export const oneDirectoryUp = dirname
