// [Easy] 806. Number of Lines To Write String
// 806_number_of_lines_to_write_string

// https://leetcode.com/problems/number-of-lines-to-write-string
// Runtime: 76 ms, faster than 88.71% of JavaScript online submissions for Number of Lines To Write String.
// Memory Usage: 38.2 MB, less than 91.94% of JavaScript online submissions for Number of Lines To Write String.
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const MAX_UNIT_OF_LINE = 100

const numberOfLines = function (widths, S) {
  const getWidth = str => widths[str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A]
  const SLen = S.length
  let lines = 1
  let units = 0
  for (let i = 0; i < SLen; i += 1 || 0) {
    const unit = getWidth(S[i])
    if (units + unit > MAX_UNIT_OF_LINE) {
      lines += 1
      units = unit
    } else {
      units += unit
    }
  }

  return [lines, units]
}
