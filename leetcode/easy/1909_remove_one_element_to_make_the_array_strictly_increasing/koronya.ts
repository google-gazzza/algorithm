// [Easy] 1909. Remove One Element to Make the Array Strictly Increasing
// 1909_remove_one_element_to_make_the_array_strictly_increasing

// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing
// Runtime: 96 ms, faster than 72.00% of TypeScript online submissions for Remove One Element to Make the Array Strictly Increasing.
// Memory Usage: 45.2 MB, less than 20.00% of TypeScript online submissions for Remove One Element to Make the Array Strictly Increasing.

const checkArr = (arr: number[]): boolean => {
  const arrLen: number = arr.length
  let before: number = arr[0]
  for (let i: number = 1; i < arrLen; i += 1) {
    const now: number = arr[i]
    if (now <= before) {
      return false
    }
    before = now
  }
  return true
}

function canBeIncreasing(nums: number[]): boolean {
  let check: boolean = checkArr(nums)
  if (check === true) {
    return true
  }
  const numsLen: number = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    const copiedArr: number[] = [...nums]
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
