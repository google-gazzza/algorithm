// [Easy] 2119. A Number After a Double Reversal
// 2119_a_number_after_a_double_reversal

// https://leetcode.com/problems/a-number-after-a-double-reversal
// Runtime: 84 ms, faster than 76.47% of TypeScript online submissions for A Number After a Double Reversal.
// Memory Usage: 40.7 MB, less than 17.65% of TypeScript online submissions for A Number After a Double Reversal.

const getReverseNumber = (num: number): number =>
  Number(
    String(num)
      .split('')
      .reverse()
      .reduce((acc, cur) => acc + cur, ''),
  )

function isSameAfterReversals(num: number): boolean {
  const reverseNumber = getReverseNumber(num)
  return num === getReverseNumber(reverseNumber)
}
