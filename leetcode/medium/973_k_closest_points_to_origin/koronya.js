// [Medium] 973. K Closest Points to Origin
// 973_k_closest_points_to_origin

// https://leetcode.com/problems/k-closest-points-to-origin
// Runtime: 180 ms, faster than 82.92% of JavaScript online submissions for K Closest Points to Origin.
// Memory Usage: 49.3 MB, less than 62.33% of JavaScript online submissions for K Closest Points to Origin.

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  const withDistanceArr = points.map((point) => {
    const [x, y] = point
    return { point, distance: x * x + y * y }
  })
  withDistanceArr.sort((a, b) => a.distance - b.distance)
  return withDistanceArr.slice(0, K).map((item) => item.point)
}
