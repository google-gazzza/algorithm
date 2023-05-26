// [Medium] 1605. Find Valid Matrix Given Row and Column Sums
// 1605_find_valid_matrix_given_row_and_column_sums

// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums
// Runtime: 340 ms, faster than 80.00% of TypeScript online submissions for Find Valid Matrix Given Row and Column Sums.
// Memory Usage: 57.6 MB, less than 60.00% of TypeScript online submissions for Find Valid Matrix Given Row and Column Sums.

function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const rowLen: number = rowSum.length
  const colLen: number = colSum.length
  const resultArr: number[][] = Array.from(Array(rowLen), () => Array(colLen).fill(0))
  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      const minValue: number = Math.min(rowSum[row], colSum[col])
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
