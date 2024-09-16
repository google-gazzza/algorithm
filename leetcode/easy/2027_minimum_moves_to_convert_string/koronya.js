// [Easy] 2027. Minimum Moves to Convert String
// 2027_minimum_moves_to_convert_string

// https://leetcode.com/problems/minimum-moves-to-convert-string
// Runtime: 68 ms, faster than 95.56% of JavaScript online submissions for Minimum Moves to Convert String.
// Memory Usage: 39.1 MB, less than 37.78% of JavaScript online submissions for Minimum Moves to Convert String.

/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = function (s) {
  const sLen = s.length
  let count = 0
  let index = 0
  while (index < sLen) {
    const str = s[index]
    if (str === 'X') {
      count += 1
      index += 2
    }
    index += 1
  }
  return count
}

minimumMoves('XXX') //?
minimumMoves('XXOX') //?
minimumMoves('OOOO') //?
minimumMoves('OXOX') //?
