export function trim(input: string) {
	return input.replace(/^[\/\s]+|[\/\s]+$/g, '')
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

export function dirname(path: string) {
	const parts = explode(path)
	if (parts.length <= 1) return '/'
	parts.pop()
	return parts.join('/') + '/'
}
export const oneDirectoryUp = dirname // alias
