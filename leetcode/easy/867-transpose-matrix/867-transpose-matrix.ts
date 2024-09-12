/*
867-transpose-matrix
leetcode/easy/867. Transpose Matrix
URL: https://leetcode.com/problems/transpose-matrix/

NOTE: Description

NOTE: Constraints

NOTE: Explanation
*/

function transpose(matrix: number[][]): number[][] {
  const result = new Array(matrix[0].length).fill(0);

  result.forEach((e, i) => {
    result[i] = [];
  });

  matrix.forEach((row) => {
    row.forEach((e, i) => {
      result[i].push(e);
    });
  });

  return result;
}

// Example 1:
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transpose(matrix));
// Output: [[1,4,7],[2,5,8],[3,6,9]]

matrix = [[1, 2, 3], [4, 5, 6]];
console.log(transpose(matrix));
// Output: [[1,4],[2,5],[3,6]]