/*
733-flood-fill
leetcode/easy/733. Flood Fill
URL: https://leetcode.com/problems/flood-fill/

NOTE: Description

NOTE: Constraints
  -  m == image.length
  -  n == image[i].length
  -  1 <= m, n <= 50
  -  0 <= image[i][j], newColor < 216
  -  0 <= sr < m
  -  0 <= sc < n

NOTE: Explanation
*/

function floodFill(image: number[][], row: number, column: number, newColor: number): number[][] {
  if (image[row][column] === newColor) {
    return image;
  }

  const currentColor = image[row][column];
  image[row][column] = newColor;

  if (image[row - 1]?.[column] === currentColor) {
    floodFill(image, row - 1, column, newColor);
  }
  if (image[row + 1]?.[column] === currentColor) {
    floodFill(image, row + 1, column, newColor);
  }
  if (image[row]?.[column - 1] === currentColor) {
    floodFill(image, row, column - 1, newColor);
  }
  if (image[row]?.[column + 1] === currentColor) {
    floodFill(image, row, column + 1, newColor);
  }

  return image;
}

let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
let sr = 1;
let sc = 1;
let newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
// Output: [[2,2,2],[2,2,0],[2,0,1]]

image = [[0, 0, 0], [0, 0, 0]];
sr = 0;
sc = 0;
newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
// Output: [[2,2,2],[2,2,2]]
