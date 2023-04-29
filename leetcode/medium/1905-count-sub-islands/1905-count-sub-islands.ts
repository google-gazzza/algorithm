/*
# leetcode/medium/1905. Count Sub Islands
# 1905-count-sub-islands
# URL: https://leetcode.com/problems/count-sub-islands/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function countSubIslands(grid1: number[][], grid2: number[][]): number {
  let count = 0;
  let isRollbackTarget = false;

  function dfsWihtFlag(
    grid1: number[][],
    grid2: number[][],
    i: number,
    j: number,
  ) {
    if (i < 0 || i >= grid2.length || j < 0 || j >= grid2[0].length || grid2[i][j] === 0) {
      return;
    }

    if (grid2[i][j] === 1) {
      grid2[i][j] = 0;
    }

    if (grid1[i][j] === 0) {
      isRollbackTarget = true;
    }

    dfsWihtFlag(grid1, grid2, i - 1, j);
    dfsWihtFlag(grid1, grid2, i + 1, j);
    dfsWihtFlag(grid1, grid2, i, j - 1);
    dfsWihtFlag(grid1, grid2, i, j + 1);
  }

  for (let i = 0; i < grid2.length; i += 1) {
    for (let j = 0; j < grid2[i].length; j += 1) {
      if (grid2[i][j] === 1) {
        isRollbackTarget = false;
        dfsWihtFlag(grid1, grid2, i, j);

        if (!isRollbackTarget) {
          count += 1;
        }
      }
    }
  }

  return count;
}

let grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]];
let grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]];
console.log(countSubIslands(grid1, grid2));
// Output: 3

grid1 = [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]];
grid2 = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]];

console.log(countSubIslands(grid1, grid2));
