/*
48-rotate-image
leetcode/easy/48. Rotate Image
URL:https://leetcode.com/problems/rotate-image/

NOTE: Description
NOTE: Constraints
  - n == matrix.length == matrix[i].length
  - 1 <= n <= 20
  - -1000 <= matrix[i][j] <= 1000

NOTE: Explanation
NOTE: Reference
*/

/**
 Do not return anything, modify matrix in-place instead.
 */

 function switching9to6(matrix: number[][], i: number, j: number) {
  [
    matrix[j][i],
    matrix[matrix.length - 1 - i][j],
  ] = [
    matrix[matrix.length - 1 - i][j],
    matrix[j][i],
  ];
}

function switching6to3(matrix: number[][], i: number, j: number) {
  [
    matrix[matrix.length - 1 - i][j],
    matrix[matrix.length - 1 - j][matrix.length - 1 - i],
  ] = [
    matrix[matrix.length - 1 - j][matrix.length - 1 - i],
    matrix[matrix.length - 1 - i][j],
  ];
}

function switching3to12(matrix: number[][], i: number, j: number) {
  [
    matrix[matrix.length - 1 - j][matrix.length - 1 - i],
    matrix[i][matrix.length - 1 - j],
  ] = [
    matrix[i][matrix.length - 1 - j],
    matrix[matrix.length - 1 - j][matrix.length - 1 - i],
  ];
}

function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix.length - 1 - i; j += 1) {
      switching9to6(matrix, i, j);
      switching6to3(matrix, i, j);
      switching3to12(matrix, i, j);
    }
  }
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate(matrix));
matrix;
// Output: [[7,4,1],[8,5,2],[9,6,3]]

matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(rotate(matrix));
matrix;