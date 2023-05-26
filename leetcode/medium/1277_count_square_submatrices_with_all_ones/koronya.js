// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// Runtime: 932 ms, faster than 6.11% of JavaScript online submissions for Count Square Submatrices with All Ones.
// Memory Usage: 39.6 MB, less than 100.00% of JavaScript online submissions for Count Square Submatrices with All Ones.
const countSquares = matrix => {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const maxN = Math.min(rowLen, colLen)
  let count = 0

  const isValidSquare = (row, col, n) => {
    if (row + n > rowLen || col + n > colLen) {
      return false
    }
    for (let i = row; i < row + n; i = i + 1 | 0) {
      for (let j = col; j < col + n; j = j + 1 | 0) {
        if (matrix[i][j] === 0) {
          return false
        }
      }
    }
    return true
  }

  const executeNSqaure = n => {
    for (let row = 0; row < rowLen; row = row + 1 | 0) {
      for (let col = 0; col < colLen; col = col + 1 | 0) {
        if (isValidSquare(row, col, n)) {
          count += 1
        }
      }
    }
  }

  let n = 1
  while (n <= maxN) {
    executeNSqaure(n)
    n += 1
  }

  return count
}
