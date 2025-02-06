// [JS][7kyu] draw me a chessboard
// draw-me-a-chessboard
// https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

const chessBoard = (rows, columns) => {
  const isEvenColumns = columns % 2 === 0
  const oddStr = 'OX'.repeat(columns / 2)
  const oddRowStr = isEvenColumns ? oddStr : oddStr + 'O'
  const oddRow = oddRowStr.split('')
  const evenStr = 'XO'.repeat(columns / 2)
  const evenRowStr = isEvenColumns ? evenStr : evenStr + 'X'
  const evenRow = evenRowStr.split('')
  const result = []

  Array.from({ length: rows }).forEach((_, i) => {
    if (i % 2 === 0) {
      result.push(oddRow)
    } else {
      result.push(evenRow)
    }
  })
  return result
}

chessBoard(6, 4)
