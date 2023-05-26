// https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation
// Runtime: 92 ms, faster than 33.02% of JavaScript online submissions for Find Positive Integer Solution for a Given Equation.
// Memory Usage: 35.9 MB, less than 26.88% of JavaScript online submissions for Find Positive Integer Solution for a Given Equation.

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
const findSolution = (customfunction, z) => {
  const resultArr = []
  const LIMIT = 1000
  let x = 1
  let y = LIMIT
  while (x <= LIMIT && y >= 1) {
    const val = customfunction.f(x, y)
    if (val === z) {
      resultArr.push([x, y])
    }
    if (val < z) {
      x += 1
    } else {
      y -= 1
    }
  }

  return resultArr
}
