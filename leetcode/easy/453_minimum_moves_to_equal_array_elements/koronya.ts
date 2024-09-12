// [Easy] 453. Minimum Moves to Equal Array Elements
// 453_minimum_moves_to_equal_array_elements

// https://leetcode.com/problems/minimum-moves-to-equal-array-elements
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Minimum Moves to Equal Array Elements.
// Memory Usage: 41.7 MB, less than 100.00% of TypeScript online submissions for Minimum Moves to Equal Array Elements.
function minMoves(nums: number[]): number {
  const min: number = Math.min(...nums)

  return nums.reduce((acc: number, num: number): number => acc + num - min, 0)
}
