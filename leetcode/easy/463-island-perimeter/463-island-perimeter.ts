/*
463-island-perimeter
leetcode/easy/463. Island Perimeter
Difficulty: easy
URL: https://leetcode.com/problems/island-perimeter/

NOTE: Description

NOTE: Constraints
  row == grid.length
  col == grid[i].length
  1 <= row, col <= 100
  grid[i][j] is 0 or 1.
  There is exactly one island in grid.

NOTE: Explanation
*/

const countNotConnectedEdges = (grid: number[][], row: number, column: number): number => {
  let count = 0;

  if (row === 0 || grid[row - 1][column] === 0) {
    count += 1;
  }
  if (row >= grid.length - 1 || grid[row + 1][column] === 0) {
    count += 1;
  }
  if (column === 0 || grid[row][column - 1] === 0) {
    count += 1;
  }
  if (column >= grid[row].length - 1 || grid[row][column + 1] === 0) {
    count += 1;
  }

  return count;
};

function islandPerimeter(grid: number[][]): number {
  let countSum = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex += 1) {
      if (grid[rowIndex][columnIndex] === 1) {
        countSum += countNotConnectedEdges(grid, rowIndex, columnIndex);
      }
    }
  }

  return countSum;
}

let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
console.log(islandPerimeter(grid));
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
grid = [[1]];
console.log(islandPerimeter(grid));
// Output: 4

// Example 3:
let grid = [[1, 0]];
console.log(islandPerimeter(grid));
// Output: 4
