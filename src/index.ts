function trimChar(input: string, character = ' ') {
	const pattern = new RegExp(`^${character}+|${character}+$`, 'g')
	return input.replace(pattern, '')
}
export function trimSpaces(input: string) {
	return trimChar(input)
}
export function trimSlashes(input: string) {
	return trimChar(input, '/')
}

export function trim(input: string, preserveRootSlash = false) {
	let trimmed = trimSpaces(input)
	const startsWithSlash = trimmed.startsWith('/')
	trimmed = trimSlashes(trimmed)
	if (preserveRootSlash && startsWithSlash) {
		trimmed = '/' + trimmed
	}
	return trimmed
}

export function explode(path: string) {
	return trim(path)
		.split('/')
		.filter((i) => i)
}

export function basename(path: string, preserveRootSlash = false) {
	const startsWithSlash = trimSpaces(path).startsWith('/')
	const parts = explode(path)
	const pop = parts.pop()
	return pop ?? (preserveRootSlash && startsWithSlash ? '/' : '')
}

export function dirname(path: string, preserveRootSlash = false) {
	let trimmed = trimSpaces(path)
	const startsWithSlash = trimmed.startsWith('/')
	trimmed = trimSlashes(trimmed)
	const parts = explode(path)
	if (parts.length <= 1) return preserveRootSlash && startsWithSlash ? '/' : ''
	parts.pop()
	const result = parts.join('/')
	return preserveRootSlash && startsWithSlash ? '/' + result : result
}

// Alias for dirname
export const oneDirectoryUp = dirname
