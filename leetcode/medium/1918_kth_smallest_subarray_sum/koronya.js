// [Medium] 1918. Kth Smallest Subarray Sum
// 1918_kth_smallest_subarray_sum

// https://leetcode.com/problems/kth-smallest-subarray-sum/
// Runtime: 191 ms, faster than 50.00% of JavaScript online submissions for Kth Smallest Subarray Sum.
// Memory Usage: 43.4 MB, less than 100.00% of JavaScript online submissions for Kth Smallest Subarray Sum.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const kthSmallestSubarraySum = function (nums, k) {
  const numsLen = nums.length
  const countLessEqual = (target) => {
    let count = 0
    let sum = 0
    let left = 0
    for (let right = 0; right < numsLen; right += 1 || 0) {
      sum += nums[right]
      while (sum > target) {
        sum -= nums[left]
        left += 1
      }
      count += right - left + 1
    }
    return count
  }

  let low = 1
  let high = nums.reduce((acc, cur) => acc + cur, 0)

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2)
    if (countLessEqual(mid) >= k) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
}

const kthSmallestSubarraySum3 = function (nums, k) {
  const arr = []
  const numsLen = nums.length
  const dfs = (sum, start) => {
    arr.push(sum)
    if (start < numsLen - 1) {
      start += 1
      const newSum = sum + nums[start]
      dfs(newSum, start)
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(nums[i], i)
  }

  arr.sort((a, b) => a - b)
  return arr[k - 1]
}

const kthSmallestSubarraySum2 = function (nums, k) {
  const arr = []
  const numsLen = nums.length
  const dfs = (sum, start) => {
    if (start === numsLen) {
      return
    }
    const newSum = sum + nums[start]
    arr.push(newSum)
    dfs(newSum, start + 1)
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    arr.push(num)
    dfs(num, i + 1)
  }

  arr.sort((a, b) => a - b)
  return arr[k - 1]
}

kthSmallestSubarraySum([2, 1, 3], 4) //?
kthSmallestSubarraySum([3, 3, 5, 5], 7) //?
