// [Easy] 2269. Find the K-Beauty of a Number
// 2269_find_the_k-beauty_of_a_number

// https://leetcode.com/problems/find-the-k-beauty-of-a-number
// Runtime: 83 ms, faster than 100.00% of JavaScript online submissions for Find the K-Beauty of a Number.
// Memory Usage: 41.8 MB, less than 100.00% of JavaScript online submissions for Find the K-Beauty of a Number.

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = function (num, k) {
  let result = 0
  const str = String(num)
  const strLen = str.length
  const limit = strLen - k
  for (let i = 0; i <= limit; i += 1 || 0) {
    if (num % Number(str.substring(i, i + k)) === 0) {
      result += 1
    }
  }

  return result
}

divisorSubstrings(240, 2)
divisorSubstrings(430043, 2)
