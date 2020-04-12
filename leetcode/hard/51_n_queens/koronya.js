// https://leetcode.com/problems/n-queens
// Runtime: 64 ms, faster than 88.79% of JavaScript online submissions for N-Queens.
// Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for N-Queens.
const solveNQueens = function(n) {
  const resultArr = []
  const backtrack = (n, board = [], candidateRow = 0) => {
    if (candidateRow === n) {
      resultArr.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c)))
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
  return resultArr
}
