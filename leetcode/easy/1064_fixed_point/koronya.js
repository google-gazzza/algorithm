// [Easy] 1064. Fixed Point
// 1064_fixed_point

// https://leetcode.com/problems/fixed-point
// Runtime: 72 ms, faster than 80.65% of JavaScript online submissions for Fixed Point.
// Memory Usage: 39.5 MB, less than 54.84% of JavaScript online submissions for Fixed Point.

/**
 * @param {number[]} arr
 * @return {number}
 */
const fixedPoint = function (arr) {
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (arr[i] === i) {
      return i
    }
  }
  return -1
}

fixedPoint([-10, -5, 0, 3, 7]) //?
fixedPoint([0, 2, 5, 8, 17]) //?
fixedPoint([-10, -5, 3, 4, 7, 9]) //?
