/*
1380-lucky-numbers-in-a-matrix
leetcode/easy/1380. Lucky Numbers in a Matrix
URL: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
NOTE: Description

NOTE: Constraints
  - m == mat.length
  - n == mat[i].length
  - 1 <= n, m <= 50
  - 1 <= matrix[i][j] <= 105.
  - All elements in the matrix are distinct.

NOTE: Explanation
*/

function findMaxColumn(matrix: number[][], columnIndex: number): number {
  const column: number[] = [];

  matrix.forEach((row) => {
    column.push(row[columnIndex]);
  });

  return Math.max(...column);
}

function luckyNumbers(matrix: number[][]): number[] {
  const target: number[] = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const rowMinIndex = matrix[i].indexOf(Math.min(...matrix[i]));

    for (let j = 0; j < matrix[i].length; j += 1) {
      const maxColumn = findMaxColumn(matrix, j);

      if (matrix[i][rowMinIndex] === maxColumn) {
        target.push(matrix[i][rowMinIndex]);
      }
    }
  }

  return target;
}

let matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
console.log(luckyNumbers(matrix));
// Output: [15]

matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]];
console.log(luckyNumbers(matrix));
// Output: [12]

matrix = [[7, 8], [1, 2]];
console.log(luckyNumbers(matrix));
// Output: [7]