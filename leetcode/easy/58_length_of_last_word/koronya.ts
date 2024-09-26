// [Easy] 58. Length of Last Word
// 58_length_of_last_word

// https://leetcode.com/problems/length-of-last-word
// Runtime: 80 ms, faster than 74.67% of TypeScript online submissions for Length of Last Word.
// Memory Usage: 39.1 MB, less than 86.00% of TypeScript online submissions for Length of Last Word.
function lengthOfLastWord(s: string): number {
  const splitedStr: string[] = s.split(' ')
  const splitedStrLen: number = splitedStr.length
  for (let i: number = splitedStrLen - 1; i >= 0; i -= 1) {
    if (splitedStr[i].length !== 0) {
      return splitedStr[i].length
    }
  }
  return 0
}

lengthOfLastWord('Hello World') //?
lengthOfLastWord(' ') //?
lengthOfLastWord('a ') //?
