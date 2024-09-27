// [Easy] 266. Palindrome Permutation
// 266_palindrome_permutation

// https://leetcode.com/problems/palindrome-permutation
// Runtime: 60 ms, faster than 100.00% of TypeScript online submissions for Palindrome Permutation.
// Memory Usage: 40.4 MB, less than 22.92% of TypeScript online submissions for Palindrome Permutation.

function canPermutePalindrome(s: string): boolean {
  const strMap = new Map<string, number>()
  const sLen = s.length
  for (let i: number = 0; i < sLen; i += 1) {
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
