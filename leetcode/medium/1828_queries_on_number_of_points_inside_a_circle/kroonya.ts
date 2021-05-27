// [Medium] 1828. Queries on Number of Points Inside a Circle
// 1828_queries_on_number_of_points_inside_a_circle

// https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle
// Runtime: 140 ms, faster than 62.00% of TypeScript online submissions for Queries on Number of Points Inside a Circle.
// Memory Usage: 42.8 MB, less than 36.00% of TypeScript online submissions for Queries on Number of Points Inside a Circle.

// const getDistance = (x1, y1, x2, y2) => Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2))
const getDistance = (x1: number, y1: number, x2: number, y2: number): number => Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2)

function countPoints(points: number[][], queries: number[][]): number[] {
  return queries.map((query) => {
    const [x, y, r] = query
    return points.reduce((acc, cur) => (getDistance(cur[0], cur[1], x, y) <= r ? acc + 1 : acc), 0)
  })
}

// countPoints(
//   [
//     [1, 3],
//     [3, 3],
//     [5, 3],
//     [2, 2],
//   ],
//   [
//     [2, 3, 1],
//     [4, 3, 1],
//     [1, 1, 2],
//   ],
// ) //?

countPoints(
  [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ],
  [
    // [1, 2, 2],
    // [2, 2, 2],
    [4, 3, 2],
    // [4, 3, 3],
  ],
) //?
