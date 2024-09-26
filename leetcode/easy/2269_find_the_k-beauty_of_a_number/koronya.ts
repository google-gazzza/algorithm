// [Easy] 2269. Find the K-Beauty of a Number
// 2269_find_the_k-beauty_of_a_number

// https://leetcode.com/problems/find-the-k-beauty-of-a-number
// Runtime: 86 ms, faster than 100.00% of TypeScript online submissions for Find the K-Beauty of a Number.
// Memory Usage: 43.2 MB, less than 100.00% of TypeScript online submissions for Find the K-Beauty of a Number.

function divisorSubstrings(num: number, k: number): number {
  let result = 0
  const str = String(num)
  const strLen = str.length
  const limit = strLen - k
  for (let i: number = 0; i <= limit; i += 1) {
    if (num % Number(str.substring(i, i + k)) === 0) {
      result += 1
    }
  }

  return result
}
