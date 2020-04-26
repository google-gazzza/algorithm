// https://leetcode.com/problems/transpose-matrix
// Runtime: 60 ms, faster than 97.69% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 37 MB, less than 33.33% of JavaScript online submissions for Transpose Matrix.
const transpose = A => {
  const rowLen = A.length
  const colLen = A[0].length
  const resultArr = []
  for (let col = 0; col < colLen; col = col + 1 | 0) {
    const colArr = []
    for (let row = 0; row < rowLen; row = row + 1 | 0) {
      colArr.push(A[row][col])
    }
    resultArr.push(colArr)
  }
  return resultArr
}

// Runtime: 68 ms, faster than 83.50% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 37.5 MB, less than 33.33% of JavaScript online submissions for Transpose Matrix.
const transpose2 = A => {
  const colLen = A.length
  const rowLen = A[0].length
  const resultArr = []
  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    resultArr[i] = []
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      resultArr[i][j] = A[j][i]
    }
  }
  return resultArr
}
