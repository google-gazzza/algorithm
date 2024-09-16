// [Easy] 1064. Fixed Point
// 1064_fixed_point

// https://leetcode.com/problems/fixed-point
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Fixed Point.
// Memory Usage: 41.2 MB, less than 50.00% of TypeScript online submissions for Fixed Point.

function fixedPoint(arr: number[]): number {
  const arrLen = arr.length
  for (let i: number = 0; i < arrLen; i += 1) {
    if (arr[i] === i) {
      return i
    }
  }
  return -1
}

fixedPoint([-10, -5, 0, 3, 7]) //?
fixedPoint([0, 2, 5, 8, 17]) //?
fixedPoint([-10, -5, 3, 4, 7, 9]) //?
