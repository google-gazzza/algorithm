// [Medium] 611. Valid Triangle Number
// 611_valid_triangle_number

// https://leetcode.com/problems/valid-triangle-number
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Valid Triangle Number.
// Memory Usage: 40.7 MB, less than 66.67% of TypeScript online submissions for Valid Triangle Number.

function triangleNumber(nums: number[]): number {
  const numsLen = nums.length
  let result: number = 0
  nums.sort((a, b) => a - b)
  for (let right: number = numsLen - 1; right > 1; right -= 1) {
    const numsRight = nums[right]
    let left: number = 0
    let mid = right - 1
    while (left < mid) {
      if (nums[left] + nums[mid] > numsRight) {
        result += mid - left
        mid -= 1
      } else {
        left += 1
      }
    }
  }

  return result
}

triangleNumber([2, 2, 3, 4]) //?
triangleNumber([4, 2, 3, 4]) //?
