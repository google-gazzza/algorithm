// [Easy] 892. Surface Area of 3D Shapes
// 892_surface_area_of_3d_shapes

// https://leetcode.com/problems/surface-area-of-3d-shapes
// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Surface Area of 3D Shapes.
// Memory Usage: 44 MB, less than 100.00% of TypeScript online submissions for Surface Area of 3D Shapes.
const getArea = (n: number): number => {
  return n > 0 ? 6 * n - 2 * (n - 1) : 0
}

type NextIndexArrType = [[number, number], [number, number]]

const getNextIndex = (row: number, col: number): NextIndexArrType => {
  return [
    [row + 1, col],
    [row, col + 1],
  ]
}

function surfaceArea(grid: number[][]): number {
  let area: number = 0
  const rowLen: number = grid.length
  const colLen: number = grid[0].length
  const getValue = (val: number, indexArr: NextIndexArrType): number => {
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
  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      const pointValue: number = grid[row][col]
      area += getArea(pointValue)
      area -= getValue(pointValue, getNextIndex(row, col))
    }
  }
  return area
}
