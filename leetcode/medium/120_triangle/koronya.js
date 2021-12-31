// [Medium] 120. Triangle
// 120_triangle

// https://leetcode.com/problems/triangle
// Runtime: 72 ms, faster than 91.23% of JavaScript online submissions for Triangle.
// Memory Usage: 40.6 MB, less than 39.61% of JavaScript online submissions for Triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const height = triangle.length
  let prevSumArr = triangle[height - 1]
  for (let row = height - 2; row >= 0; row -= 1 || 0) {
    const colArr = triangle[row]
    const colLen = colArr.length
    const nowSumArr = []
    for (let col = 0; col < colLen; col += 1 || 0) {
      nowSumArr.push(Math.min(prevSumArr[col], prevSumArr[col + 1]) + colArr[col])
    }
    prevSumArr = nowSumArr
  }

  return prevSumArr[0]
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]) //?
minimumTotal([[-10]]) //?
