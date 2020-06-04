// https://leetcode.com/problems/find-the-distance-value-between-two-arrays
// Runtime: 72 ms, faster than 39.07% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
// Memory Usage: 36.4 MB, less than 100.00% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
const findTheDistanceValue = (arr1, arr2, d) => {
  return arr1.reduce((count, num1) => arr2.every(num2 => Math.abs(num2 - num1) > d) ? count + 1 : count, 0)
}
