// [Easy] 2006. Count Number of Pairs With Absolute Difference K
// 2006_count_number_of_pairs_with_absolute_difference_k

// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
// Runtime: 72 ms, faster than 97.94% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
// Memory Usage: 39.5 MB, less than 97.94% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = function (nums, k) {
  let count = 0
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const numA = nums[i]
    for (let j = i + 1; j < numsLen; j += 1 || 0) {
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
