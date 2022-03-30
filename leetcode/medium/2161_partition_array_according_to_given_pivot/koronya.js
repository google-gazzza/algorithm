// [Medium] 2161. Partition Array According to Given Pivot
// 2161_partition_array_according_to_given_pivot

// https://leetcode.com/problems/partition-array-according-to-given-pivot
// Runtime: 324 ms, faster than 89.66% of JavaScript online submissions for Partition Array According to Given Pivot.
// Memory Usage: 82.2 MB, less than 61.82% of JavaScript online submissions for Partition Array According to Given Pivot.

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = function (nums, pivot) {
  const numsLen = nums.length
  const smallArr = []
  const bigArr = []
  const equalArr = []
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    const targetArr = num === pivot ? equalArr : num > pivot ? bigArr : smallArr
    targetArr.push(num)
  }

  return [...smallArr, ...equalArr, ...bigArr]
}

pivotArray([9, 12, 5, 10, 14, 3, 10], 10)
pivotArray([-3, 4, 3, 2], 2)
