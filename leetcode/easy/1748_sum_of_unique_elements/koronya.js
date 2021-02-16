// [Easy] 1748. Sum of Unique Elements
// 1748_sum_of_unique_elements

// https://leetcode.com/problems/sum-of-unique-elements
// Runtime: 68 ms, faster than 99.27% of JavaScript online submissions for Sum of Unique Elements.
// Memory Usage: 39.1 MB, less than 29.34% of JavaScript online submissions for Sum of Unique Elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
  const numMap = new Map()
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
  }
  return [...numMap].filter((item) => item[1] === 1).reduce((acc, cur) => acc + cur[0], 0)
}

sumOfUnique([1, 2, 3, 2, 2]) //?
sumOfUnique([1, 1, 1, 1]) //?
