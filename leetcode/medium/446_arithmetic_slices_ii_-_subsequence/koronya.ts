// [Medium] 446. Arithmetic Slices II - Subsequence
// 446_arithmetic_slices_ii_-_subsequence

// https://leetcode.com/problems/arithmetic-slices-ii-subsequence
// Runtime: 388 ms, faster than 100.00% of TypeScript online submissions for Arithmetic Slices II - Subsequence.
// Memory Usage: 66.3 MB, less than 100.00% of TypeScript online submissions for Arithmetic Slices II - Subsequence.

function numberOfArithmeticSlices(nums: number[]): number {
  const numsLen: number = nums.length
  if (numsLen === 0) {
    return 0
  }
  const numsMap = new Map<number, Map<number, number>>()
  let count: number = 0

  for (let i: number = 0; i < numsLen; i += 1) {
    const subMap = new Map<number, number>()
    for (let j: number = 0; j < i; j += 1) {
      const diff: number = nums[i] - nums[j]
      const increase: number = (numsMap.get(j)!.get(diff) || 0) + 1
      count += increase > 1 ? increase - 1 : 0
      subMap.set(diff, (subMap.get(diff) || 0) + increase)
    }
    numsMap.set(i, subMap)
  }

  return count
}

numberOfArithmeticSlices([2, 4, 6, 8, 10]) //?
numberOfArithmeticSlices([7, 7, 7, 7, 7]) //?
numberOfArithmeticSlices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) //?
// numberOfArithmeticSlices([2, 4, 6, 8]) //?
