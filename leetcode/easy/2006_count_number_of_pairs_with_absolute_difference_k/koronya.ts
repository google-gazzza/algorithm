// [Easy] 2006. Count Number of Pairs With Absolute Difference K
// 2006_count_number_of_pairs_with_absolute_difference_k

// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Count Number of Pairs With Absolute Difference K.
// Memory Usage: 40.8 MB, less than 62.50% of TypeScript online submissions for Count Number of Pairs With Absolute Difference K.

function countKDifference(nums: number[], k: number): number {
  let count: number = 0
  const numsLen = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    const numA = nums[i]
    for (let j: number = i + 1; j < numsLen; j += 1) {
      const numB = nums[j]
      if (Math.abs(numA - numB) === k) {
        count += 1
      }
    }
  }
  return count
}

countKDifference([1, 2, 2, 1], 1) //?
countKDifference([1, 3], 3) //?
countKDifference([3, 2, 1, 5, 4], 2) //?
