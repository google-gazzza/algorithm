/*
1329-sort-the-matrix-diagonally
leetcode/easy/https://leetcode.com/problems/sort-the-matrix-diagonally/
Difficulty: medium
URL: https://leetcode.com/problems/sort-the-matrix-diagonally/

NOTE: Description

NOTE: Constraints
  - m == mat.length
  - n == mat[i].length
  - 1 <= m, n <= 100
  - 1 <= mat[i][j] <= 100

NOTE: Explanation
*/
const getDiagonalElements = (matrix: number[][], rowIndex: number, columnIndex: number): number[] => {
  const result: number[] = [];

  while (rowIndex < matrix.length && columnIndex < matrix[0].length) {
    result.push(matrix[rowIndex][columnIndex]);
    rowIndex += 1;
    columnIndex += 1;
  }

  return result.slice();
};

const replaceDiagonalElements = (matrix: number[][], rowIndex: number, columnIndex: number, elements: number[]): void => {
  while (rowIndex < matrix.length && columnIndex < matrix[0].length) {
    matrix[rowIndex][columnIndex] = elements.shift();
    rowIndex += 1;
    columnIndex += 1;
  }
};

function diagonalSort(mat: number[][]): number[][] {
  for (let columnIndex = 0; columnIndex < mat[0].length; columnIndex += 1) {
    replaceDiagonalElements(
      mat,
      0,
      columnIndex,
      getDiagonalElements(
        mat,
        0,
        columnIndex,
      ).sort((a, b) => a - b),
    );
  }

  for (let rowIndex = 1; rowIndex < mat.length; rowIndex += 1) {
    replaceDiagonalElements(
      mat,
      rowIndex,
      0,
      getDiagonalElements(
        mat,
        rowIndex,
        0,
      ).sort((a, b) => a - b),
    );
  }

  return mat;
};

let mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]];
console.log(diagonalSort(mat));
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

mat = [[11, 25, 66, 1, 69, 7], [23, 55, 17, 45, 15, 52], [75, 31, 36, 44, 58, 8], [22, 27, 33, 25, 68, 4], [84, 28, 14, 11, 5, 50]];
console.log(diagonalSort(mat));
// Output: [[5, 17, 4, 1, 52, 7], [11, 11, 25, 45, 8, 69], [14, 23, 25, 44, 58, 15], [22, 27, 31, 36, 50, 66], [84, 28, 75, 33, 55, 68]];
