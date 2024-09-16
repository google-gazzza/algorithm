// [Easy] 1991. Find the Middle Index in Array
// 1991_find_the_middle_index_in_array

// https://leetcode.com/problems/find-the-middle-index-in-array
// Runtime: 72 ms, faster than 96.74% of JavaScript online submissions for Find the Middle Index in Array.
// Memory Usage: 40 MB, less than 59.53% of JavaScript online submissions for Find the Middle Index in Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function (nums) {
  const numsLen = nums.length
  const totalSum = nums.reduce((sum, cur) => sum + cur, 0)
  let leftSum = 0
  let rightSum = totalSum - nums[0]
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (leftSum === rightSum) {
      return i
    }
    leftSum += nums[i]
    rightSum -= nums[i + 1]
  }

  return -1
}

findMiddleIndex([2, 3, -1, 8, 4]) //?
// findMiddleIndex([1, -1, 4]) //?
// findMiddleIndex([2, 5]) //?
// findMiddleIndex([1]) //?
