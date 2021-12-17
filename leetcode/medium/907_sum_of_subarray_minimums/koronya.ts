// [Medium] 907. Sum of Subarray Minimums
// 907_sum_of_subarray_minimums

// https://leetcode.com/problems/sum-of-subarray-minimums
// Runtime: 7440 ms, faster than 10.00% of TypeScript online submissions for Sum of Subarray Minimums.
// Memory Usage: 44.9 MB, less than 100.00% of TypeScript online submissions for Sum of Subarray Minimums.

function sumSubarrayMins(arr: number[]): number {
  const arrLen: number = arr.length
  let sum: number = 0
  for (let i: number = 0; i < arrLen; i += 1) {
    let min: number = arr[i]
    for (let j: number = i; j < arrLen; j += 1) {
      if (min > arr[j]) {
        min = arr[j]
      }
      sum += min
    }
  }

  return sum % 1000000007
}
