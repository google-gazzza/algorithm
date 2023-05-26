// [Easy] 680. Valid Palindrome II
// 680_valid_palindrome_ii

// https://leetcode.com/problems/valid-palindrome-ii
// Runtime: 242 ms, faster than 9.10% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 66.2 MB, less than 5.04% of JavaScript online submissions for Valid Palindrome II.

const isPalindrome = (s) => s === s.split('').reverse().join('')

isPalindrome('abc')
isPalindrome('aba')
isPalindrome('abccba')

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  const sLen = s.length
  let startPoint = 0
  let endPoint = sLen - 1

  while (true && startPoint < endPoint) {
    const left = s[startPoint]
    const right = s[endPoint]
    if (left !== right) {
      const leftNext = s[startPoint + 1]
      const rightPrev = s[endPoint - 1]
      const sArr = s.split('')
      const sArr2 = s.split('')
      sArr.splice(startPoint, 1)
      sArr2.splice(endPoint, 1)

      if (leftNext === right && rightPrev === left) {
        return isPalindrome(sArr.join('')) || isPalindrome(sArr2.join(''))
      } else if (leftNext === right) {
        return isPalindrome(sArr.join(''))
      } else if (rightPrev === left) {
        return isPalindrome(sArr2.join(''))
      }
      return false
    } else {
      startPoint += 1
      endPoint -= 1
    }
  }

  return true
}

validPalindrome('aba')
validPalindrome('abca')
validPalindrome('abc')
