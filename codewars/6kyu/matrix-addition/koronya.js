// [JS][6kyu] Matrix Addition
// matrix-addition
// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

const matrixAddition = (a, b) => a.map((row, rowIndex) => row.map((col, colIndex) => col + b[rowIndex][colIndex]))

matrixAddition(
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1],
  ],
  //      +
  [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3],
  ],
)
