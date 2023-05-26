/*
766-toeplitz-matrix
leetcode/easy/766. Toeplitz Matrix
URL: https://leetcode.com/problems/toeplitz-matrix/

NOTE: Description

NOTE: Constraints
  - m == matrix.length
  - n == matrix[i].length
  - 1 <= m, n <= 20
  - 0 <= matrix[i][j] <= 99

NOTE: Explanation
*/

function checkDiagonal(matrix: number[][], row: number, col: number, target: number): boolean {
  let i = row;
  let j = col;

  while (i < matrix.length && j < matrix[0].length) {
    if (matrix[i][j] !== target) {
      return false;
    }
    i += 1;
    j += 1;
  }

  return true;
}

function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix[0].length; i += 1) {
    if (!checkDiagonal(matrix, 0, i, matrix[0][i])) {
      return false;
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    if (!checkDiagonal(matrix, i, 0, matrix[i][0])) {
      return false;
    }
  }

  return true;
}

let matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];
console.log(isToeplitzMatrix(matrix));
// Output: true

matrix = [[1, 2], [2, 2]];
console.log(isToeplitzMatrix(matrix));
// Output: false
