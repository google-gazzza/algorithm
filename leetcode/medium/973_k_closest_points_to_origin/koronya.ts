// [Medium] 973. K Closest Points to Origin
// 973_k_closest_points_to_origin

// https://leetcode.com/problems/k-closest-points-to-origin
// Runtime: 180 ms, faster than 96.43% of TypeScript online submissions for K Closest Points to Origin.
// Memory Usage: 50.5 MB, less than 55.36% of TypeScript online submissions for K Closest Points to Origin.

interface IDistanceArr {
  point: number[]
  distance: number
}
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest(points: number[][], K: number): number[][] {
  const withDistanceArr: IDistanceArr[] = points.map((point) => {
    const [x, y] = point
    return { point, distance: x * x + y * y }
  })
  withDistanceArr.sort((a, b) => a.distance - b.distance)
  return withDistanceArr.slice(0, K).map((item) => item.point)
}
