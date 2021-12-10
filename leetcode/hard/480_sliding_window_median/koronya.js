// [Hard] 480. Sliding Window Median
// 480_sliding_window_median

// https://leetcode.com/problems/sliding-window-median
// Runtime: 9180 ms, faster than 24.10% of JavaScript online submissions for Sliding Window Median.
// Memory Usage: 45.9 MB, less than 51.81% of JavaScript online submissions for Sliding Window Median.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = function (nums, k) {
  const limit = nums.length - k
  const resultArr = []
  for (let i = 0; i <= limit; i += 1 || 0) {
    const sliceArr = nums.slice(i, i + k).sort((a, b) => a - b)
    if (k % 2 === 1) {
      resultArr.push(sliceArr[Math.floor(k / 2)])
    } else {
      resultArr.push((sliceArr[k / 2 - 1] + sliceArr[k / 2]) / 2)
    }
  }
  return resultArr
}

// medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3) //?
// medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3) //?
medianSlidingWindow([1, 4, 2, 3], 4) //?
medianSlidingWindow([1, 2, 3, 4, 5, 6], 6) //?
