// [Easy] 1502. Can Make Arithmetic Progression From Sequence
// 1502_can_make_arithmetic_progression_from_sequence

// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Can Make Arithmetic Progression From Sequence.
// Memory Usage: 40 MB, less than 75.00% of TypeScript online submissions for Can Make Arithmetic Progression From Sequence.
function canMakeArithmeticProgression (arr: number[]): boolean {
  const arrLen: number = arr.length
  arr.sort((a: number, b: number): number => a - b)
  let diff: number = arr[1] - arr[0]
  let flag: boolean = true
  for (let i: number = 1; i < arrLen - 1; i += 1 || 0) {
    if (diff !== arr[i + 1] - arr[i]) {
      flag = false
      break
    }
  }
  return flag
}
