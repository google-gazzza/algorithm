// [Medium] 1915. Number of Wonderful Substrings
// 1915_number_of_wonderful_substrings

// https://leetcode.com/problems/number-of-wonderful-substrings
// Runtime: 237 ms, faster than 100.00% of TypeScript online submissions for Number of Wonderful Substrings.
// Memory Usage: 67.1 MB, less than 100.00% of TypeScript online submissions for Number of Wonderful Substrings.

const INDEX_OF_J = 10
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

function wonderfulSubstrings(word: string): number {
  const wordArr = word.split('')
  const countArr = Array.from({ length: 2 ** 10 }).map((_) => 0)
  let result = 0
  let mask = 0
  countArr[0] = 1
  wordArr.forEach((str) => {
    let index = str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A
    mask ^= 1 << index
    result += countArr[mask]
    for (let i: number = 0; i < INDEX_OF_J; i += 1) {
      result += countArr[mask ^ (1 << i)]
    }
    countArr[mask] += 1
  })

  return result
}
