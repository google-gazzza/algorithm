// [Easy] 58. Length of Last Word
// 58_length_of_last_word

// https://leetcode.com/problems/length-of-last-word
// Runtime: 76 ms, faster than 73.77% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 38.5 MB, less than 83.73% of JavaScript online submissions for Length of Last Word.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const splitedStr = s.split(' ')
  const splitedStrLen = splitedStr.length
  for (let i = splitedStrLen - 1; i >= 0; i -= 1 || 0) {
    if (splitedStr[i].length !== 0) {
      return splitedStr[i].length
    }
  }
  return 0
}

lengthOfLastWord('Hello World') //?
lengthOfLastWord(' ') //?
lengthOfLastWord('a ') //?
