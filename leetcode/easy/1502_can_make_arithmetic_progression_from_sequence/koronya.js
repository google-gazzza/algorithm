// [Easy] 1502. Can Make Arithmetic Progression From Sequence
// 1502_can_make_arithmetic_progression_from_sequence

// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
// Runtime: 80 ms, faster than 73.80% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
// Memory Usage: 38.6 MB, less than 87.86% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
const canMakeArithmeticProgression = function (arr) {
  const arrLen = arr.length
  arr.sort((a, b) => a - b)
  let diff = arr[1] - arr[0]
  let flag = true
  for (let i = 1; i < arrLen - 1; i += 1 || 0) {
    if (diff !== arr[i + 1] - arr[i]) {
      flag = false
      break
    }
  }
  return flag
}
