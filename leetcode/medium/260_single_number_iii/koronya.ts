// [Medium] 260. Single Number III
// 260_single_number_iii

// https://leetcode.com/problems/single-number-iii
// Runtime: 76 ms, faster than 95.16% of TypeScript online submissions for Single Number III.
// Memory Usage: 41.7 MB, less than 60.48% of TypeScript online submissions for Single Number III.

function singleNumber(nums: number[]): number[] {
  const aXorB: number = nums.reduce((acc, cur) => acc ^ cur, 0)
  const firstBitPosition: number = aXorB.toString(2).length - 1
  const a = nums.filter((num) => ((num >> firstBitPosition) & 1) == 0).reduce((acc, cur) => acc ^ cur, 0)
  const b = aXorB ^ a
  return [a, b]
}
