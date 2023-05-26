// [Easy] 598. Range Addition II
// 598_range_addition_ii

// https://leetcode.com/problems/range-addition-ii
// Runtime: 64 ms, faster than 100.00% of TypeScript online submissions for Range Addition II.
// Memory Usage: 45.3 MB, less than 6.67% of TypeScript online submissions for Range Addition II.

function maxCount(m: number, n: number, ops: number[][]): number {
  let minRow = m
  let minCol = n
  ops.forEach((item) => {
    const [row, col] = item
    minRow = Math.min(minRow, row)
    minCol = Math.min(minCol, col)
  })
  return minRow * minCol
}
