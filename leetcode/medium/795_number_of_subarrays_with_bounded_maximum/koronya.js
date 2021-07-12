// [Medium] 795. Number of Subarrays with Bounded Maximum
// 795_number_of_subarrays_with_bounded_maximum

// https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum
// Runtime: 4220 ms, faster than 5.15% of JavaScript online submissions for Number of Subarrays with Bounded Maximum.
// Memory Usage: 46.5 MB, less than 8.73% of JavaScript online submissions for Number of Subarrays with Bounded Maximum.

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function (nums, left, right) {
  const numsLen = nums.length
  let count = 0
  for (let i = 0; i < numsLen; i += 1 || 0) {
    let max = -1
    for (let j = i; j < numsLen; j += 1 || 0) {
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

// 비슷한걸 재귀로 돌리면 TLE...
const numSubarrayBoundedMax2 = function (nums, left, right) {
  const numsLen = nums.length
  let count = 0
  const loop = (start, max = -1) => {
    const num = nums[start]
    const newMax = num > max ? num : max
    if (newMax > right) {
      return
    }
    if (newMax >= left) {
      count += 1
    }
    if (start < numsLen - 1) {
      start += 1
      loop(start, newMax)
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    loop(i)
  }

  return count
}

numSubarrayBoundedMax([2, 1, 4, 3], 2, 3) //?
numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8) //?
numSubarrayBoundedMax([7, 3, 6, 7, 1], 1, 4) //?
numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69) //?
