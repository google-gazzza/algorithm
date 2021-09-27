// https://leetcode.com/problems/palindrome-number
// Runtime: 212 ms, faster than 37.90% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 46.1 MB, less than 21.55% of JavaScript online submissions for Palindrome Number.
const isPalindrome = x => {
  if (x < 0) {
    return false
  }
  const splitedArr = String(x).split('')
  return splitedArr.join('') === splitedArr.reverse().join('')
}
