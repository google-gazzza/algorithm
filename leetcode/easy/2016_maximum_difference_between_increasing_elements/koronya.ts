// [Easy] 2016. Maximum Difference Between Increasing Elements
// 2016_maximum_difference_between_increasing_elements

// https://leetcode.com/problems/maximum-difference-between-increasing-elements
// Runtime: 110 ms, faster than 9.38% of TypeScript online submissions for Maximum Difference Between Increasing Elements.
// Memory Usage: 40.2 MB, less than 87.50% of TypeScript online submissions for Maximum Difference Between Increasing Elements.

function maximumDifference(nums: number[]): number {
  const numsLen: number = nums.length
  let max: number = -1

  const dfs = (index) => {
    let localMax = -1
    const num = nums[index]
    for (let i: number = index + 1; i < numsLen; i += 1) {
      if (num < nums[i]) {
        localMax = Math.max(localMax, nums[i] - num)
      }
    }
    return localMax
  }

  for (let i: number = 0; i < numsLen; i += 1) {
    max = Math.max(max, dfs(i))
  }

  return max
}

maximumDifference([7, 1, 5, 4]) //?
maximumDifference([9, 4, 3, 2]) //?
maximumDifference([1, 5, 2, 10]) //?
maximumDifference([19, 28, 28, 28]) //?
