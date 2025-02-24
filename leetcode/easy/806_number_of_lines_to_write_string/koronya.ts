// [Easy] 806. Number of Lines To Write String
// 806_number_of_lines_to_write_string

// https://leetcode.com/problems/number-of-lines-to-write-string
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Number of Lines To Write String.
// Memory Usage: 39.9 MB, less than 100.00% of TypeScript online submissions for Number of Lines To Write String.
const CHAR_CODE_OF_LOWER_A: number = 'a'.charCodeAt(0)
const MAX_UNIT_OF_LINE: number = 100

function numberOfLines (widths: number[], S: string): number[] {
  const getWidth = (str: string): number => widths[str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A]
  const SLen: number = S.length
  let lines: number = 1
  let units: number = 0
  for (let i: number = 0; i < SLen; i += 1 || 0) {
    const unit: number = getWidth(S[i])
    if (units + unit > MAX_UNIT_OF_LINE) {
      lines += 1
      units = unit
    } else {
      units += unit
    }
  }

  return [lines, units]
}
