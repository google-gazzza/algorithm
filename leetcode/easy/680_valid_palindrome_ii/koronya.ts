// [Easy] 680. Valid Palindrome II
// 680_valid_palindrome_ii

// https://leetcode.com/problems/valid-palindrome-ii
// Runtime: 160 ms, faster than 30.71% of TypeScript online submissions for Valid Palindrome II.
// Memory Usage: 67.6 MB, less than 5.51% of TypeScript online submissions for Valid Palindrome II.

const isPalindrome = (s: string): boolean => s === s.split('').reverse().join('')

function validPalindrome(s: string): boolean {
  const sLen = s.length
  let startPoint: number = 0
  let endPoint: number = sLen - 1

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
