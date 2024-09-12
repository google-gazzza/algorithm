// [Easy] 463. Island Perimeter
// 463_island_perimeter

// https://leetcode.com/problems/island-perimeter
// Runtime: 192 ms, faster than 88.84% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 47 MB, less than 16.25% of JavaScript online submissions for Island Perimeter.
const islandPerimeter = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  let count = 0
  const getUp = (row, col) => row === 0 || grid[row - 1][col] === 0 ? 1 : 0
  const getDown = (row, col) => row === rowLen - 1 || grid[row + 1][col] === 0 ? 1 : 0
  const getLeft = (row, col) => col === 0 || grid[row][col - 1] === 0 ? 1 : 0
  const getRight = (row, col) => col === colLen - 1 || grid[row][col + 1] === 0 ? 1 : 0
  const getCount = (row, col) => {
    if (grid[row][col] === 1) {
      count += getUp(row, col)
      count += getDown(row, col)
      count += getLeft(row, col)
      count += getRight(row, col)
    }
  }

  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      getCount(i, j)
    }
  }

  return count
}
