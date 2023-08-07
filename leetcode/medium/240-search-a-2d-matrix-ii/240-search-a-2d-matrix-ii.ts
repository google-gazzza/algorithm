// leetcode/medium/240. Search a 2D Matrix II
// 240-search-a-2d-matrix-ii
// URL: https://leetcode.com/problems/search-a-2d-matrix-ii/description/

function searchMatrix(matrix: number[][], target: number): boolean {
  return new Set(matrix.flat()).has(target);
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 5;
console.log(searchMatrix(matrix, target));
// Output: true;

matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
target = 20;
console.log(searchMatrix(matrix, target));
// Output: false;

matrix = [[-1, 3]];
target = 3;
console.log(searchMatrix(matrix, target));
// Output: true;

matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
target = 19;
console.log(searchMatrix(matrix, target));
// Output: true;
