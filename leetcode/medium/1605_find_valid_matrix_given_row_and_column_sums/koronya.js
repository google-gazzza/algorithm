// [Medium] 1605. Find Valid Matrix Given Row and Column Sums
// 1605_find_valid_matrix_given_row_and_column_sums

// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums
// Runtime: 340 ms, faster than 77.63% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
// Memory Usage: 57.1 MB, less than 50.00% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
const restoreMatrix = function (rowSum, colSum) {
  const rowLen = rowSum.length
  const colLen = colSum.length
  const resultArr = Array.from(Array(rowLen), () => Array(colLen).fill(0))
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      const minValue = Math.min(rowSum[row], colSum[col])
      resultArr[row][col] = minValue
      rowSum[row] -= minValue
      colSum[col] -= minValue
    }
  }

  return resultArr
}

restoreMatrix([3, 8], [4, 7]) //?
restoreMatrix([5, 7, 10], [8, 6, 8]) //?
restoreMatrix([14, 9], [6, 9, 8]) //?
restoreMatrix([14, 9], [6, 5, 12]) //?
