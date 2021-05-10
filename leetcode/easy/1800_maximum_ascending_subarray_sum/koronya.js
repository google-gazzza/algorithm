// [Easy] 1800. Maximum Ascending Subarray Sum
// 1800_maximum_ascending_subarray_sum

// https://leetcode.com/problems/maximum-ascending-subarray-sum
// Runtime: 76 ms, faster than 79.73% of JavaScript online submissions for Maximum Ascending Subarray Sum.
// Memory Usage: 38.4 MB, less than 83.08% of JavaScript online submissions for Maximum Ascending Subarray Sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
  const numsLen = nums.length
  let before = nums[0]
  let beforeAcc = before
  let max = before
  for (let i = 1; i < numsLen; i += 1 || 0) {
    const num = nums[i]
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
