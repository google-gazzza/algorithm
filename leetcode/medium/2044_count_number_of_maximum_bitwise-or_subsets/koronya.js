// [Medium] 2044. Count Number of Maximum Bitwise-OR Subsets
// 2044_count_number_of_maximum_bitwise-or_subsets

// https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets
// Runtime: 80 ms, faster than 98.73% of JavaScript online submissions for Count Number of Maximum Bitwise-OR Subsets.
// Memory Usage: 39.5 MB, less than 65.82% of JavaScript online submissions for Count Number of Maximum Bitwise-OR Subsets.

/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
  const max = nums.reduce((acc, cur) => acc | cur, 0)
  const numsLen = nums.length
  let count = 0
  const dfs = (prev, acc) => {
    if (acc === max) {
      count += 1
    }
    for (let i = prev + 1; i < numsLen; i += 1 || 0) {
      dfs(i, nums[i] | acc)
    }
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(i, nums[i] | 0)
  }

  return count
}

countMaxOrSubsets([3, 2, 1, 5]) //?
countMaxOrSubsets([2, 2, 2]) //?
countMaxOrSubsets([3, 1]) //?
