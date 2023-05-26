// [Easy] 266. Palindrome Permutation
// 266_palindrome_permutation

// https://leetcode.com/problems/palindrome-permutation
// Runtime: 64 ms, faster than 96.50% of JavaScript online submissions for Palindrome Permutation.
// Memory Usage: 38.8 MB, less than 26.85% of JavaScript online submissions for Palindrome Permutation.

/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
  const strMap = new Map()
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const oddArr = []
  for (const item of strMap) {
    if (item[1] % 2 === 1) {
      oddArr.push(item)
      if (oddArr.length > 1) {
        return false
      }
    }
  }
  return true
}

canPermutePalindrome('code') //?
canPermutePalindrome('aab') //?
canPermutePalindrome('carerac') //?
