// [Easy] 724. Find Pivot Index
// 724_find_pivot_index

// https://leetcode.com/problems/find-pivot-index
// Runtime: 96 ms, faster than 90.63% of TypeScript online submissions for Find Pivot Index.
// Memory Usage: 41.1 MB, less than 84.38% of TypeScript online submissions for Find Pivot Index.

function pivotIndex(nums: number[]): number {
  const numsLen: number = nums.length
  const totalSum: number = nums.reduce((sum: number, cur: number): number => sum + cur, 0)
  let leftSum: number = 0
  let rightSum: number = totalSum - nums[0]
  for (let i: number = 0; i < numsLen; i += 1) {
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
