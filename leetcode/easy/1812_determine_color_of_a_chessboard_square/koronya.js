// [Easy] 1812. Determine Color of a Chessboard Square
// 1812_determine_color_of_a_chessboard_square

// https://leetcode.com/problems/determine-color-of-a-chessboard-square
// Runtime: 72 ms, faster than 93.73% of JavaScript online submissions for Determine Color of a Chessboard Square.
// Memory Usage: 38.6 MB, less than 47.81% of JavaScript online submissions for Determine Color of a Chessboard Square.

/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function (coordinates) {
  const row = coordinates[0]
  const col = Number(coordinates[1])
  return row.charCodeAt(0) % 2 === 0 ? col % 2 !== 0 : col % 2 === 0
}

squareIsWhite('a1') //?
squareIsWhite('h3') //?
squareIsWhite('c7') //?
