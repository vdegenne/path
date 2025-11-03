export function trim(input: string, preserveRootSlash = false) {
	let trimmed = input.replace(/^[\/\s]+|[\/\s]+$/g, '')
	if (preserveRootSlash && input.startsWith('/')) {
		trimmed = '/' + trimmed
	}
	return trimmed
}

export function explode(path: string) {
	return trim(path)
		.split('/')
		.filter((i) => i)
}

export function basename(path: string) {
	const parts = explode(path)
	return parts.pop() || ''
}

export function dirname(path: string, preserveRootSlash = false) {
	const parts = explode(trim(path, preserveRootSlash))
	if (parts.length <= 1) return preserveRootSlash ? '/' : ''
	parts.pop()
	const result = parts.join('/')
	return preserveRootSlash ? '/' + result : result
}

export const oneDirectoryUp = dirname // alias
