// [Medium] 64. Minimum Path Sum
// 64_minimum_path_sum

// https://leetcode.com/problems/minimum-path-sum
// Runtime: 68 ms, faster than 98.48% of TypeScript online submissions for Minimum Path Sum.
// Memory Usage: 41.1 MB, less than 71.21% of TypeScript online submissions for Minimum Path Sum.

function minPathSum(grid: number[][]): number {
  const rowLen: number = grid.length
  const colLen: number = grid[0].length
  const resultArr: number[][] = Array.from(Array(rowLen), () => Array(colLen).fill(0))
  resultArr[0][0] = grid[0][0]
  for (let row: number = 1; row < rowLen; row += 1) {
    resultArr[row][0] = resultArr[row - 1][0] + grid[row][0]
  }
  for (let col: number = 1; col < colLen; col += 1) {
    resultArr[0][col] = resultArr[0][col - 1] + grid[0][col]
  }
  for (let row: number = 1; row < rowLen; row += 1) {
    for (let col: number = 1; col < colLen; col += 1) {
      resultArr[row][col] = Math.min(resultArr[row - 1][col], resultArr[row][col - 1]) + grid[row][col]
    }
  }

  return resultArr[rowLen - 1][colLen - 1]
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
