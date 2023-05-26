// [Easy] 1909. Remove One Element to Make the Array Strictly Increasing
// 1909_remove_one_element_to_make_the_array_strictly_increasing

// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing
// Runtime: 84 ms, faster than 56.13% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
// Memory Usage: 44.7 MB, less than 22.13% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.

const checkArr = (arr) => {
  const arrLen = arr.length
  let before = arr[0]
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const now = arr[i]
    if (now <= before) {
      return false
    }
    before = now
  }
  return true
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function (nums) {
  let check = checkArr(nums)
  if (check === true) {
    return true
  }
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const copiedArr = [...nums]
    copiedArr.splice(i, 1)
    if (checkArr(copiedArr) === true) {
      return true
    }
  }
  return false
}

canBeIncreasing([1, 2, 10, 5, 7]) //?
canBeIncreasing([2, 3, 1, 2]) //?
canBeIncreasing([1, 1, 1]) //?
canBeIncreasing([1, 2, 3]) //?
canBeIncreasing([541, 783, 433, 744]) //?
