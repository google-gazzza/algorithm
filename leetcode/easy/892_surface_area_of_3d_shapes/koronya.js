// [Easy] 892. Surface Area of 3D Shapes
// 892_surface_area_of_3d_shapes

// https://leetcode.com/problems/surface-area-of-3d-shapes
// Runtime: 72 ms, faster than 96.30% of JavaScript online submissions for Surface Area of 3D Shapes.
// Memory Usage: 43.4 MB, less than 7.41% of JavaScript online submissions for Surface Area of 3D Shapes.
const getArea = (n) => {
  return n > 0 ? 6 * n - 2 * (n - 1) : 0
}

const getNextIndex = (row, col) => {
  return [
    [row + 1, col],
    [row, col + 1],
  ]
}

const surfaceArea = function (grid) {
  let area = 0
  const rowLen = grid.length
  const colLen = grid[0].length
  const getValue = (val, indexArr) => {
    let duplicateSurface = 0
    if (val === 0) {
      return duplicateSurface
    }
    indexArr.forEach((info) => {
      const [row, col] = info
      if (row < rowLen && col < colLen) {
        duplicateSurface += Math.min(val, grid[row][col]) * 2
      }
    })
    return duplicateSurface
  }
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      const pointValue = grid[row][col]
      area += getArea(pointValue)
      area -= getValue(pointValue, getNextIndex(row, col))
    }
  }
  return area
}
