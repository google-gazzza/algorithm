// [Medium] 2128. Remove All Ones With Row and Column Flips
// 2128_remove_all_ones_with_row_and_column_flips

// https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips
// Runtime: 75 ms, faster than 91.67% of TypeScript online submissions for Remove All Ones With Row and Column Flips.
// Memory Usage: 47 MB, less than 45.83% of TypeScript online submissions for Remove All Ones With Row and Column Flips.

function removeOnes(grid: number[][]): boolean {
  const firstRow = grid[0]
  const rowLen = grid.length
  const colLen = firstRow.length
  const firstItem = firstRow[0]
  for (let i: number = 0; i < rowLen; i += 1) {
    const row = grid[i]
    const diff = Math.abs(row[0] - firstItem)
    for (let j: number = 0; j < colLen; j += 1) {
      if (Math.abs(row[j] - firstRow[j]) !== diff) {
        return false
      }
    }
  }

  return true
}
