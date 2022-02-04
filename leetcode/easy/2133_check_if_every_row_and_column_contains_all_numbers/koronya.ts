// [Easy] 2133. Check if Every Row and Column Contains All Numbers
// 2133_check_if_every_row_and_column_contains_all_numbers

// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers
// Runtime: 120 ms, faster than 97.56% of TypeScript online submissions for Check if Every Row and Column Contains All Numbers.
// Memory Usage: 51.3 MB, less than 12.20% of TypeScript online submissions for Check if Every Row and Column Contains All Numbers.

function checkValid(matrix: number[][]): boolean {
  const n = matrix.length
  for (let row: number = 0; row < n; row += 1) {
    const set = new Set<number>()
    for (let col: number = 0; col < n; col += 1) {
      set.add(matrix[row][col])
    }
    if (set.size < n) {
      return false
    }
  }
  for (let col: number = 0; col < n; col += 1) {
    const set = new Set<number>()
    for (let row: number = 0; row < n; row += 1) {
      set.add(matrix[row][col])
    }
    if (set.size < n) {
      return false
    }
  }
  return true
}
