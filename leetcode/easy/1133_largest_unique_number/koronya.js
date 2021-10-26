// [Easy] 1133. Largest Unique Number
// 1133_largest_unique_number

// https://leetcode.com/problems/largest-unique-number
// Runtime: 76 ms, faster than 88.89% of JavaScript online submissions for Largest Unique Number.
// Memory Usage: 40.2 MB, less than 66.67% of JavaScript online submissions for Largest Unique Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
const largestUniqueNumber = function (nums) {
  const numMap = new Map()
  nums.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  const uniqueArr = [...numMap].filter((item) => item[1] === 1).map((item) => item[0])
  return uniqueArr.length > 0 ? Math.max(...uniqueArr) : -1
}

largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]) //?
largestUniqueNumber([9, 9, 8, 8]) //?
