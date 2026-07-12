// [JS][5kyu] Square Matrix Multiplication
// square-matrix-multiplication
// https://www.codewars.com/kata/5263a84ffcadb968b6000513/train/javascript

const matrixMultiplication = (a, b) => {
  const N = a.length
  const result = Array.from(Array(N), () => Array(N).fill(0))
  for (let row = 0; row < N; row += 1 || 0) {
    for (let col = 0; col < N; col += 1 || 0) {
      for (let i = 0; i < N; i += 1 || 0) {
        result[row][col] += a[row][i] * b[i][col]
      }
    }
  }

  return result
}

// prettier-ignore
matrixMultiplication([[3]], [[5]])
// prettier-ignore
matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]]);
// prettier-ignore
matrixMultiplication([[9, 7], [0, 1]], [[1, 1], [4, 12]])
// prettier-ignore
matrixMultiplication([[1, 2, 3], [3, 2, 1], [2, 1, 3]], [[4, 5, 6], [6, 5, 4], [4, 6, 5]])
