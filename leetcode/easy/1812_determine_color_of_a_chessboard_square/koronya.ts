// [Easy] 1812. Determine Color of a Chessboard Square
// 1812_determine_color_of_a_chessboard_square

// https://leetcode.com/problems/determine-color-of-a-chessboard-square
// Runtime: 80 ms, faster than 92.11% of TypeScript online submissions for Determine Color of a Chessboard Square.
// Memory Usage: 40.2 MB, less than 52.63% of TypeScript online submissions for Determine Color of a Chessboard Square.
function squareIsWhite(coordinates: string): boolean {
  const row: string = coordinates[0]
  const col: number = Number(coordinates[1])
  return row.charCodeAt(0) % 2 === 0 ? col % 2 !== 0 : col % 2 === 0
}

squareIsWhite('a1') //?
squareIsWhite('h3') //?
squareIsWhite('c7') //?
