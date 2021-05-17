// [Easy] 1863. Sum of All Subset XOR Totals
// 1863_sum_of_all_subset_xor_totals

// https://leetcode.com/problems/sum-of-all-subset-xor-totals
// Runtime: 80 ms, faster than 94.38% of JavaScript online submissions for Sum of All Subset XOR Totals.
// Memory Usage: 44.8 MB, less than 14.61% of JavaScript online submissions for Sum of All Subset XOR Totals.

const getXORSum = (arr) => {
  const arrLen = arr.length
  if (arrLen === 0) {
    return 0
  }
  if (arrLen === 1) {
    return arr[0]
  }
  return arr.reduce((acc, cur) => acc ^ cur, 0)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
  const numsLen = nums.length
  let result = 0
  const dfs = (arr, start) => {
    result += getXORSum(arr)
    for (let i = start + 1; i < numsLen; i += 1 || 0) {
      dfs([...arr, nums[i]], i)
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs([nums[i]], i)
  }

  return result
}

subsetXORSum([1, 3]) //?
subsetXORSum([5, 1, 6]) //?
subsetXORSum([3, 4, 5, 6, 7, 8]) //?
