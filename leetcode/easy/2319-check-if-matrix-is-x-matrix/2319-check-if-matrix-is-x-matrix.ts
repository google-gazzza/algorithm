/*
2319-check-if-matrix-is-x-matrix
leetcode/easy/2319. Check if Matrix Is X-Matrix
URL: https://leetcode.com/problems/check-if-matrix-is-x-matrix/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function checkXMatrix(grid: number[][]): boolean {
  let position = 0;

  for (let row = 0; row < grid.length; row += 1) {
    if (grid[row][position] === 0) {
      return false;
    }
    if (grid[row][grid.length - 1 - position] === 0) {
      return false;
    }
    grid[row][position] = 0;
    grid[row][grid.length - 1 - position] = 0;
    position += 1;
  }

  return grid.reduce((acc, row) => {
    return acc + row.reduce((acc, column) => acc + column, 0);
  }, 0) === 0;
}


let grid = [[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]];
console.log(checkXMatrix(grid));
// Output: true
// Explanation: Refer to the diagram above.
//   An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is an X-Matrix.

grid = [[5, 7, 0], [0, 3, 1], [0, 5, 0]];
console.log(checkXMatrix(grid));
// Output: false
// Explanation: Refer to the diagram above.
//   An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is not an X-Matrix.

grid = [
  [2, 0, 0, 0, 1],
  [0, 4, 0, 1, 5],
  [0, 0, 5, 0, 0],
  [0, 5, 0, 2, 0],
  [4, 0, 0, 0, 2],
];

console.log(checkXMatrix(grid));
