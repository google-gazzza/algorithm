/*
883-projection-area-of-3d-shapes
leetcode/easy/883. Projection Area of 3D Shapes
URL: https://leetcode.com/problems/projection-area-of-3d-shapes/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function projectionArea(grid: number[][]): number {
  let topViewArea = 0;
  let frontViewArea = 0;
  let sideViewArea = 0;

  for (let i = 0; i < grid.length; i += 1) {
    const column: number[] = [];

    for (let j = 0; j < grid[i].length; j += 1) {
      column.push(grid[j][i]);
    }

    frontViewArea += Math.max(...column);
    sideViewArea += Math.max(...grid[i]);
    topViewArea += grid[i].filter((value) => value > 0).length;
  }

  return topViewArea + frontViewArea + sideViewArea;
}

let grid = [[1, 2], [3, 4]];
console.log(projectionArea(grid));
// Output: 17
// Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
//   Example 2:

grid = [[2]];
console.log(projectionArea(grid));
// Output: 5
// Example 3:

grid = [[1, 0], [0, 2]];
console.log(projectionArea(grid));
// Output: 8
