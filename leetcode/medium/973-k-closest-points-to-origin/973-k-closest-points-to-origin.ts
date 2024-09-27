/*
973-k-closest-points-to-origin
leetcode/medium/973. K Closest Points to Origin
URL: https://leetcode.com/problems/k-closest-points-to-origin/

NOTE: Description
NOTE: Constraints
  - 1 <= k <= points.length <= 104
  - -104 < xi, yi < 104

NOTE: Explanation
*/

function kClosest(points: number[][], k: number): number[][] {
  const parsedPoints = points.map(([x, y]) => {
    return {
      distance: Math.sqrt(x ** 2 + y ** 2),
      coordinates: [x, y],
    };
  });

  parsedPoints.sort((a, b) => a.distance - b.distance);

  return parsedPoints.slice(0, k).map(({ coordinates }) => coordinates);
};

let points = [[1, 3], [-2, 2]];
let k = 1;
console.log(kClosest(points, k));
// Output: [[-2,2]]
// Explanation:
//   The distance between (1, 3) and the origin is sqrt(10).
//   The distance between (-2, 2) and the origin is sqrt(8).
//   Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
//   We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
//   Example 2:
//
points = [[3, 3], [5, -1], [-2, 4]];
k = 2;
console.log(kClosest(points, k));
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

