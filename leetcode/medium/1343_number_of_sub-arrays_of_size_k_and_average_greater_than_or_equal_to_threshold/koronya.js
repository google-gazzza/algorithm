// [Medium] 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// 1343_number_of_sub-arrays_of_size_k_and_average_greater_than_or_equal_to_threshold

// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
// Runtime: 445 ms, faster than 20.48% of JavaScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.
// Memory Usage: 49 MB, less than 21.69% of JavaScript online submissions for Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
  const limit = arr.length - 1
  const adjustThreshold = threshold * k
  const slideWindow = arr.slice(0, k)
  let count = 0
  let sum = slideWindow.reduce((acc, cur) => acc + cur, 0)
  if (sum >= adjustThreshold) {
    count += 1
  }

  for (let i = k; i <= limit; i += 1 || 0) {
    sum -= slideWindow.shift()
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
