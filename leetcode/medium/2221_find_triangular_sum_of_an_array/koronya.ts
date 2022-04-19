// [Medium] 2221. Find Triangular Sum of an Array
// 2221_find_triangular_sum_of_an_array

// https://leetcode.com/problems/find-triangular-sum-of-an-array
// Runtime: 300 ms, faster than 34.48% of TypeScript online submissions for Find Triangular Sum of an Array.
// Memory Usage: 49.7 MB, less than 24.14% of TypeScript online submissions for Find Triangular Sum of an Array.

const getAdjustSum = (nums: number[], i: number): number => {
  const sum = nums[i] + nums[i + 1]
  return sum > 9 ? sum - 10 : sum
}

function triangularSum(nums: number[]): number {
  let limit = nums.length - 1
  let targets = nums
  while (limit > 0) {
    const newNums = []
    for (let i: number = 0; i < limit; i += 1) {
      newNums.push(getAdjustSum(targets, i))
    }
    targets = newNums
    limit -= 1
  }

  return targets[0]
}
