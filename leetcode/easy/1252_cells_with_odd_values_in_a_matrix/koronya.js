// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix
// Runtime: 56 ms, faster than 85.32% of JavaScript online submissions for Cells with Odd Values in a Matrix.
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Cells with Odd Values in a Matrix.
const oddCells = (n, m, indices) => {
  const arr = Array.from(Array(n), () => Array(m).fill(0))
  const increaseRow = rowNum => {
    for (let i = 0; i < m; i += 1) {
      arr[rowNum][i] += 1
    }
  }
  const increaseCol = colNum => {
    for (let i = 0; i < n; i += 1) {
      arr[i][colNum] += 1
    }
  }

  for (const [rowNum, colNum] of indices) {
    increaseRow(rowNum)
    increaseCol(colNum)
  }

  return arr.reduce((acc, cur) => acc + cur.reduce((acc2, cur2) => cur2 % 2 === 0 ? acc2 : acc2 + 1, 0), 0)
}
