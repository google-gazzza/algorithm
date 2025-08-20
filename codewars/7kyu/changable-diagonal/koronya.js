// [JS][7kyu] Changable Diagonal
// changable-diagonal
// https://www.codewars.com/kata/68508d8937ee53321e405d31/train/javascript

const matrixDiagonal = (matrix, value) => {
  const N = matrix.length
  let row = value > 0 ? value : 0
  let col = value < 0 ? -1 * value : 0
  let sum = 0
  while (row < N && col < N) {
    sum += matrix[row][col]
    row += 1
    col += 1
  }

  return sum
}

matrixDiagonal(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  0,
) ===
  1 + 6 + 11 + 16
matrixDiagonal(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  2,
) ===
  9 + 14
matrixDiagonal(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  -2,
) ===
  3 + 8
