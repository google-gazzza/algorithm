// [Easy] 1332. Remove Palindromic Subsequences
// 1332_remove_palindromic_subsequences

// https://leetcode.com/problems/remove-palindromic-subsequences
// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Remove Palindromic Subsequences.
// Memory Usage: 38.6 MB, less than 50.00% of JavaScript online submissions for Remove Palindromic Subsequences.
const removePalindromeSub = function (s) {
  return s.length === 0
    ? 0
    : s.split('').reverse().join('') === s
      ? 1
      : 2
}
