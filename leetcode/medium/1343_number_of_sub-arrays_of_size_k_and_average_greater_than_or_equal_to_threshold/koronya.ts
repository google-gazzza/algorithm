// [Medium] 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// 1343_number_of_sub-arrays_of_size_k_and_average_greater_than_or_equal_to_threshold

// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
// Runtime: 524 ms, faster than 33.33% of TypeScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.
// Memory Usage: 50 MB, less than 33.33% of TypeScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const limit: number = arr.length - 1
  const adjustThreshold: number = threshold * k
  const slideWindow: number[] = arr.slice(0, k)
  let count: number = 0
  let sum: number = slideWindow.reduce((acc, cur) => acc + cur, 0)
  if (sum >= adjustThreshold) {
    count += 1
  }

  for (let i: number = k; i <= limit; i += 1) {
    sum -= slideWindow.shift()!
    const num = arr[i]
    sum += num
    slideWindow.push(num)

    if (sum >= adjustThreshold) {
      count += 1
    }
  }

  return count
}

numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4) //?
