// [Hard] 480. Sliding Window Median
// 480_sliding_window_median

// https://leetcode.com/problems/sliding-window-median
// Runtime: 9272 ms, faster than 66.67% of TypeScript online submissions for Sliding Window Median.
// Memory Usage: 46.7 MB, less than 33.33% of TypeScript online submissions for Sliding Window Median.

function medianSlidingWindow(nums: number[], k: number): number[] {
  const limit: number = nums.length - k
  const resultArr: number[] = []
  for (let i: number = 0; i <= limit; i += 1) {
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
