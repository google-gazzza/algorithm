// [JS][6kyu] Triangular matrices.
// triangular-matrices
// https://www.codewars.com/kata/551602850cc0afa0a60000e6/train/javascript

function upperTriangular(mat) {
  const N = mat.length
  for (let i = 1; i < N; i += 1) {
    for (let j = i - 1; j < i; j += 1) {
      if (mat[i][j] !== 0) {
        return false
      }
    }
  }
  return true
}

function lowerTriangular(mat) {
  const N = mat.length
  for (let i = 0; i < N - 1; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      if (mat[i][j] !== 0) {
        return false
      }
    }
  }
  return true
}

// prettier-ignore
upperTriangular([[1,1,1],[0,1,1],[0,0,1]]) === true
// prettier-ignore
upperTriangular([[1,1,1],[0,1,1],[0,2,1]]) === false
// prettier-ignore
upperTriangular([[1,1,1],[2,1,1],[0,0,1]]) === false

// prettier-ignore
lowerTriangular([[1,0,0],[1,1,0],[1,1,1]]) === true
// prettier-ignore
lowerTriangular([[1,0,0],[1,1,1],[0,0,0]]) === false
// prettier-ignore
lowerTriangular([[1,0,1],[1,1,0],[0,0,0]]) === false
