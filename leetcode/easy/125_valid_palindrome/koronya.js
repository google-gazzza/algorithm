// https://leetcode.com/problems/valid-palindrome/submissions/
// Runtime: 60 ms, faster than 96.78% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 38.7 MB, less than 30.43% of JavaScript online submissions for Valid Palindrome.
const isPalindrome = s => {
  const REG_EXP_ONLY_ENGLISH = /[a-zA-Z\d]+/g
  const onlyEnglishStrArr = s.match(REG_EXP_ONLY_ENGLISH)
  if (!onlyEnglishStrArr) {
    return true
  }
  const onlyEnglishStr = onlyEnglishStrArr.reduce((acc, cur) => acc + cur.toLowerCase(), '')
  return onlyEnglishStr === onlyEnglishStr.split('').reverse().join('')
}
