// [JS][6kyu] Matrix Transpose
// matrix-transpose
// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

const transpose = (matrix) => {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const result = Array.from({ length: colLen }, () => Array(rowLen))
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      result[col][row] = matrix[row][col]
    }
  }

  return result
}

transpose([
  [1, 2, 3],
  [4, 5, 6],
])
