// https://leetcode.com/problems/unique-paths-ii
// Runtime: 52 ms, faster than 95.64% of JavaScript online submissions for Unique Paths II.
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Unique Paths II.
const uniquePathsWithObstacles = obstacleGrid => {
  const lastRowIndex = obstacleGrid.length - 1
  const lastColIndex = obstacleGrid[0].length - 1
  const resultMap = new Map()
  resultMap.set('0,0', obstacleGrid[0][0] === 1 ? 0 : 1)

  const getPaths = (row, col) => {
    if (row < 0 || col < 0) {
      return 0
    }

    const key = `${row},${col}`
    if (resultMap.has(key)) {
      return resultMap.get(key)
    }

    let result
    if (obstacleGrid[row][col] === 1) {
      result = 0
    } else {
      result = getPaths(row - 1, col) + getPaths(row, col - 1)
    }
    resultMap.set(key, result)

    return result
  }

  return getPaths(lastRowIndex, lastColIndex)
}
