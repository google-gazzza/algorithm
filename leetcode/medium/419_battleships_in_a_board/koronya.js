
// Runtime: 56 ms, faster than 93.75% of JavaScript online submissions for Battleships in a Board.
// Memory Usage: 35.9 MB, less than 66.67% of JavaScript online submissions for Battleships in a Board.
const countBattleships = board => {
  const rowLen = board.length
  const colLen = board[0].length
  let count = 0
  const validX = (row, col) => {
    return board[row][col] === 'X'
      && (row === 0 || board[row - 1][col] !== 'X') 
      && (col === 0 || board[row][col - 1] !== 'X')
  }

  for (let row = 0; row < rowLen; row = row + 1 | 0) {
    for (let col = 0; col < colLen; col = col + 1 | 0) {
      if (validX(row, col) === true) {
        count += 1
      }
    }
  }
  return count
}

