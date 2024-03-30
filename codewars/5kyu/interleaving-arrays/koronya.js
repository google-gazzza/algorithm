// [JS][5kyu] Interleaving Arrays
// interleaving-arrays
// https://www.codewars.com/kata/523d2e964680d1f749000135/train/javascript

const interleave = (...arr) => {
  const arrLen = arr.length
  const maxLen = arr.reduce((acc, cur) => Math.max(acc, cur.length), 0)
  const result = []
  for (let i = 0; i < maxLen; i += 1 || 0) {
    for (let j = 0; j < arrLen; j += 1 || 0) {
      const item = arr[j][i] ?? null
      result.push(item)
    }
  }
  return result
}

interleave([1, 2, 3], ['c', 'd', 'e'])
interleave([1, 2, 3], [4, 5])
interleave([1, 2, 3], [4, 5, 6], [7, 8, 9])
interleave([])
