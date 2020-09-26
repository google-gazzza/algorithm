// [Easy] 1572. Matrix Diagonal Sum
// 1572_matrix_diagonal_sum

// https://leetcode.com/problems/matrix-diagonal-sum/
// Runtime: 72 ms, faster than 89.67% of JavaScript online submissions for Matrix Diagonal Sum.
// Memory Usage: 40.8 MB, less than 5.07% of JavaScript online submissions for Matrix Diagonal Sum.
const diagonalSum = mat => {
  const matLen = mat.length
  let sum = 0
  for (let i = 0; i < matLen; i = i + 1 | 0) {
    sum += mat[i][i]
  }
  for (let i = 0; i < matLen; i = i + 1 | 0) {
    sum += mat[matLen - 1 - i][i]
  }
  if (matLen % 2 === 1) {
    const centerIndex = (matLen - 1) / 2
    sum -= mat[centerIndex][centerIndex]
  }

  return sum
}
