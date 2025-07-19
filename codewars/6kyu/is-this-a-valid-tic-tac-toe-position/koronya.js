// [JS][6kyu] Is this a valid Tic Tac Toe position?
// is-this-a-valid-tic-tac-toe-position
// https://www.codewars.com/kata/68582183cf16719a5ba943df/train/javascript

const isWin = (board, player) =>
  board.some((row) => row === player.repeat(3)) ||
  (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
  (board[0][2] === player && board[1][1] === player && board[2][0] === player) ||
  (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
  (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
  (board[0][2] === player && board[1][2] === player && board[2][2] === player)

const isValid = (board) => {
  const countX = board.join('').split('X').length - 1
  const countO = board.join('').split('O').length - 1
  if (countX < countO || countX > countO + 1) {
    return false
  }
  const winX = isWin(board, 'X')
  const winO = isWin(board, 'O')
  if (winX && winO) {
    return false
  }
  if (winX && countX === countO) {
    return false
  }
  if (winO && countX > countO) {
    return false
  }

  return true
}

// isValid(['XOX', 'XOX', 'OXO']) === true
// isValid(['OOO', 'XXX', '__X']) === false
// isValid(['XXO', 'OOX', 'XOO']) === false
// isValid(['XXX', 'OOX', 'OOX']) === true
