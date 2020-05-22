// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum
// Runtime: 56 ms, faster than 59.52% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 32.9 MB, less than 100.00% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
const minStartValue = nums => {
  let min = Number.MAX_SAFE_INTEGER
  nums.reduce((acc, cur) => {
    const value = acc + cur
    if (min > value) {
      min = value
    }
    return value
  }, 0)

  return min >= 1 ? 1 : 1 - min
}
