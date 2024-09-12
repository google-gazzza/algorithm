// [Easy] 598. Range Addition II
// 598_range_addition_ii

// https://leetcode.com/problems/range-addition-ii
// Runtime: 65 ms, faster than 98.46% of JavaScript online submissions for Range Addition II.
// Memory Usage: 44.6 MB, less than 6.15% of JavaScript online submissions for Range Addition II.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function (m, n, ops) {
  let minRow = m
  let minCol = n
  ops.forEach((item) => {
    const [row, col] = item
    minRow = Math.min(minRow, row)
    minCol = Math.min(minCol, col)
  })
  return minRow * minCol
}

// out of memory
const maxCount2 = function (m, n, ops) {
  const arr = Array.from(Array(m), () => Array(n).fill(0))
  ops.forEach((item) => {
    const [row, col] = item
    for (let i = 0; i < row; i += 1 || 0) {
      for (let j = 0; j < col; j += 1 || 0) {
        arr[i][j] += 1
      }
    }
  })
  const flatArr = arr.reduce((acc, row) => [...acc, ...row], [])
  const max = Math.max(...flatArr)
  return flatArr.filter((item) => item === max).length
}

maxCount(3, 3, [
  [2, 2],
  [3, 3],
])
maxCount(3, 3, [
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
  [2, 2],
  [3, 3],
  [3, 3],
  [3, 3],
])
maxCount(3, 3, [])
