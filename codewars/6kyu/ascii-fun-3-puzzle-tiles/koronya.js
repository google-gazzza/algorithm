// [JS][6kyu] ASCII Fun #3: Puzzle Tiles
// ascii-fun-3-puzzle-tiles
// https://www.codewars.com/kata/5947d86e07693bcf000000c4/train/javascript

const puzzleTiles = (width, height) => {
  const firstRowFirstLine = `  ${' _( )__'.repeat(width)}`
  const firstRowSecondLine = ` _|${'     _|'.repeat(width)}`
  const firstRowThirdLine = `(_${'   _ (_'.repeat(width)}`
  const firstRowFourthLine = ` |${'__( )_|'.repeat(width)}`
  const firstRow = `${firstRowFirstLine}\n${firstRowSecondLine}\n${firstRowThirdLine}\n${firstRowFourthLine}`

  const oddRowFirstLine = ` |_${'     |_'.repeat(width)}`
  const oddRowSecondLine = `  _)${' _   _)'.repeat(width)}`
  const oddRowThirdLine = ` |${'__( )_|'.repeat(width)}`
  const oddRow = `${oddRowFirstLine}\n${oddRowSecondLine}\n${oddRowThirdLine}`

  const evenRowFirstLine = ` _|${'     _|'.repeat(width)}`
  const evenRowSecondLine = `(_${'   _ (_'.repeat(width)}`
  const evenRowThirdLine = ` |${'__( )_|'.repeat(width)}`
  const evenRow = `${evenRowFirstLine}\n${evenRowSecondLine}\n${evenRowThirdLine}`

  const result = Array.from({ length: height }, (_, index) => (index === 0 ? firstRow : index % 2 === 0 ? evenRow : oddRow)).join('\n')
  return result
}

// puzzleTiles(1, 1) === '   _( )__\n _|     _|\n(_   _ (_\n |__( )_|'
// puzzleTiles(3, 2) ===
//   '   _( )__ _( )__ _( )__\n _|     _|     _|     _|\n(_   _ (_   _ (_   _ (_\n |__( )_|__( )_|__( )_|\n |_     |_     |_     |_\n  _) _   _) _   _) _   _)\n |__( )_|__( )_|__( )_|'
