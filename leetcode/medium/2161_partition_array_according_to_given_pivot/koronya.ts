// [Medium] 2161. Partition Array According to Given Pivot
// 2161_partition_array_according_to_given_pivot

// https://leetcode.com/problems/partition-array-according-to-given-pivot
// Runtime: 344 ms, faster than 93.94% of TypeScript online submissions for Partition Array According to Given Pivot.
// Memory Usage: 82.3 MB, less than 39.39% of TypeScript online submissions for Partition Array According to Given Pivot.

function pivotArray(nums: number[], pivot: number): number[] {
  const numsLen = nums.length
  const smallArr: number[] = []
  const bigArr: number[] = []
  const equalArr: number[] = []
  for (let i: number = 0; i < numsLen; i += 1) {
    const num = nums[i]
    const targetArr = num === pivot ? equalArr : num > pivot ? bigArr : smallArr
    targetArr.push(num)
  }

  return [...smallArr, ...equalArr, ...bigArr]
}
