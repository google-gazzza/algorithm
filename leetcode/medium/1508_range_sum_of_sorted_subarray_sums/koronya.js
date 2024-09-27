// [Medium] 1508. Range Sum of Sorted Subarray Sums
// 1508_range_sum_of_sorted_subarray_sums

// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums
// Runtime: 340 ms, faster than 100.00% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
// Memory Usage: 70 MB, less than 78.79% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = function (nums, n, left, right) {
  const subArrays = []
  for (let i = 0; i < n; i += 1 || 0) {
    let sum = nums[i]
    subArrays.push(sum)
    for (let j = i + 1; j < n; j += 1 || 0) {
      sum += nums[j]
      subArrays.push(sum)
    }
  }
  subArrays.sort((a, b) => a - b)

  let result = 0
  for (let i = left - 1; i < right; i += 1 || 0) {
    result += subArrays[i]
  }
  return result % (1000000000 + 7)
}

rangeSum([1, 2, 3, 4], 4, 1, 5) //?
rangeSum([1, 2, 3, 4], 4, 3, 4) //?
rangeSum([1, 2, 3, 4], 4, 1, 10) //?
