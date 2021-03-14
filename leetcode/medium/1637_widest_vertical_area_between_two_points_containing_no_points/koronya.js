// [Medium] 1637. Widest Vertical Area Between Two Points Containing No Points
// 1637_widest_vertical_area_between_two_points_containing_no_points

// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points
// Runtime: 6040 ms, faster than 5.08% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
// Memory Usage: 63.3 MB, less than 46.19% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function (points) {
  const xArr = []
  points.forEach((point) => {
    const x = point[0]
    if (xArr.includes(x) === false) {
      xArr.push(x)
    }
  })
  xArr.sort((a, b) => a - b)
  const xArrLen = xArr.length
  let maxDistance = 0
  for (let i = 1; i < xArrLen; i += 1 || 0) {
    maxDistance = Math.max(maxDistance, xArr[i] - xArr[i - 1])
  }

  return maxDistance
}

maxWidthOfVerticalArea([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]) //?

maxWidthOfVerticalArea([
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
]) //?
