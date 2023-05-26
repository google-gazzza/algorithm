// [Easy] 1030. Matrix Cells in Distance Order
// 1030_matrix_cells_in_distance_order

// https://leetcode.com/problems/matrix-cells-in-distance-order
// Runtime: 172 ms, faster than 16.83% of JavaScript online submissions for Matrix Cells in Distance Order.
// Memory Usage: 51.8 MB, less than 5.94% of JavaScript online submissions for Matrix Cells in Distance Order.
// 두번쨰로 했던 풀이.
// 풀기는 했지만 만족할만한 속도는 아니긴 함. 
// 나중에 또 해봐야지...
const allCellsDistOrder = function (R, C, r0, c0) {
  const visitedSet = new Set()
  const resultArr = []
  const queue = [[r0, c0]]
  while (queue.length > 0) {
    const [row, col] = queue.shift()
    const key = `${row}_${col}`
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

// 처음했던 풀이...
// TimeLimitException 났음 ㅜㅜ
const allCellsDistOrder2 = function (R, C, r0, c0) {
  const coordinateMap = new Map()
  const backtrack = (row, col, len) => {
    if (row >= R || row < 0 || col >= C || col < 0) {
      return
    }
    const key = `${row}_${col}`
    const ddd = coordinateMap.get(key)
    if (coordinateMap.has(key) && ddd <= len) {
      return
    }
    coordinateMap.set(key, len)
    len += 1
    backtrack(row - 1, col, len)
    backtrack(row, col - 1, len)
    backtrack(row + 1, col, len)
    backtrack(row, col + 1, len)
  }
  backtrack(r0, c0, 0)
  const sortedMap = [...coordinateMap].sort((a, b) => a[1] - b[1])

  return sortedMap.map(item => item[0].split('_').map(item => Number(item)))
}
