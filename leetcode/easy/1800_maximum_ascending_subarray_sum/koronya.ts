// [Easy] 1800. Maximum Ascending Subarray Sum
// 1800_maximum_ascending_subarray_sum

// https://leetcode.com/problems/maximum-ascending-subarray-sum
// Runtime: 80 ms, faster than 83.33% of TypeScript online submissions for Maximum Ascending Subarray Sum.
// Memory Usage: 38.9 MB, less than 100.00% of TypeScript online submissions for Maximum Ascending Subarray Sum.
function maxAscendingSum(nums: number[]): number {
  const numsLen: number = nums.length
  let before: number = nums[0]
  let beforeAcc: number = before
  let max: number = before
  for (let i: number = 1; i < numsLen; i += 1) {
    const num: number = nums[i]
    if (num > before) {
      beforeAcc += num
    } else {
      beforeAcc = num
    }
    before = num
    max = Math.max(max, beforeAcc)
  }

  return max
}

maxAscendingSum([10, 20, 30, 5, 10, 50]) //?
maxAscendingSum([10, 20, 30, 40, 50]) //?
maxAscendingSum([12, 17, 15, 13, 10, 11, 12]) //?
maxAscendingSum([100, 10, 1]) //?
maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]) //?
