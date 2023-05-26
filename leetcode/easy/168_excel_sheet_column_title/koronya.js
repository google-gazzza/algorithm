// [Easy] 168. Excel Sheet Column Title
// 168_excel_sheet_column_title

// https://leetcode.com/problems/excel-sheet-column-title
// Runtime: 63 ms, faster than 83.89% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 42.1 MB, less than 28.91% of JavaScript online submissions for Excel Sheet Column Title.

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)

const convertNumToAlphabet = (num) => {
  return String.fromCharCode(CHAR_CODE_OF_UPPER_A + num - 1)
}

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const arr = []
  let target = columnNumber
  while (target > 26) {
    const remainder = target % 26
    arr.push(remainder === 0 ? 26 : remainder)
    target = remainder === 0 ? Math.floor(target / 26) - 1 : Math.floor(target / 26)
  }
  arr.push(target)

  return arr.reduceRight((acc, cur) => acc + convertNumToAlphabet(cur), '')
}

convertToTitle(52) === 'AZ'
convertToTitle(1) === 'A'
convertToTitle(28) === 'AB'
convertToTitle(701) === 'ZY'
convertToTitle(900) === 'AHP'
