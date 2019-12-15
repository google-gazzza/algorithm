// https://leetcode.com/problems/n-queens-ii/
// Runtime: 60 ms, faster than 77.42% of JavaScript online submissions for N-Queens II.
// Memory Usage: 37.4 MB, less than 80.00% of JavaScript online submissions for N-Queens II.
const totalNQueens = function(n) {
  let resultCount = 0
  const backtrack = (n, board = [], candidateRow = 0) => {
    if (candidateRow === n) {
      resultCount += 1
      return
    }
    for (let candidateCol = 0; candidateCol < n; candidateCol += 1) {
      if (board.every((col, row) => {
        return col !== candidateCol && 
          candidateRow - row !== candidateCol - col &&
          row - candidateRow !== candidateCol - col
        })) {
        board.push(candidateCol)
        backtrack(n, board, candidateRow + 1)
        board.pop()
      }
    }
  }

  backtrack(n)
  return resultCount
}
