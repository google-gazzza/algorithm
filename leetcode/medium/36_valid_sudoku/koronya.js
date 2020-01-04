// https://leetcode.com/problems/valid-sudoku
// Runtime: 60 ms, faster than 99.53% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Valid Sudoku.
const arrLen = 9
const checkValid = (item, itemSet) => {
  if (item === '.') {
    return true
  }
  if (itemSet.has(item)) {
    return false
  }
  itemSet.add(item)
  return true
}
const isValidSudoku = board => {
  const rowSet = new Set()
  const colSet = new Set()
  const diagonalSet = new Set()
  
  for (let i = 0; i < arrLen; i += 1) {
    for (let j = 0; j < arrLen; j += 1) {
      const rowItem = board[j][i]
      const colItem = board[i][j]
      const diagonalItem = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]
      if (!(checkValid(rowItem, rowSet)
        && checkValid(colItem, colSet)
        && checkValid(diagonalItem, diagonalSet)
      )) {
        return false
      }
    }
    rowSet.clear()
    colSet.clear()
    diagonalSet.clear()
  }

  return true
}
