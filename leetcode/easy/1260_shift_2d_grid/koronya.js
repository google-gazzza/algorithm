// [Easy] 1260. Shift 2D Grid
// 1260_shift_2d_grid

// https://leetcode.com/problems/shift-2d-grid
// Runtime: 112 ms, faster than 64.86% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 42.8 MB, less than 16.22% of JavaScript online submissions for Shift 2D Grid.
const getShiftGrid = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  let prev = grid[rowLen - 1][colLen - 1]
  for (let row = 0; row < rowLen; row += 1 | 0) {
    for (let col = 0; col < colLen; col += 1 | 0) {
      const temp = grid[row][col]
      grid[row][col] = prev
      prev = temp
    }
  }
  return grid
}

 const shiftGrid = (grid, k) => {
  let arr = grid
  for (let i = 0; i < k; i += 1 | 0) {
    arr = getShiftGrid(grid)
  }
  return arr
}
