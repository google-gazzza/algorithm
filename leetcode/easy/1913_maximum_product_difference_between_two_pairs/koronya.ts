// [Easy] 1913. Maximum Product Difference Between Two Pairs
// 1913_maximum_product_difference_between_two_pairs

// https://leetcode.com/problems/maximum-product-difference-between-two-pairs
// Runtime: 96 ms, faster than 79.10% of TypeScript online submissions for Maximum Product Difference Between Two Pairs.
// Memory Usage: 42.7 MB, less than 44.78% of TypeScript online submissions for Maximum Product Difference Between Two Pairs.

function maxProductDifference(nums: number[]): number {
  const numsLen: number = nums.length
  nums.sort((a, b) => a - b)
  return nums[numsLen - 1] * nums[numsLen - 2] - nums[0] * nums[1]
}

maxProductDifference([5, 6, 2, 7, 4]) //?
maxProductDifference([4, 2, 5, 9, 7, 4, 8]) //?
