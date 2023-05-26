/*
1260-shift-2d-grid
leetcode/easy/1260. Shift 2D Grid
URL: https://leetcode.com/problems/shift-2d-grid/

NOTE: Description

NOTE: Constraints
  - m == grid.length
  - n == grid[i].length
  - 1 <= m <= 50
  - 1 <= n <= 50
  - -1000 <= grid[i][j] <= 1000
  - 0 <= k <= 100

NOTE: Explanation
*/

function shiftGrid(grid: number[][], k: number): number[][] {
  while (k) {
    grid.forEach((row, i) => {
      grid[(i + 1) % grid.length].unshift(row.pop());
    });
    k--;
  }

  return grid;
};

let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let k = 1;
console.log(shiftGrid(grid, k));
// Output: [[9,1,2],[3,4,5],[6,7,8]]

grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]];
k = 4;
console.log(shiftGrid(grid, k));
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
k = 9;
console.log(shiftGrid(grid, k));
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
