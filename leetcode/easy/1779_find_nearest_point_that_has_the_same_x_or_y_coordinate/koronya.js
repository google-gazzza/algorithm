// [Easy] 1779. Find Nearest Point That Has the Same X or Y Coordinate
// 1779_find_nearest_point_that_has_the_same_x_or_y_coordinate

// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate
// Runtime: 108 ms, faster than 85.00% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
// Memory Usage: 46.7 MB, less than 58.33% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function (x, y, points) {
  const getDistance = (item) => Math.abs(item[0] - x) + Math.abs(item[1] - y)
  let result = -1
  let min = Number.MAX_SAFE_INTEGER
  const pointsLen = points.length
  for (let i = 0; i < pointsLen; i += 1 || 0) {
    if (points[i][0] === x || points[i][1] === y) {
      const distance = getDistance(points[i])
      if (min > distance) {
        min = distance
        result = i
      }
    }
  }

  return result
}

nearestValidPoint(3, 4, [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4],
]) //?

nearestValidPoint(3, 4, [[3, 4]]) //?
nearestValidPoint(3, 4, [[2, 3]]) //?
nearestValidPoint(1, 1, [
  [1, 2],
  [3, 3],
  [3, 3],
]) //?
