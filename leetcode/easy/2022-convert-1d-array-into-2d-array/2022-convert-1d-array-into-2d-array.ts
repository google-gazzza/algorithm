/*
2022-convert-1d-array-into-2d-array
leetcode/easy/2022. Convert 1D Array Into 2D Array
URL: https://leetcode.com/problems/convert-1d-array-into-2d-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n !== original.length) {
    return [];
  }

  const result: number[][] = [];
  for (let i = 0; i < m; i += 1) {
    result.push(original.splice(0, n));
  }

  return result;
}

let original = [1, 2, 3, 4];
let m = 2;
let n = 2;
console.log(construct2DArray(original, m, n));
// Output: [[1,2],[3,4]]

original = [1, 2, 3];
m = 1;
n = 3;
console.log(construct2DArray(original, m, n));
// Output: [[1,2,3]]

original = [1, 2];
m = 1;
n = 1;
console.log(construct2DArray(original, m, n));
// Output: []
