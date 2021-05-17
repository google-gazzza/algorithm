// [Easy] 1863. Sum of All Subset XOR Totals
// 1863_sum_of_all_subset_xor_totals

// https://leetcode.com/problems/sum-of-all-subset-xor-totals
// Runtime: 88 ms, faster than 75.00% of TypeScript online submissions for Sum of All Subset XOR Totals.
// Memory Usage: 44.6 MB, less than 37.50% of TypeScript online submissions for Sum of All Subset XOR Totals.

const getXORSum = (arr: number[]): number => {
  const arrLen: number = arr.length
  if (arrLen === 0) {
    return 0
  }
  if (arrLen === 1) {
    return arr[0]
  }
  return arr.reduce((acc, cur) => acc ^ cur, 0)
}

function subsetXORSum(nums: number[]): number {
  const numsLen: number = nums.length
  let result: number = 0
  const dfs = (arr: number[], start: number) => {
    result += getXORSum(arr)
    for (let i: number = start + 1; i < numsLen; i += 1) {
      dfs([...arr, nums[i]], i)
    }
  }
  for (let i: number = 0; i < numsLen; i += 1) {
    dfs([nums[i]], i)
  }

  return result
}

subsetXORSum([1, 3]) //?
subsetXORSum([5, 1, 6]) //?
subsetXORSum([3, 4, 5, 6, 7, 8]) //?
