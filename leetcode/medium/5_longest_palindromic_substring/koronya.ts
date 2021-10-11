// [Medium] 5. Longest Palindromic Substring
// 5_longest_palindromic_substring

// https://leetcode.com/problems/longest-palindromic-substring
// Runtime: 724 ms, faster than 32.73% of TypeScript online submissions for Longest Palindromic Substring.
// Memory Usage: 46.7 MB, less than 22.97% of TypeScript online submissions for Longest Palindromic Substring.

const isPalindrome = (str: string): boolean => str.split('').reverse().join('') === str

function longestPalindrome(s: string): string {
  let resultStr: string = ''
  let adjustS = s
    .split('')
    .reduce((acc, cur) => acc + '#' + cur, '')
    .substring(1)
  const adjustSLen = adjustS.length
  const getPalindromeFromIndex = (index: number): string => {
    let result = adjustS[index]
    let left = index - 1
    let right = index + 1
    while (left >= 0 && right < adjustSLen) {
      const leftAdjustS = adjustS[left]
      const rightAdjustS = adjustS[right]
      if (leftAdjustS !== rightAdjustS) {
        break
      }
      left -= 1
      right += 1
      result = leftAdjustS + result + rightAdjustS
    }
    return result.split('#').join('')
  }

  for (let i: number = 0; i < adjustSLen; i += 1) {
    const palindromeStr = getPalindromeFromIndex(i)
    if (palindromeStr.length > resultStr.length) {
      resultStr = palindromeStr
    }
  }

  return resultStr
}
