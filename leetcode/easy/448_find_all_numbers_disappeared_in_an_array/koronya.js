// [Easy] 448. Find All Numbers Disappeared in an Array
// 448_find_all_numbers_disappeared_in_an_array

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
// Runtime: 108 ms, faster than 88.48% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 46.2 MB, less than 6.89% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
const findDisappearedNumbers = nums => {
  const numsLen = nums.length
  const resultArr = []
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] *= -1
    }
  }
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    if (nums[i] > 0) {
      resultArr.push(i + 1)
    }
  }

  return resultArr
}
