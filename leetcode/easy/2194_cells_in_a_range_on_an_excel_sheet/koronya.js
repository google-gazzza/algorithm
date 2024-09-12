// [Easy] 2194. Cells in a Range on an Excel Sheet
// 2194_cells_in_a_range_on_an_excel_sheet

// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet
// Runtime: 76 ms, faster than 88.05% of JavaScript online submissions for Cells in a Range on an Excel Sheet.
// Memory Usage: 45 MB, less than 33.45% of JavaScript online submissions for Cells in a Range on an Excel Sheet.

/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = function (s) {
  const [start, end] = s.split(':')
  const startCol = start[0]
  const startRow = Number(start[1])
  const endCol = end[0]
  const endRow = Number(end[1])
  const resultArr = []
  const startColCharCode = startCol.charCodeAt(0)
  const endColCharCode = endCol.charCodeAt(0)
  for (let i = startColCharCode; i <= endColCharCode; i += 1 || 0) {
    const str = String.fromCharCode(i)
    for (let j = startRow; j <= endRow; j += 1 || 0) {
      resultArr.push(`${str}${j}`)
    }
  }

  return resultArr
}

cellsInRange('K1:L2')
// cellsInRange('A1:F1')
