// [Easy] 1030. Matrix Cells in Distance Order
// 1030_matrix_cells_in_distance_order

// https://leetcode.com/problems/matrix-cells-in-distance-order
// Runtime: 192 ms, faster than 33.33% of TypeScript online submissions for Matrix Cells in Distance Order.
// Memory Usage: 51.3 MB, less than 16.67% of TypeScript online submissions for Matrix Cells in Distance Order.
function allCellsDistOrder (R: number, C: number, r0: number, c0: number): number[][] {
  const visitedSet = new Set<String>()
  const resultArr: [number, number][] = []
  const queue: [number, number][] = [[r0, c0]]
  while (queue.length > 0) {
    const [row, col] = queue.shift()
    const key: string = `${row}_${col}`
    if (!visitedSet.has(key) && !(row >= R || row < 0 || col >= C || col < 0)) {
      visitedSet.add(key)
      resultArr.push([row, col])
      queue.push([row - 1, col])
      queue.push([row, col - 1])
      queue.push([row + 1, col])
      queue.push([row, col + 1])
    }
  }

  return resultArr
}
