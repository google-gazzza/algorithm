/*
rotate-image

# leetcode/top-interview-questions/easy/Rotate Image
Difficulty: medium
URL: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/770/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const size = matrix.length;
  
  for (let i = 0; i < size; i += 1) {
    for (let j = i; j < size; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size / 2; j += 1) {
      [matrix[i][j], matrix[i][size - 1 - j]] = [matrix[i][size - 1 - j], matrix[i][j]];
    }
  }
};

/*
 4x4
 0,0 0,1 0,2 0,3
 1,0 1,1 1,3 1,3
 2,0 2,1 2,2 2,3
 3,0 3,1 3,2 3,3
  */

test('rotate', () => {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let expectResult = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  rotate(matrix);
  expect(matrix).toEqual(expectResult);
  
  matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
  expectResult = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ];
  rotate(matrix);
  expect(matrix).toEqual(expectResult);
  
  matrix = [[1]];
  expectResult = [[1]];
  rotate(matrix);
  expect(matrix).toEqual(expectResult);
  
  matrix = [
    [1, 2],
    [3, 4],
  ];
  expectResult = [
    [3, 1],
    [4, 2],
  ];
  rotate(matrix);
  expect(matrix).toEqual(expectResult);
});
