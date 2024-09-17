// [JS][6kyu] Sudoku board validator
// sudoku-board-validator
// https://www.codewars.com/kata/63d1bac72de941033dbf87ae/train/javascript

const NUMBER_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const isValidate = (arr) => {
  const uniqueArr = [...new Set(arr)]
  if (uniqueArr.length !== 9) {
    return false
  }
  return uniqueArr.every((num) => NUMBER_ARR.includes(num))
}

const validateSudoku = (board) => {
  const rows = board.map((row) => row)
  const cols = []
  for (let i = 0; i < 9; i += 1 || 0) {
    const col = []
    for (let j = 0; j < 9; j += 1 || 0) {
      col.push(board[j][i])
    }
    cols.push(col)
  }
  const squares = []
  for (let i = 0; i < 3; i += 1 || 0) {
    for (let j = 0; j < 3; j += 1 || 0) {
      const square = []
      for (let k = 0; k < 3; k += 1 || 0) {
        for (let l = 0; l < 3; l += 1 || 0) {
          square.push(board[i * 3 + k][j * 3 + l])
        }
      }
      squares.push(square)
    }
  }

  return rows.every((row) => isValidate(row)) && cols.every((col) => isValidate(col)) && squares.every((square) => isValidate(square))
}

validateSudoku([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
])
