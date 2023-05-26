// [Medium] 2044. Count Number of Maximum Bitwise-OR Subsets
// 2044_count_number_of_maximum_bitwise-or_subsets

// https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets
// Runtime: 96 ms, faster than 85.71% of TypeScript online submissions for Count Number of Maximum Bitwise-OR Subsets.
// Memory Usage: 40.7 MB, less than 28.57% of TypeScript online submissions for Count Number of Maximum Bitwise-OR Subsets.

function countMaxOrSubsets(nums: number[]): number {
  const max: number = nums.reduce((acc, cur) => acc | cur, 0)
  const numsLen: number = nums.length
  let count: number = 0
  const dfs = (prev: number, acc: number) => {
    if (acc === max) {
      count += 1
    }
    for (let i: number = prev + 1; i < numsLen; i += 1) {
      dfs(i, nums[i] | acc)
    }
  }

  for (let i: number = 0; i < numsLen; i += 1) {
    dfs(i, nums[i] | 0)
  }

  return count
}

countMaxOrSubsets([3, 2, 1, 5]) //?
countMaxOrSubsets([2, 2, 2]) //?
countMaxOrSubsets([3, 1]) //?
