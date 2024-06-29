// [JS][6kyu] Checkered Board
// checkered-board
// https://www.codewars.com/kata/5650f1a6075b3284120000c0/train/javascript

const checkeredBoard = (dimension) => {
  const isOdd = dimension % 2 === 1
  const firstSquare = isOdd ? '■' : '□'
  const secondSquare = isOdd ? '□' : '■'
  const oddLine = Array.from({ length: dimension }, (_, index) => {
    return index % 2 === 1 ? secondSquare : firstSquare
  }).join(' ')
  const evenLine = Array.from({ length: dimension }, (_, index) => {
    return index % 2 === 1 ? firstSquare : secondSquare
  }).join(' ')

  return Array.from({ length: dimension }, (_, index) => {
    return index % 2 === 0 ? oddLine : evenLine
  }).join('\n')
}

// checkeredBoard(2) === '□ ■\n■ □'
// checkeredBoard(10) ===
//   '□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □'

// checkeredBoard(3) === '■ □ ■\n□ ■ □\n■ □ ■'
// checkeredBoard(7) === '■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■'
