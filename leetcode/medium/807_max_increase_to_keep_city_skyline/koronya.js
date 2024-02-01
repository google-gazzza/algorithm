// https://leetcode.com/problems/max-increase-to-keep-city-skyline
// Runtime: 56 ms, faster than 90.27% of JavaScript online submissions for Max Increase to Keep City Skyline.
// Memory Usage: 35.3 MB, less than 71.43% of JavaScript online submissions for Max Increase to Keep City Skyline.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  const horizontalMaxArr = []
  const verticalMaxArr = []

  for (let row = 0; row < rowLen; row = row + 1 | 0) {
    let horizontalMax = Number.MIN_SAFE_INTEGER
    for (let col = 0; col < colLen; col = col + 1 | 0) {
      const num = grid[row][col]
      horizontalMax = horizontalMax < num
        ? num
        : horizontalMax
    }
    horizontalMaxArr.push(horizontalMax)
  }
  for (let col = 0; col < colLen; col = col + 1 | 0) {
    let verticalMax = Number.MIN_SAFE_INTEGER
    for (let row = 0; row < rowLen; row = row + 1 | 0) {
      const num = grid[row][col]
      verticalMax = verticalMax < num
        ? num
        : verticalMax
    }
    verticalMaxArr.push(verticalMax)
  }

  let count = 0
  for (let row = 0; row < rowLen; row = row + 1 | 0) {
    for (let col = 0; col < colLen; col = col + 1 | 0) {
      const num = grid[row][col]
      const verticalMax = verticalMaxArr[col]
      const horizontalMax = horizontalMaxArr[row]
      const smallNum = verticalMax < horizontalMax ? verticalMax : horizontalMax
      if (num !== verticalMax && num !== horizontalMax) {
        count += smallNum - num
      }
    }
  }

  return count
}
