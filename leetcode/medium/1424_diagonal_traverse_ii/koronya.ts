// [Medium] 1424. Diagonal Traverse II
// 1424_diagonal_traverse_ii

// https://leetcode.com/problems/diagonal-traverse-ii
// Runtime: 400 ms, faster than 100.00% of TypeScript online submissions for Diagonal Traverse II.
// Memory Usage: 78 MB, less than 100.00% of TypeScript online submissions for Diagonal Traverse II.


function findDiagonalOrder(nums: number[][]): number[] {
  const rowLen: number = nums.length
  const resultMap = new Map<number, number[]>()
  const result: number[] = []
  for (let i: number = 0; i < rowLen; i += 1) {
    const colLen: number = nums[i].length
    for (let j: number = 0; j < colLen; j += 1) {
      const item: number = nums[i][j]
      const index: number = j + i
      if (resultMap.has(index)) {
        resultMap.get(index)!.unshift(item)
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
