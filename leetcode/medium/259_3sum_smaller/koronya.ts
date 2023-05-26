// [Medium] 259. 3Sum Smaller
// 259_3sum_smaller

// https://leetcode.com/problems/3sum-smaller
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for 3Sum Smaller.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for 3Sum Smaller.

function threeSumSmaller(nums: number[], target: number): number {
  const numsLen = nums.length
  let result: number = 0
  nums.sort((a, b) => b - a)
  for (let right: number = numsLen - 1; right > 1; right -= 1) {
    const rest = target - nums[right]
    let left: number = 0
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
