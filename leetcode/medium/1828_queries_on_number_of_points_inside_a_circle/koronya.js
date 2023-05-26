// [Medium] 1828. Queries on Number of Points Inside a Circle
// 1828_queries_on_number_of_points_inside_a_circle

// https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle
// Runtime: 136 ms, faster than 51.68% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
// Memory Usage: 41.7 MB, less than 33.07% of JavaScript online submissions for Queries on Number of Points Inside a Circle.

// const getDistance = (x1, y1, x2, y2) => Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2))
const getDistance = (x1, y1, x2, y2) => Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2)

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = function (points, queries) {
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
