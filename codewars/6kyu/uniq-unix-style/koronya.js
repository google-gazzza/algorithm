// [JS][6kyu] uniq (UNIX style)
// uniq-unix-style
// https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/javascript

const uniq = (a) => {
  const arr = a.filter((v) => v !== undefined)
  const arrLen = arr.length
  if (arrLen === 0) {
    return []
  }
  let prev = arr[0]
  const result = [prev]
  for (let i = 1; i < arrLen; i += 1) {
    const curr = arr[i]
    if (prev !== curr) {
      result.push(curr)
      prev = curr
    }
  }

  return result
}

// uniq(['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c', 'c'])
// uniq(['f', 'o', 'o'])
// uniq(['foo'])
// uniq([undefined])
// uniq([undefined, undefined])
