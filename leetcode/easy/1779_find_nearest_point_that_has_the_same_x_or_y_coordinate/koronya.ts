// [Easy] 1779. Find Nearest Point That Has the Same X or Y Coordinate
// 1779_find_nearest_point_that_has_the_same_x_or_y_coordinate

// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate
// Runtime: 116 ms, faster than 84.62% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
// Memory Usage: 47.3 MB, less than 53.85% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

function nearestValidPoint(x: number, y: number, points: number[][]): number {
  const getDistance = (item: number[]): number => Math.abs(item[0] - x) + Math.abs(item[1] - y)
  let result: number = -1
  let min: number = Number.MAX_SAFE_INTEGER
  const pointsLen: number = points.length
  for (let i: number = 0; i < pointsLen; i += 1) {
    if (points[i][0] === x || points[i][1] === y) {
      const distance: number = getDistance(points[i])
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
