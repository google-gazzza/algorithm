// [Medium] 795. Number of Subarrays with Bounded Maximum
// 795_number_of_subarrays_with_bounded_maximum

// https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum
// Runtime: 4212 ms, faster than 6.67% of TypeScript online submissions for Number of Subarrays with Bounded Maximum.
// Memory Usage: 47.4 MB, less than 6.67% of TypeScript online submissions for Number of Subarrays with Bounded Maximum.

function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  const numsLen: number = nums.length
  let count: number = 0
  for (let i: number = 0; i < numsLen; i += 1) {
    let max: number = -1
    for (let j: number = i; j < numsLen; j += 1) {
      max = Math.max(max, nums[j])
      if (max > right) {
        break
      }
      if (max >= left) {
        count += 1
      }
    }
  }
  return count
}

numSubarrayBoundedMax([2, 1, 4, 3], 2, 3) //?
numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8) //?
numSubarrayBoundedMax([7, 3, 6, 7, 1], 1, 4) //?
numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69) //?
