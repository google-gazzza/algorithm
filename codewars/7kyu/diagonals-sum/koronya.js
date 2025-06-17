// [JS][7kyu] Diagonals sum
// diagonals-sum
// https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/javascript

const sum = (matrix) => {
  const n = matrix.length
  let primaryDiagonalSum = 0
  let secondaryDiagonalSum = 0
  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += matrix[i][i]
    secondaryDiagonalSum += matrix[i][n - 1 - i]
  }
  return primaryDiagonalSum + secondaryDiagonalSum
}

sum([
  [1, 2],
  [3, 4],
])
sum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
sum([
  [-2, 5, 3, 2],
  [9, -6, 5, 1],
  [3, 2, 7, 3],
  [-1, 8, -4, 8],
])
