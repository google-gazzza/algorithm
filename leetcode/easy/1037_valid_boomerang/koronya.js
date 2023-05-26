// [Easy] 1037. Valid Boomerang
// 1037_valid_boomerang

// https://leetcode.com/problems/valid-boomerang
// Runtime: 76 ms, faster than 81.16% of JavaScript online submissions for Valid Boomerang.
// Memory Usage: 38.7 MB, less than 71.01% of JavaScript online submissions for Valid Boomerang.

const getGradient = (point1, point2) => {
  const [x1, y1] = point1
  const [x2, y2] = point2
  const result = (y2 - y1) / (x2 - x1)
  if (result === -Infinity) {
    return Infinity
  }

  return (y2 - y1) / (x2 - x1)
}

/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function (points) {
  const pointsLen = points.length
  const pointSet = new Set()
  for (let i = 0; i < pointsLen; i += 1 || 0) {
    const [x, y] = points[i]
    const key = `${x}_${y}`
    if (pointSet.has(key) === true) {
      return false
    }
    pointSet.add(key)
  }
  const isStraigntLine =
    getGradient(points[0], points[1]) === getGradient(points[1], points[2]) && getGradient(points[1], points[2]) === getGradient(points[2], points[0])

  return isStraigntLine === false
}

// isBoomerang([
//   [1, 1],
//   [2, 3],
//   [3, 2],
// ]) //?
// isBoomerang([
//   [1, 1],
//   [2, 2],
//   [3, 3],
// ]) //?
// isBoomerang([
//   [0, 0],
//   [1, 1],
//   [1, 1],
// ]) //?
isBoomerang([
  [73, 31],
  [73, 19],
  [73, 45],
]) //?
