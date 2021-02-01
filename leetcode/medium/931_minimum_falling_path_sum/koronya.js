// [Medium] 931. Minimum Falling Path Sum
// 931_minimum_falling_path_sum

// https://leetcode.com/problems/minimum-falling-path-sum
// Runtime: 84 ms, faster than 83.63% of JavaScript online submissions for Minimum Falling Path Sum.
// Memory Usage: 45.4 MB, less than 14.62% of JavaScript online submissions for Minimum Falling Path Sum.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const getMin = (row, col) => {
    const nextRow = matrix[row + 1]
    const candidateArr = [nextRow[col]]
    if (col > 0) {
      candidateArr.push(nextRow[col - 1])
    }
    if (col < colLen - 1) {
      candidateArr.push(nextRow[col + 1])
    }
    return Math.min(...candidateArr)
  }
  for (let row = rowLen - 2; row >= 0; row -= 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      matrix[row][col] += getMin(row, col)
    }
  }

  return Math.min(...matrix[0])
}

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]) //?

minFallingPathSum([
  [2, 1, 3, 4],
  [6, 5, 4, 1],
  [7, 8, 6, 2],
  [5, 1, 2, 4],
]) //?
