// [Medium] 16. 3Sum Closest
// 16_3sum_closest

// https://leetcode.com/problems/3sum-closest
// Runtime: 88 ms, faster than 84.62% of TypeScript online submissions for 3Sum Closest.
// Memory Usage: 40.8 MB, less than 64.42% of TypeScript online submissions for 3Sum Closest.

function threeSumClosest(nums: number[], target: number): number {
  const numsLen = nums.length
  let result = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  for (let right: number = numsLen - 1; right > 1; right -= 1) {
    let left = 0
    let mid = right - 1
    while (left < mid) {
      let sum = nums[left] + nums[mid] + nums[right]
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }
      if (sum > target) {
        mid -= 1
      } else {
        left += 1
      }
    }
  }
  return result
}

threeSumClosest([-2, 0, 1, 3], 2) //?
threeSumClosest([0, 0, 0], 0) //?
