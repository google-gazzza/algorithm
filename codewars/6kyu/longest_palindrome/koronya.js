// [JS][6kyu] longest_palindrome
// longest_palindrome
// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

const isPalindrome = (str) => {
  const strLen = str.length
  const mid = Math.floor(strLen / 2)
  for (let i = 0; i < mid; i += 1) {
    if (str[i] !== str[strLen - 1 - i]) {
      return false
    }
  }
  return true
}

const longestPalindrome = (s) => {
  let max = 0
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    for (let j = i + 1; j <= sLen; j += 1 || 0) {
      const subStr = s.substring(i, j)
      if (isPalindrome(subStr) === true) {
        max = Math.max(max, subStr.length)
      }
    }
  }

  return max
}

longestPalindrome('a')
longestPalindrome('aa')
longestPalindrome('baa')
longestPalindrome('aab')

longestPalindrome('zyabyz')
longestPalindrome('baabcd')
longestPalindrome('baablkj12345432133d')
