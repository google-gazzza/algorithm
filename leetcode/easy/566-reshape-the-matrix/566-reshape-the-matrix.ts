/*
566-reshape-the-matrix
leetcode/easy/566. Reshape the Matrix
URL: https://leetcode.com/problems/reshape-the-matrix/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const matrix = mat.flat();
  const result = [];

  if (r * c !== matrix.length) {
    return mat;
  }

  for (let i = 0; i < r; i += 1) {
    result[i] = [];
    for (let j = 0; j < c; j += 1) {
      result[i].push(matrix.shift());
    }
  }

  return result;
}

let mat = [[1, 2], [3, 4]];
let r = 1;
let c = 4;
console.log(matrixReshape(mat, r, c));
// Output: [[1,2,3,4]]

mat = [[1, 2], [3, 4]];
r = 2;
c = 4;

console.log(matrixReshape(mat, r, c));
// Output: [[1,2],[3,4]]
