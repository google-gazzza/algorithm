// [Easy] 643. Maximum Average Subarray I
// 643_maximum_average_subarray_i

// https://leetcode.com/problems/maximum-average-subarray-i
// Runtime: 148 ms, faster than 32.00% of JavaScript online submissions for Maximum Average Subarray I.
// Memory Usage: 50.1 MB, less than 23.67% of JavaScript online submissions for Maximum Average Subarray I.

const findMaxAverage = function (nums, k) {
  let sum = 0
  const sumArr = []
  let i = 0
  while (i < k) {
    const num = nums[i]
    sumArr.push(num)
    sum += num
    i += 1
  }
  let max = sum
  const numsLen = nums.length
  for (let i = k; i < numsLen; i += 1 || 0) {
    sum -= sumArr.shift()
    const num = nums[i]
    sum += num
    sumArr.push(num)
    max = Math.max(max, sum)
  }

  return max / k
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4) //?
