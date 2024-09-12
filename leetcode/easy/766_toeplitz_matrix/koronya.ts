// [Easy] 766. Toeplitz Matrix
// 766_toeplitz_matrix

// https://leetcode.com/problems/toeplitz-matrix
// Runtime: 84 ms, faster than 90.91% of TypeScript online submissions for Toeplitz Matrix.
// Memory Usage: 41.1 MB, less than 27.27% of TypeScript online submissions for Toeplitz Matrix.

type Point = [number, number]

function isToeplitzMatrix (matrix: number[][]): boolean {
  const rowLen: number = matrix.length
  const colLen: number = matrix[0].length
  const hasNextDiagonalItem = (row: number, col: number): boolean => row < rowLen - 1 && col < colLen - 1
  const getNextDiagonalItem = (row: number, col: number): number => matrix[row + 1][col + 1]
  const hasNextStartPoint = (row: number, col: number): boolean => row !== 0 || col !== colLen - 1
  const getNextStartPoint = (row: number, col: number): Point => col === 0 && row !== 0 ? [row - 1, col] : [row, col + 1]
  let startRow: number = rowLen - 1
  let startCol: number = 0

  while (hasNextStartPoint(startRow, startCol)) {
    let targetRow: number = startRow
    let targetCol: number = startCol
    let before: number = matrix[targetRow][targetCol]
    while (hasNextDiagonalItem(targetRow, targetCol)) {
      if (before !== getNextDiagonalItem(targetRow, targetCol)) {
        return false
      } else {
        targetRow += 1
        targetCol += 1
      }
    }

    const nextItems: Point = getNextStartPoint(startRow, startCol)
    startRow = nextItems[0]
    startCol = nextItems[1]
  }

  return true
}
