import {
	trimSpaces,
	trimSlashes,
	trim,
	explode,
	basename,
	dirname,
	oneDirectoryUp,
} from './lib/index.js'

// trimSpaces
console.assert(trimSpaces('  test  ') === 'test', 'trimSpaces')

// trimSlashes
console.assert(trimSlashes('/a/b/c/') === 'a/b/c', 'trimSlashes')
console.assert(trimSlashes('///a/b/c///') === 'a/b/c', 'trimSlashes')

// trim
console.assert(
	trim('  /a/b/c/  ') === 'a/b/c',
	'trim without preserveRootSlash',
)
console.assert(
	trim('  /a/b/c/  ', true) === '/a/b/c',
	'trim with preserveRootSlash',
)

// explode
console.assert(
	JSON.stringify(explode('/a/b/c/')) === JSON.stringify(['a', 'b', 'c']),
	'explode normal',
)
console.assert(
	JSON.stringify(explode('  /a//b/c/  ')) === JSON.stringify(['a', 'b', 'c']),
	'explode with spaces and double slash',
)

// basename
console.assert(basename('/a/b/c') === 'c', 'basename normal')
console.assert(basename('a') === 'a', 'basename single segment')
console.assert(basename('a/') === 'a', 'basename single segment')
console.assert(basename('') === '', 'basename single segment')
console.assert(basename('/') === '', 'basename root')
console.assert(basename('/', true) === '/', 'basename root')

// dirname
console.assert(dirname('/a/b/c/') === 'a/b', 'dirname normal')
console.assert(dirname('/a/b/c') === 'a/b', 'dirname normal')
console.assert(dirname('/a/b/c', true) === '/a/b', 'dirname preserveRootSlash')
console.assert(dirname('/a/b/c/', true) === '/a/b', 'dirname normal')
console.assert(dirname('a') === '', 'dirname single segment')
console.assert(dirname('') === '', 'dirname single segment')
console.assert(dirname('/a') === '', 'dirname single segment preserveRootSlash')
console.assert(
	dirname('/a', true) === '/',
	'dirname single segment preserveRootSlash',
)
console.assert(dirname('/') === '', 'dirname single segment preserveRootSlash')
console.assert(
	dirname('/', true) === '/',
	'dirname single segment preserveRootSlash',
)

// oneDirectoryUp (alias)
console.assert(oneDirectoryUp('/a/b/c') === 'a/b', 'oneDirectoryUp normal')
console.assert(
	oneDirectoryUp('/a/b/c', true) === '/a/b',
	'oneDirectoryUp preserveRootSlash',
)
console.assert(
	oneDirectoryUp('a/b/c', true) === 'a/b',
	'oneDirectoryUp preserveRootSlash',
)
