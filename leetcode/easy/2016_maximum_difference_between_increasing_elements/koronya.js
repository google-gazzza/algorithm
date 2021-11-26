// [Easy] 2016. Maximum Difference Between Increasing Elements
// 2016_maximum_difference_between_increasing_elements

// https://leetcode.com/problems/maximum-difference-between-increasing-elements
// Runtime: 84 ms, faster than 31.68% of JavaScript online submissions for Maximum Difference Between Increasing Elements.
// Memory Usage: 38.3 MB, less than 98.27% of JavaScript online submissions for Maximum Difference Between Increasing Elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function (nums) {
  const numsLen = nums.length
  let max = -1

  const dfs = (index) => {
    let localMax = -1
    const num = nums[index]
    for (let i = index + 1; i < numsLen; i += 1 || 0) {
      if (num < nums[i]) {
        localMax = Math.max(localMax, nums[i] - num)
      }
    }
    return localMax
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    max = Math.max(max, dfs(i))
  }

  return max
}

maximumDifference([7, 1, 5, 4]) //?
maximumDifference([9, 4, 3, 2]) //?
maximumDifference([1, 5, 2, 10]) //?
maximumDifference([19, 28, 28, 28]) //?
