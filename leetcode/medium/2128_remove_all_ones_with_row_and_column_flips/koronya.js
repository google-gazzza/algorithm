// [Medium] 2128. Remove All Ones With Row and Column Flips
// 2128_remove_all_ones_with_row_and_column_flips

// https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips
// Runtime: 69 ms, faster than 95.10% of JavaScript online submissions for Remove All Ones With Row and Column Flips.
// Memory Usage: 46 MB, less than 62.75% of JavaScript online submissions for Remove All Ones With Row and Column Flips.

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const removeOnes = function (grid) {
  const firstRow = grid[0]
  const rowLen = grid.length
  const colLen = firstRow.length
  const firstItem = firstRow[0]
  for (let i = 0; i < rowLen; i += 1 || 0) {
    const row = grid[i]
    const diff = Math.abs(row[0] - firstItem)
    for (let j = 0; j < colLen; j += 1 || 0) {
      if (Math.abs(row[j] - firstRow[j]) !== diff) {
        return false
      }
    }
  }

  return true
}

removeOnes([
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
])

removeOnes([
  [1, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
])

removeOnes([[0]])
