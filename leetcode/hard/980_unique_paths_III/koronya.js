// https://leetcode.com/problems/unique-paths-iii
// Runtime: 52 ms, faster than 96.64% of JavaScript online submissions for Unique Paths III.
// Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions for Unique Paths III.
const findStartPoint = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (grid[row][col] === 1) {
        return {row, col}
      }
    }
  }
}
const uniquePathsIII = grid => {
  let resultCount = 0
  const rowLen = grid.length
  const colLen = grid[0].length
  const getLeftColIndex = col => col === 0 ? -1 : col - 1
  const getRightColIndex = col => col === colLen - 1 ? -1 : col + 1
  const getUpRowIndex = row => row === 0 ? -1 : row - 1
  const getDownRowIndex = row => row === rowLen - 1 ? -1 : row + 1
  const backtracking = (arr, rowIndex, colIndex) => {
    if (rowIndex === -1 || colIndex === -1) {
      return
    }
    const item = arr[rowIndex][colIndex]
    if (item === -1) {
      return
    }
    if (item === 2) {
      arr[rowIndex][colIndex] = -1
      if (arr.every(row => row.every(item => item === -1))) {
        resultCount += 1
      }
      arr[rowIndex][colIndex] = item
      return
    }
    arr[rowIndex][colIndex] = -1
    backtracking(arr, rowIndex, getLeftColIndex(colIndex))
    backtracking(arr, rowIndex, getRightColIndex(colIndex))
    backtracking(arr, getUpRowIndex(rowIndex), colIndex)
    backtracking(arr, getDownRowIndex(rowIndex), colIndex)
    arr[rowIndex][colIndex] = item
  }

  const {row, col} = findStartPoint(grid)
  backtracking(grid, row, col)

  return resultCount
}

