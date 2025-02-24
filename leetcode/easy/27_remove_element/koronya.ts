// [Easy] 27. Remove Element
// 27_remove_element

// https://leetcode.com/problems/remove-element
// Runtime: 84 ms, faster than 58.84% of TypeScript online submissions for Remove Element.
// Memory Usage: 40.6 MB, less than 45.18% of TypeScript online submissions for Remove Element.

function removeElement(nums: number[], val: number): number {
  let count = 0
  let index = 0
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index += 1
    } else {
      count += 1
    }
  }
  return numsLen - count
}

// removeElement([3, 2, 2, 3], 3) //?
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) //?
