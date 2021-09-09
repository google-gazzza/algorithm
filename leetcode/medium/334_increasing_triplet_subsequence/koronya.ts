// [Medium] 334. Increasing Triplet Subsequence
// 334_increasing_triplet_subsequence

// https://leetcode.com/problems/increasing-triplet-subsequence
// Runtime: 88 ms, faster than 81.48% of TypeScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 53.2 MB, less than 51.85% of TypeScript online submissions for Increasing Triplet Subsequence.

function increasingTriplet(nums: number[]): boolean {
  const numsLen: number = nums.length
  let num1: number = Number.MAX_SAFE_INTEGER
  let num2: number = Number.MAX_SAFE_INTEGER
  for (let i: number = 0; i < numsLen; i += 1) {
    const num: number = nums[i]
    if (num > num1 && num > num2) {
      return true
    }
    if (num > num1) {
      num2 = num
    } else {
      num1 = num
    }
  }

  return false
}

increasingTriplet([1, 2, 3, 4, 5]) //?
increasingTriplet([5, 4, 3, 2, 1]) //?
increasingTriplet([2, 1, 5, 0, 4, 6]) //?
