// [Medium] 1918. Kth Smallest Subarray Sum
// 1918_kth_smallest_subarray_sum

// https://leetcode.com/problems/kth-smallest-subarray-sum/
// Runtime: 154 ms, faster than 33.33% of TypeScript online submissions for Kth Smallest Subarray Sum.
// Memory Usage: 43.4 MB, less than 100.00% of TypeScript online submissions for Kth Smallest Subarray Sum.

function kthSmallestSubarraySum(nums: number[], k: number): number {
  const numsLen: number = nums.length
  const countLessEqual = (target: number): number => {
    let count: number = 0
    let sum: number = 0
    let left: number = 0
    for (let right: number = 0; right < numsLen; right += 1) {
      sum += nums[right]
      while (sum > target) {
        sum -= nums[left]
        left += 1
      }
      count += right - left + 1
    }
    return count
  }

  let low: number = 1
  let high: number = nums.reduce((acc, cur) => acc + cur, 0)
  while (low < high) {
    let mid: number = Math.floor(low + (high - low) / 2)
    if (countLessEqual(mid) >= k) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
}
