// [Easy] 2194. Cells in a Range on an Excel Sheet
// 2194_cells_in_a_range_on_an_excel_sheet

// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet
// Runtime: 107 ms, faster than 70.59% of TypeScript online submissions for Cells in a Range on an Excel Sheet.
// Memory Usage: 45.8 MB, less than 23.53% of TypeScript online submissions for Cells in a Range on an Excel Sheet.

function cellsInRange(s: string): string[] {
  const [start, end] = s.split(':')
  const startCol = start[0]
  const startRow = Number(start[1])
  const endCol = end[0]
  const endRow = Number(end[1])
  const resultArr = []
  const startColCharCode = startCol.charCodeAt(0)
  const endColCharCode = endCol.charCodeAt(0)
  for (let i: number = startColCharCode; i <= endColCharCode; i += 1) {
    const str = String.fromCharCode(i)
    for (let j: number = startRow; j <= endRow; j += 1) {
      resultArr.push(`${str}${j}`)
    }
  }

  return resultArr
}
