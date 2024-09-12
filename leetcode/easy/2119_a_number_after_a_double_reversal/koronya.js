// [Easy] 2119. A Number After a Double Reversal
// 2119_a_number_after_a_double_reversal

// https://leetcode.com/problems/a-number-after-a-double-reversal
// Runtime: 68 ms, faster than 96.85% of JavaScript online submissions for A Number After a Double Reversal.
// Memory Usage: 39 MB, less than 17.32% of JavaScript online submissions for A Number After a Double Reversal.

const getReverseNumber = (num) =>
  Number(
    String(num)
      .split('')
      .reverse()
      .reduce((acc, cur) => acc + cur, ''),
  )

/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function (num) {
  const reverseNumber = getReverseNumber(num)
  return num === getReverseNumber(reverseNumber)
}

isSameAfterReversals(526) //?
isSameAfterReversals(1800) //?
isSameAfterReversals(0) //?
