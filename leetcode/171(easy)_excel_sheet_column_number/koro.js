// https://leetcode.com/problems/excel-sheet-column-number
// Runtime: 68 ms, faster than 83.55% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 35 MB, less than 73.33% of JavaScript online submissions for Excel Sheet Column Number.

const ALPHABET_NUMBER = 26
const CHARCODE_BEFORE_A = 64
const matchStringToNumber = string => string.charCodeAt() - CHARCODE_BEFORE_A

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  const sArr = s.split('')
  const sArrLen = sArr.length

  return sArr.reduce((acc, cur, index) => (
    acc + matchStringToNumber(cur) * (ALPHABET_NUMBER ** (sArrLen - index - 1))
  ), 0)
}
