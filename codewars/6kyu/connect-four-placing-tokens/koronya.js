// [JS][6kyu] Connect Four - placing tokens
// connect-four-placing-tokens
// https://www.codewars.com/kata/5864f90473bd9c4b47000057/train/javascript

const ROW_SIZE = 6
const COL_SIZE = 7

const connectFourPlaceTokens = (columns) => {
  const board = Array.from({ length: ROW_SIZE }, () => Array(COL_SIZE).fill('-'))
  const getIndex = (col) => {
    for (let row = ROW_SIZE - 1; row >= 0; row--) {
      if (board[row][col] === '-') {
        return row
      }
    }
  }
  columns.forEach((col, index) => {
    board[getIndex(col)][col] = index % 2 === 0 ? 'Y' : 'R'
  })

  return board
}

// connectFourPlaceTokens([0, 1, 2, 5, 6])
// connectFourPlaceTokens([0, 1, 2, 5, 6, 2, 0, 0])
// connectFourPlaceTokens([0, 0, 1, 4, 4, 5, 6, 2, 3, 4, 5, 6, 3, 3, 5, 6])
// connectFourPlaceTokens([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3])
// connectFourPlaceTokens([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6])
