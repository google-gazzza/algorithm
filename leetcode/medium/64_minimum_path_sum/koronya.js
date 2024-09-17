// [Medium] 64. Minimum Path Sum
// 64_minimum_path_sum

// https://leetcode.com/problems/minimum-path-sum
// Runtime: 80 ms, faster than 68.53% of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 41.5 MB, less than 29.12% of JavaScript online submissions for Minimum Path Sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  const resultArr = Array.from(Array(rowLen), () => Array(colLen).fill(0))
  resultArr[0][0] = grid[0][0]
  for (let row = 1; row < rowLen; row += 1 || 0) {
    resultArr[row][0] = resultArr[row - 1][0] + grid[row][0]
  }
  for (let col = 1; col < colLen; col += 1 || 0) {
    resultArr[0][col] = resultArr[0][col - 1] + grid[0][col]
  }
  for (let row = 1; row < rowLen; row += 1 || 0) {
    for (let col = 1; col < colLen; col += 1 || 0) {
      resultArr[row][col] = Math.min(resultArr[row - 1][col], resultArr[row][col - 1]) + grid[row][col]
    }
  }

  return resultArr[rowLen - 1][colLen - 1]
}

const minPathSum2 = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  const resultArr = Array.from(Array(rowLen), () => Array(colLen).fill(0))
  resultArr[rowLen - 1][colLen - 1] = grid[rowLen - 1][colLen - 1]
  for (let row = rowLen - 2; row >= 0; row -= 1 || 0) {
    resultArr[row][colLen - 1] = resultArr[row + 1][colLen - 1] + grid[row][colLen - 1]
  }
  for (let col = colLen - 2; col >= 0; col -= 1 || 0) {
    resultArr[rowLen - 1][col] = resultArr[rowLen - 1][col + 1] + grid[rowLen - 1][col]
  }
  for (let row = rowLen - 2; row >= 0; row -= 1 || 0) {
    for (let col = colLen - 2; col >= 0; col -= 1 || 0) {
      resultArr[row][col] = Math.min(resultArr[row + 1][col], resultArr[row][col + 1]) + grid[row][col]
    }
  }

  return resultArr[0][0]
}

// TLE...
const minPathSum3 = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  const resultArr = Array.from(Array(rowLen), () => Array(colLen).fill(Number.MAX_SAFE_INTEGER))
  const targetIndexArr = [[rowLen - 1, colLen - 1, 0]]

  while (targetIndexArr.length > 0) {
    const [row, col, sum] = targetIndexArr.shift()
    const newSum = sum + grid[row][col]
    const past = resultArr[row][col]
    if (past > newSum) {
      resultArr[row][col] = newSum
      if (row > 0) {
        targetIndexArr.push([row - 1, col, newSum])
      }
      if (col > 0) {
        targetIndexArr.push([row, col - 1, newSum])
      }
    }
  }
  return resultArr[0][0]
}

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]) //?
// minPathSum([
//   [1, 2, 3],
//   [4, 5, 6],
// ]) //?
