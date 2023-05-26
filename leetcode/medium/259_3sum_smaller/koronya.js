// [Medium] 259. 3Sum Smaller
// 259_3sum_smaller

// https://leetcode.com/problems/3sum-smaller
// Runtime: 88 ms, faster than 87.39% of JavaScript online submissions for 3Sum Smaller.
// Memory Usage: 40.6 MB, less than 35.29% of JavaScript online submissions for 3Sum Smaller.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumSmaller = function (nums, target) {
  const numsLen = nums.length
  let result = 0
  nums.sort((a, b) => b - a)
  for (let right = numsLen - 1; right > 1; right -= 1 || 0) {
    const rest = target - nums[right]
    let left = 0
    let mid = right - 1
    while (left < mid) {
      if (nums[left] + nums[mid] < rest) {
        result += mid - left
        mid -= 1
      } else {
        left += 1
      }
    }
  }
  return result
}

threeSumSmaller([-2, 0, 1, 3], 2) //?
threeSumSmaller([], 0) //?
threeSumSmaller([0], 0) //?
