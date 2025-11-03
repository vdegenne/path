# @vdegenne/path

A tiny utility library providing extra path manipulation methods for the **web browser**.

---

## Installation

```bash
npm install @vdegenne/path
# or
yarn add @vdegenne/path
```

---

## Usage

```ts
import {trim, explode, basename, dirname, oneDirectoryUp} from '@vdegenne/path'

console.log(trim('  /a/b/c/ ')) // 'a/b/c'
console.log(trim('  /a/b/c/ ', true)) // '/a/b/c'

console.log(explode('/a/b/c/')) // ['a','b','c']

console.log(basename('/a/b/c/')) // 'c'

console.log(dirname('/a/b/c/')) // 'a/b'
console.log(dirname('/a/b/c/', true)) // '/a/b'

console.log(oneDirectoryUp('/a/b/c/')) // 'a/b'
console.log(oneDirectoryUp('/a/b/c/', true)) // '/a/b'
```
