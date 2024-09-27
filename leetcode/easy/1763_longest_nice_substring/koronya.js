// [Easy] 1763. Longest Nice Substring
// 1763_longest_nice_substring

// https://leetcode.com/problems/longest-nice-substring
// Runtime: 280 ms, faster than 100.00% of JavaScript online submissions for Longest Nice Substring.
// Memory Usage: 45.9 MB, less than 100.00% of JavaScript online submissions for Longest Nice Substring.

/**
 * @param {string} s
 * @return {string}
 */

const CHARCODE_OF_SMALL_A = 'a'.charCodeAt() //?
const CHARCODE_OF_LARGE_A = 'A'.charCodeAt() //?
const DIFF_OF_ALPHABET = CHARCODE_OF_SMALL_A - CHARCODE_OF_LARGE_A

const isValid = (str) => {
  const charSetOfUpper = new Set()
  const charSetOfLower = new Set()
  for (let i = str.length - 1; i >= 0; i -= 1 || 0) {
    const char = str[i]
    const charCode = char.charCodeAt()
    if (charCode >= CHARCODE_OF_SMALL_A) {
      charSetOfLower.add(charCode)
    } else {
      charSetOfUpper.add(charCode)
    }
  }
  const lowerArr = [...charSetOfLower].sort((a, b) => a - b)
  const upperArr = [...charSetOfUpper].sort((a, b) => a - b)
  const lowerArrLen = lowerArr.length
  const upperArrLen = upperArr.length
  if (lowerArrLen !== upperArrLen) {
    return false
  }

  return lowerArr.every((item, index) => item - DIFF_OF_ALPHABET === upperArr[index])
}

const longestNiceSubstring = function (s) {
  const sLen = s.length
  let maxLen = 0
  let candidateStr = ''

  const dfs = (str, start) => {
    const strLen = str.length
    if (start > sLen) {
      return
    }
    if (isValid(str) === true) {
      if (strLen > maxLen) {
        maxLen = strLen
        candidateStr = str
      }
    }
    dfs(str + s[start], start + 1)
  }

  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(s[i], i + 1)
  }

  return candidateStr
}

longestNiceSubstring('YazaAay')
longestNiceSubstring('Bb')
longestNiceSubstring('c')
longestNiceSubstring('dDzeE')

isValid('aAabbppePH') //?
isValid('aA') //?
