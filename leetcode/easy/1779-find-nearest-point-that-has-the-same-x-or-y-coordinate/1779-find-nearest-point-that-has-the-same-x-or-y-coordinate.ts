/*
1779-find-nearest-point-that-has-the-same-x-or-y-coordinate
leetcode/easy/ 1779. Find Nearest Point That Has the Same X or Y Coordinate
URL: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let candidates = [];

  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];

    if (x1 === x || y1 === y) {
      candidates.push({
        cooredinates: [x1, y1],
        index: i,
        distance: Math.abs(x1 - x) + Math.abs(y1 - y),
      });
    }
  }

  if (candidates.length === 0) {
    return -1;
  }

  candidates.sort((a, b) => a.distance - b.distance);

  return candidates.filter((c) => c.distance === candidates[0].distance)
    .sort((a, b) => a.index - b.index)
    .shift().index;
};

let x = 3;
let y = 4;
let points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]];
// Output: 2
console.log(nearestValidPoint(x, y, points));
//?