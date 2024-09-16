// [Medium] 130. Surrounded Regions
// 130_surrounded_regions

// https://leetcode.com/problems/surrounded-regions
// Runtime: 84 ms, faster than 86.85% of JavaScript online submissions for Surrounded Regions.
// Memory Usage: 40.5 MB, less than 88.66% of JavaScript online submissions for Surrounded Regions.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  const rowLen = board.length
  if (rowLen === 0) {
    return
  }
  const colLen = board[0].length
  const lastRow = rowLen - 1
  const lastCol = colLen - 1
  const dfs = (i, j) => {
    if (i < 0 || i >= rowLen || j < 0 || j >= colLen || board[i][j] === '*' || board[i][j] === 'X') {
      return
    }
    board[i][j] = '*'
    dfs(i, j - 1)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i + 1, j)
    return
  }

  for (let i = 0; i < colLen; i = i + 1 | 0) {
    if (board[0][i] === 'O') {
      dfs(0, i)
    }
    if (board[lastRow][i] === 'O') {
      dfs(lastRow, i)
    }
  }
  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    if (board[i][0] === 'O') {
      dfs(i, 0)
    }
    if (board[i][lastCol] === 'O') {
      dfs(i, lastCol)
    }
  }

  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      if (board[i][j] === '*') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }
}
