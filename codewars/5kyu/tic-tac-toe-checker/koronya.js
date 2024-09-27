// [JS][5kyu] Tic-Tac-Toe Checker
// tic-tac-toe-checker
// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

const getZeroCount = (board) => {
  const flatBoard = [...board[0], ...board[1], ...board[2]]
  return flatBoard.filter((cell) => cell === 0).length
}

const getHorizontalLine = (board, row) => {
  return board[row]
}

const getVerticalLine = (board, col) => {
  return board.map((row) => row[col])
}

const getDiagonalLineList = (board) => [
  [board[0][0], board[1][1], board[2][2]],
  [board[0][2], board[1][1], board[2][0]],
]

const getWinnerOfLine = (line) => {
  const first = line[0]
  if (first === 0) {
    return 0
  }
  return line.every((cell) => cell === first) ? first : 0
}

const isSolved = (board) => {
  const winnerHorizontalList = board.map((_, row) => getWinnerOfLine(getHorizontalLine(board, row)))
  const winnerVerticalList = board.map((_, col) => getWinnerOfLine(getVerticalLine(board, col)))
  const winnerDiagonalList = getDiagonalLineList(board).map((line) => getWinnerOfLine(line))
  const winnerList = [...winnerHorizontalList, ...winnerVerticalList, ...winnerDiagonalList].filter((winner) => winner !== 0)
  const uniqueWinnerList = [...new Set(winnerList)]
  const uniqueWinnerListLen = uniqueWinnerList.length
  return uniqueWinnerListLen > 1 ? 0 : uniqueWinnerListLen === 1 ? uniqueWinnerList[0] : getZeroCount(board) > 0 ? -1 : 0
}

isSolved([
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
]) === -1

// isSolved([
//   [1, 1, 1],
//   [2, 2, 2],
//   [1, 1, 1],
// ])

// isSolved([
//   [2, 1, 1],
//   [0, 1, 1],
//   [2, 2, 2],
// ])

// isSolved([
//   [2, 2, 2],
//   [0, 1, 1],
//   [1, 0, 0],
// ]) === 2

// isSolved([
//   [2, 0, 2],
//   [2, 1, 1],
//   [1, 2, 1],
// ])

isSolved([
  [2, 1, 2],
  [2, 1, 1],
  [1, 2, 1],
])
