// [Easy] 2148. Count Elements With Strictly Smaller and Greater Elements
// 2148_count_elements_with_strictly_smaller_and_greater_elements

// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements
// Runtime: 72 ms, faster than 92.31% of TypeScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
// Memory Usage: 45.5 MB, less than 7.69% of TypeScript online submissions for Count Elements With Strictly Smaller and Greater Elements .

function countElements(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const min = nums[0]
  const max = nums[nums.length - 1]
  return nums.filter((num) => num !== min && num !== max).length
}
