// [Medium] 991. Broken Calculator
// 991_broken_calculator

// https://leetcode.com/problems/broken-calculator
// Runtime: 74 ms, faster than 78.26% of TypeScript online submissions for Broken Calculator.
// Memory Usage: 43.1 MB, less than 39.13% of TypeScript online submissions for Broken Calculator.

function brokenCalc(startValue: number, target: number): number {
  let count = 0
  while (target > startValue) {
    count += 1
    if (target % 2 === 0) {
      target /= 2
    } else {
      target += 1
    }
  }
  count += startValue - target

  return count
}
