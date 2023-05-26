// [Easy] 2027. Minimum Moves to Convert String
// 2027_minimum_moves_to_convert_string

// https://leetcode.com/problems/minimum-moves-to-convert-string
// Runtime: 72 ms, faster than 92.86% of TypeScript online submissions for Minimum Moves to Convert String.
// Memory Usage: 41.1 MB, less than 10.71% of TypeScript online submissions for Minimum Moves to Convert String.

function minimumMoves(s: string): number {
  const sLen: number = s.length
  let count: number = 0
  let index: number = 0
  while (index < sLen) {
    const str: string = s[index]
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
