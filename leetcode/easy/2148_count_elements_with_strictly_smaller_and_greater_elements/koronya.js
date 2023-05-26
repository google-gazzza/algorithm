// [Easy] 2148. Count Elements With Strictly Smaller and Greater Elements
// 2148_count_elements_with_strictly_smaller_and_greater_elements

// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements
// Runtime: 116 ms, faster than 40.62% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
// Memory Usage: 42.5 MB, less than 9.94% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .

/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = function (nums) {
  nums.sort((a, b) => a - b)
  const min = nums[0]
  const max = nums[nums.length - 1]
  return nums.filter((num) => num !== min && num !== max).length
}

countElements([11, 7, 2, 15])
countElements([-3, 3, 3, 90])
