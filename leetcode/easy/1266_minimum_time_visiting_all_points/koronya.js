// [Easy] 1266. Minimum Time Visiting All Points
// 1266_minimum_time_visiting_all_points

// https://leetcode.com/problems/minimum-time-visiting-all-points
// Runtime: 68 ms, faster than 79.04% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 37.6 MB, less than 14.06% of JavaScript online submissions for Minimum Time Visiting All Points.
const getDistance = (p1, p2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  const distanceX = Math.abs(x1 - x2)
  const distanceY = Math.abs(y1 - y2)
  return Math.max(distanceX, distanceY)
}

const minTimeToVisitAllPoints = points => {
  let distance = 0
  const limit = points.length - 1
  for (let i = 0; i < limit; i = i + 1 | 0) {
    distance += getDistance(points[i], points[i + 1])
  }
  return distance
}
