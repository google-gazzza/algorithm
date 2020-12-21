// [Easy] 883. Projection Area of 3D Shapes
// 883_projection_area_of_3d_shapes

// https://leetcode.com/problems/projection-area-of-3d-shapes
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Projection Area of 3D Shapes.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Projection Area of 3D Shapes.
function projectionArea (grid: number[][]): number {
  let result: number = 0
  const N: number = grid.length
  for (let row: number = 0; row < N; row += 1) {
    let bestRow: number = 0
    let bestCol: number = 0
    for (let col: number = 0; col < N; col += 1) {
      bestRow = Math.max(bestRow, grid[row][col])
      bestCol = Math.max(bestCol, grid[col][row])
      if (grid[row][col] !== 0) {
        result += 1
      }
    }
    result += bestRow + bestCol
  }

  return result
}
