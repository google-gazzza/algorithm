// [Easy] 1275. Find Winner on a Tic Tac Toe Game
// 1275_find_winner_on_a_tic_tac_toe_game

// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game
// Runtime: 72 ms, faster than 89.01% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
// Memory Usage: 38.8 MB, less than 9.34% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
const GRID_N = 3
const LIMIT = GRID_N - 1
const MAX_COUNT = GRID_N * GRID_N
const isSame = (a, b, c) => a === b && b === c
const isFinish = (arr, row, col) => {
  return isSame(arr[row][0], arr[row][1], arr[row][2])
    || isSame(arr[0][col], arr[1][col], arr[2][col])
    || (row === col) && isSame(arr[0][0], arr[1][1], arr[2][2])
    || (row + col === LIMIT) && isSame(arr[0][2], arr[1][1], arr[2][0])
}

const tictactoe = moves => {
  const arr = Array.from(Array(GRID_N), () => Array(GRID_N).fill(''))
  let turn = 'X'
  const movesLen = moves.length
  for (let i = 0; i < movesLen; i = i + 1 | 0) {
    const [row, col] = moves[i]
    arr[row][col] = turn
    if (isFinish(arr, row, col) === true) {
      return turn === 'X' ? 'A' : 'B'
    }
    turn = turn === 'X' ? 'O' : 'X'
  }
  if (movesLen === MAX_COUNT) {
    return 'Draw'
  } else {
    return 'Pending'
  }
}
