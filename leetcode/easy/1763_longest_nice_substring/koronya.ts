// [Easy] 1763. Longest Nice Substring
// 1763_longest_nice_substring

// https://leetcode.com/problems/longest-nice-substring
// Runtime: 292 ms, faster than 100.00% of TypeScript online submissions for Longest Nice Substring.
// Memory Usage: 46.4 MB, less than 100.00% of TypeScript online submissions for Longest Nice Substring.

const CHARCODE_OF_SMALL_A: number = 'a'.charCodeAt(0) //?
const CHARCODE_OF_LARGE_A: number = 'A'.charCodeAt(0) //?
const DIFF_OF_ALPHABET = CHARCODE_OF_SMALL_A - CHARCODE_OF_LARGE_A

const isValid = (str: string): boolean => {
  const charSetOfUpper = new Set<number>()
  const charSetOfLower = new Set<number>()
  for (let i: number = str.length - 1; i >= 0; i -= 1) {
    const char: string = str[i]
    const charCode: number = char.charCodeAt(0)
    if (charCode >= CHARCODE_OF_SMALL_A) {
      charSetOfLower.add(charCode)
    } else {
      charSetOfUpper.add(charCode)
    }
  }
  const lowerArr: number[] = [...charSetOfLower].sort((a, b) => a - b)
  const upperArr: number[] = [...charSetOfUpper].sort((a, b) => a - b)
  const lowerArrLen: number = lowerArr.length
  const upperArrLen: number = upperArr.length
  if (lowerArrLen !== upperArrLen) {
    return false
  }

  return lowerArr.every((item, index) => item - DIFF_OF_ALPHABET === upperArr[index])
}

function longestNiceSubstring(s: string): string {
  const sLen: number = s.length
  let maxLen: number = 0
  let candidateStr: string = ''

  const dfs = (str: string, start: number): void => {
    const strLen: number = str.length
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

  for (let i: number = 0; i < sLen; i += 1) {
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
