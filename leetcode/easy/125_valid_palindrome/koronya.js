// https://leetcode.com/problems/valid-palindrome/submissions/
// Runtime: 60 ms, faster than 96.78% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 38.7 MB, less than 30.43% of JavaScript online submissions for Valid Palindrome.
const isPalindrome = s => {
  const REG_EXP_ONLY_ALPHANUMERIC = /[a-zA-Z\d]+/g
  const onlyAlphaNumericArr = s.match(REG_EXP_ONLY_ALPHANUMERIC)
  if (!onlyAlphaNumericArr) {
    return true
  }
  const onlyAlphaNumeric = onlyAlphaNumericArr.reduce((acc, cur) => acc + cur.toLowerCase(), '')
  return onlyAlphaNumeric === onlyAlphaNumeric.split('').reverse().join('')
}
