// [Easy] 1332. Remove Palindromic Subsequences
// 1332_remove_palindromic_subsequences

// https://leetcode.com/problems/remove-palindromic-subsequences
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Remove Palindromic Subsequences.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Remove Palindromic Subsequences.
function removePalindromeSub (s: string): number {
  return s.length === 0
    ? 0
    : s.split('').reverse().join('') === s
      ? 1
      : 2
}
