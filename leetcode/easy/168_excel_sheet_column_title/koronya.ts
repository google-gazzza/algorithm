// [Easy] 168. Excel Sheet Column Title
// 168_excel_sheet_column_title

// https://leetcode.com/problems/excel-sheet-column-title
// Runtime: 60 ms, faster than 94.55% of TypeScript online submissions for Excel Sheet Column Title.
// Memory Usage: 43.4 MB, less than 14.55% of TypeScript online submissions for Excel Sheet Column Title.

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)

const convertNumToAlphabet = (num: number): string => {
  return String.fromCharCode(CHAR_CODE_OF_UPPER_A + num - 1)
}

function convertToTitle(columnNumber: number): string {
  const arr: number[] = []
  let target = columnNumber
  while (target > 26) {
    const remainder = target % 26
    arr.push(remainder === 0 ? 26 : remainder)
    target = remainder === 0 ? Math.floor(target / 26) - 1 : Math.floor(target / 26)
  }
  arr.push(target)

  return arr.reduceRight((acc, cur) => acc + convertNumToAlphabet(cur), '')
}
