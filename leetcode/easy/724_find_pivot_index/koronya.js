// [Easy] 724. Find Pivot Index
// 724_find_pivot_index

// https://leetcode.com/problems/find-pivot-index
// Runtime: 92 ms, faster than 87.92% of JavaScript online submissions for Find Pivot Index.
// Memory Usage: 40.6 MB, less than 88.45% of JavaScript online submissions for Find Pivot Index.

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const numsLen = nums.length
  const totalSum = nums.reduce((sum, cur) => sum + cur, 0)
  let leftSum = 0
  let rightSum = totalSum - nums[0]
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (leftSum === rightSum) {
      return i
    }
    leftSum += nums[i]
    rightSum -= nums[i + 1]
  }

  return -1
}

pivotIndex([1, 7, 3, 6, 5, 6]) //?
pivotIndex([1, 2, 3]) //?
pivotIndex([2, 1, -1]) //?
pivotIndex([-1, -1, 0, 1, 1, 0]) //?
