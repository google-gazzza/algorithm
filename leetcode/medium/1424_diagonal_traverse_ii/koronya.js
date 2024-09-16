// [Medium] 1424. Diagonal Traverse II
// 1424_diagonal_traverse_ii

// https://leetcode.com/problems/diagonal-traverse-ii
// Runtime: 384 ms, faster than 48.72% of JavaScript online submissions for Diagonal Traverse II.
// Memory Usage: 76.9 MB, less than 23.08% of JavaScript online submissions for Diagonal Traverse II.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = function (nums) {
  const rowLen = nums.length
  const resultMap = new Map()
  const result = []
  for (let i = 0; i < rowLen; i += 1 || 0) {
    const colLen = nums[i].length
    for (let j = 0; j < colLen; j += 1 || 0) {
      const item = nums[i][j]
      const index = j + i
      if (resultMap.has(index)) {
        resultMap.get(index).unshift(item)
      } else {
        resultMap.set(index, [item])
      }
    }
  }
  ;[...resultMap].forEach((item) => result.push(...item[1]))
  return result
}

findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]) //?

// findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]) //?
