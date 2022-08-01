/*
2352-equal-row-and-column-pairs
leetcode/medium/2352. Equal Row and Column Pairs
URL: https://leetcode.com/problems/equal-row-and-column-pairs/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function equalPairs(grid: number[][]): number {
  const sortedGridRows: string[] = [];
  const sortedGridColumns: string[] = [];

  for (let i = 0; i < grid.length; i += 1) {
    sortedGridRows.push(grid[i].toString());

    const colums: number[] = [];
    for (let j = 0; j < grid[i].length; j += 1) {
      colums.push(grid[j][i]);
    }
    sortedGridColumns.push(colums.toString());
  }

  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (sortedGridRows[i] === sortedGridColumns[j]) {
        count += 1;
      }
    }
  }

  return count;
}

let grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]];
console.log(equalPairs(grid));
// Output: 1
// Explanation: There is 1 equal row and column pair:
//   - (Row 2, Column 1): [2,7,7]

grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]];
console.log(equalPairs(grid));
// Output: 3

grid = [[3, 1, 2, 2], [1, 4, 4, 4], [2, 4, 2, 2], [2, 5, 2, 2]];
console.log(equalPairs(grid));
// Explanation: There are 3 equal row and column pairs:
//   - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]
