// https://leetcode.com/problems/rotate-image/
// Runtime: 48 ms, faster than 95.74% of JavaScript online submissions for Rotate Image.
// Memory Usage: 34 MB, less than 10.53% of JavaScript online submissions for Rotate Image.
const rotate = matrix => {
  const matrixLen = matrix.length
  for (let row = 0; row < matrixLen; row = row + 1 | 0) {
    for (let col = 0; col < matrixLen; col = col + 1 | 0) {
      if (row === col) {
        break
      }
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }

  for (let i = 0; i < matrixLen; i = i + 1 | 0) {
    matrix[i] = matrix[i].reverse()
  }
}
