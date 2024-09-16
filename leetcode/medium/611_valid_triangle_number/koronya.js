// [Medium] 611. Valid Triangle Number
// 611_valid_triangle_number

// https://leetcode.com/problems/valid-triangle-number
// Runtime: 108 ms, faster than 87.39% of JavaScript online submissions for Valid Triangle Number.
// Memory Usage: 40.7 MB, less than 23.42% of JavaScript online submissions for Valid Triangle Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
  const numsLen = nums.length
  let result = 0
  nums.sort((a, b) => a - b)
  for (let right = numsLen - 1; right > 1; right -= 1 || 0) {
    const numsRight = nums[right]
    let left = 0
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

// Runtime: 1008 ms, faster than 20.72% of JavaScript online submissions for Valid Triangle Number.
// Memory Usage: 40.5 MB, less than 55.86% of JavaScript online submissions for Valid Triangle Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber2 = function (nums) {
  const numsLen = nums.length
  nums.sort((a, b) => a - b)
  let result = 0

  for (let i = 0; i < numsLen - 2; i += 1 || 0) {
    const numA = nums[i]
    for (let j = i + 1; j < numsLen - 1; j += 1 || 0) {
      const numB = nums[j]
      const sum = numA + numB
      for (let k = j + 1; k < numsLen; k += 1 || 0) {
        const numC = nums[k]
        if (sum <= numC) {
          break
        }
        result += 1
      }
    }
  }

  return result
}

triangleNumber([2, 2, 3, 4]) //?
triangleNumber([4, 2, 3, 4]) //?
