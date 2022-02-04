// [Easy] 2133. Check if Every Row and Column Contains All Numbers
// 2133_check_if_every_row_and_column_contains_all_numbers

// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers
// Runtime: 128 ms, faster than 92.15% of JavaScript online submissions for Check if Every Row and Column Contains All Numbers.
// Memory Usage: 50.7 MB, less than 15.24% of JavaScript online submissions for Check if Every Row and Column Contains All Numbers.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = function (matrix) {
  const n = matrix.length
  for (let row = 0; row < n; row += 1 || 0) {
    const set = new Set()
    for (let col = 0; col < n; col += 1 || 0) {
      set.add(matrix[row][col])
    }
    if (set.size < n) {
      return false
    }
  }
  for (let col = 0; col < n; col += 1 || 0) {
    const set = new Set()
    for (let row = 0; row < n; row += 1 || 0) {
      set.add(matrix[row][col])
    }
    if (set.size < n) {
      return false
    }
  }
  return true
}

checkValid([
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
])
checkValid([
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
])
