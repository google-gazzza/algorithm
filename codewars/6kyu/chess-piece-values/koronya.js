// [JS][6kyu] Chess piece values
// chess-piece-values
// https://www.codewars.com/kata/5832514f64a4cecd1c000013/train/javascript

const valueMap = new Map([
  ['queen', 9],
  ['rook', 5],
  ['bishop', 3],
  ['knight', 3],
  ['pawn', 1],
  ['king', 0],
])

const piecesValue = (arr, s) => {
  const validCellList = []
  arr.forEach((row) =>
    row.forEach((cell) => {
      if (cell !== ' ') {
        validCellList.push(cell)
      }
    }),
  )
  const filterFlag = s === 'white' ? 'w-' : 'b-'
  const filteredCellList = validCellList.filter((cell) => cell.startsWith(filterFlag)).map((cell) => cell.split('-')[1])
  const totalValue = filteredCellList.reduce((acc, cell) => acc + (valueMap.get(cell) || 0), 0)

  return totalValue
}

const r1 = [
  ['b-bishop', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'b-queen', ' ', ' ', ' ', ' ', 'w-queen'],
  [' ', 'b-king', ' ', 'b-pawn', 'w-rook', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'w-pawn', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'w-bishop', ' ', ' '],
  ['w-king', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'b-pawn', 'b-pawn', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]
const r2 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'b-king', ' ', ' '],
  [' ', 'b-knight', ' ', ' ', 'w-pawn', ' ', ' ', ' '],
  [' ', ' ', 'w-bishop', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'w-pawn', ' ', ' ', ' ', 'w-pawn', ' ', ' '],
  [' ', ' ', ' ', ' ', 'b-pawn', ' ', ' ', ' '],
  [' ', 'w-rook', ' ', ' ', ' ', 'w-king', ' ', ' '],
]
const r3 = [
  [' ', ' ', ' ', ' ', 'b-king', ' ', ' ', ' '],
  [' ', 'b-bishop', ' ', ' ', 'b-pawn', 'b-pawn', ' ', ' '],
  [' ', ' ', ' ', ' ', 'b-knight', ' ', ' ', ' '],
  [' ', ' ', 'w-queen', ' ', ' ', ' ', ' ', ' '],
  [' ', 'w-bishop', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'b-rook'],
  [' ', 'w-pawn', 'w-pawn', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'w-king', ' ', ' ', ' ', ' ', ' '],
]
piecesValue(r1, 'white') === 18
piecesValue(r1, 'black') === 15
piecesValue(r2, 'white') === 11
piecesValue(r2, 'black') === 4
piecesValue(r3, 'white') === 14
piecesValue(r3, 'black') === 13
