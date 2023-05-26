// [Medium] 1508. Range Sum of Sorted Subarray Sums
// 1508_range_sum_of_sorted_subarray_sums

// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums
// Runtime: 372 ms, faster than 100.00% of TypeScript online submissions for Range Sum of Sorted Subarray Sums.
// Memory Usage: 70.6 MB, less than 100.00% of TypeScript online submissions for Range Sum of Sorted Subarray Sums.

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const subArrays: number[] = []
  for (let i: number = 0; i < n; i += 1) {
    let sum = nums[i]
    subArrays.push(sum)
    for (let j: number = i + 1; j < n; j += 1) {
      sum += nums[j]
      subArrays.push(sum)
    }
  }
  subArrays.sort((a, b) => a - b)

  let result = 0
  for (let i: number = left - 1; i < right; i += 1) {
    result += subArrays[i]
  }
  return result % (1000000000 + 7)
}

rangeSum([1, 2, 3, 4], 4, 1, 5) //?
rangeSum([1, 2, 3, 4], 4, 3, 4) //?
rangeSum([1, 2, 3, 4], 4, 1, 10) //?
