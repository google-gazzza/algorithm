// [Medium] 1637. Widest Vertical Area Between Two Points Containing No Points
// 1637_widest_vertical_area_between_two_points_containing_no_points

// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points
// Runtime: 6040 ms, faster than 7.14% of TypeScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
// Memory Usage: 63.2 MB, less than 14.29% of TypeScript online submissions for Widest Vertical Area Between Two Points Containing No Points.

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points: number[][]): number {
  const xArr: number[] = []
  points.forEach((point) => {
    const x: number = point[0]
    if (xArr.includes(x) === false) {
      xArr.push(x)
    }
  })
  xArr.sort((a, b) => a - b)
  const xArrLen: number = xArr.length
  let maxDistance: number = 0
  for (let i: number = 1; i < xArrLen; i += 1) {
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
