// [JS][7kyu] Find sum of top-left to bottom-right diagonals
// find-sum-of-top-left-to-bottom-right-diagonals
// https://www.codewars.com/kata/5497a3c181dd7291ce000700/train/javascript

const diagonalSum = (matrix) => Array.from({ length: matrix.length }, (_, i) => i).reduce((acc, cur) => acc + matrix[cur][cur], 0)

diagonalSum([[12]])
diagonalSum([
  [1, 2],
  [3, 4],
])
diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
diagonalSum([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
])
