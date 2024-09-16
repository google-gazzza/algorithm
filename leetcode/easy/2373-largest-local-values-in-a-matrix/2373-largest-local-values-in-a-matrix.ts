/*
2373-largest-local-values-in-a-matrix
leetcode/easy/2373. Largest Local Values in a Matrix
URL: https://leetcode.com/problems/largest-local-values-in-a-matrix/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function largestLocal(grid: number[][]): number[][] {
  const maxLocal: number[][] = [];

  for (let row = 0; row < grid.length - 2; row += 1) {
    const localGrid: number[] = [];

    for (let column = 0; column < grid[row].length - 2; column += 1) {
      localGrid.push(
        Math.max(
          ...grid[row].slice(column, column + 3),
          ...grid[row + 1].slice(column, column + 3),
          ...grid[row + 2].slice(column, column + 3),
        ),
      );
    }

    maxLocal.push(localGrid);
  }

  return maxLocal;
}

let grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
console.log(largestLocal(grid));
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
//   Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
//
grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
console.log(largestLocal(grid));
// Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
