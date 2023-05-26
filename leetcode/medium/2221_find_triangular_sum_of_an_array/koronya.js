// [Medium] 2221. Find Triangular Sum of an Array
// 2221_find_triangular_sum_of_an_array

// https://leetcode.com/problems/find-triangular-sum-of-an-array
// Runtime: 285 ms, faster than 39.57% of JavaScript online submissions for Find Triangular Sum of an Array.
// Memory Usage: 48.2 MB, less than 67.27% of JavaScript online submissions for Find Triangular Sum of an Array.

const getAdjustSum = (nums, i) => {
  const sum = nums[i] + nums[i + 1]
  return sum > 9 ? sum - 10 : sum
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = function (nums) {
  let limit = nums.length - 1
  let targets = nums
  while (limit > 0) {
    const newNums = []
    for (let i = 0; i < limit; i += 1 || 0) {
      newNums.push(getAdjustSum(targets, i))
    }
    targets = newNums
    limit -= 1
  }

  return targets[0]
}

triangularSum([1, 2, 3, 4, 5])
triangularSum([5])
