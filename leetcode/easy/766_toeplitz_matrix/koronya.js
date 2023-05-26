// [Easy] 766. Toeplitz Matrix
// 766_toeplitz_matrix

// https://leetcode.com/problems/toeplitz-matrix
// Runtime: 76 ms, faster than 98.88% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 40.4 MB, less than 60.45% of JavaScript online submissions for Toeplitz Matrix.
const isToeplitzMatrix = function (matrix) {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const hasNextDiagonalItem = (row, col) => row < rowLen - 1 && col < colLen - 1
  const getNextDiagonalItem = (row, col) => matrix[row + 1][col + 1]
  const hasNextStartPoint = (row, col) => row !== 0 || col !== colLen - 1
  const getNextStartPoint = (row, col) => col === 0 && row !== 0 ? [row - 1, col] : [row, col + 1]
  let startRow = rowLen - 1
  let startCol = 0

  while (hasNextStartPoint(startRow, startCol)) {
    let targetRow = startRow
    let targetCol = startCol
    let before = matrix[targetRow][targetCol]
    while (hasNextDiagonalItem(targetRow, targetCol)) {
      if (before !== getNextDiagonalItem(targetRow, targetCol)) {
        return false
      } else {
        targetRow += 1
        targetCol += 1
      }
    }

    const nextItems = getNextStartPoint(startRow, startCol)
    startRow = nextItems[0]
    startCol = nextItems[1]
  }

  return true
}
