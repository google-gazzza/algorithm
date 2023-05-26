// [Medium] 991. Broken Calculator
// 991_broken_calculator

// https://leetcode.com/problems/broken-calculator
// Runtime: 89 ms, faster than 42.62% of JavaScript online submissions for Broken Calculator.
// Memory Usage: 41.7 MB, less than 80.16% of JavaScript online submissions for Broken Calculator.

/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
const brokenCalc = function (startValue, target) {
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

// brokenCalc(2, 3)
brokenCalc(5, 8)
// brokenCalc(3, 10)
