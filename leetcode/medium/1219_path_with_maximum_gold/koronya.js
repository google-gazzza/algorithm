// https://leetcode.com/problems/path-with-maximum-gold
// Runtime: 148 ms, faster than 45.32% of JavaScript online submissions for Path with Maximum Gold.
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Path with Maximum Gold.
const getSum = arr => arr.length ? arr.reduce((acc, cur) => acc + cur) : 0
const getMaximumGold = grid => {
  let maxSum = 0
  const rowLen = grid.length
  const colLen = grid[0].length
  const getLeftColIndex = col => col === 0 ? -1 : col - 1
  const getRightColIndex = col => col === colLen - 1 ? -1 : col + 1
  const getUpRowIndex = row => row === 0 ? -1 : row - 1
  const getDownRowIndex = row => row === rowLen - 1 ? -1 : row + 1
  const backtracking = (board, candidateArr, rowIndex, colIndex) => {
    if (rowIndex === -1 || colIndex === -1 || board[rowIndex][colIndex] === 0) {
      const sum = getSum(candidateArr)
      if (maxSum < sum) {
        maxSum = sum
      }
      return
    }
    const item = board[rowIndex][colIndex]
    board[rowIndex][colIndex] = 0
    candidateArr.push(item)

    backtracking(board, candidateArr, rowIndex, getLeftColIndex(colIndex))
    backtracking(board, candidateArr, rowIndex, getRightColIndex(colIndex))
    backtracking(board, candidateArr, getUpRowIndex(rowIndex), colIndex)
    backtracking(board, candidateArr, getDownRowIndex(rowIndex), colIndex)

    candidateArr.pop()
    board[rowIndex][colIndex] = item
  }

  for (let row = 0; row < rowLen; row += 1) {
    for (let col = 0; col < colLen; col += 1) {
      backtracking(grid, [], row, col)
    }
  }
  return maxSum
}
