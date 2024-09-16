// [Easy] 1752. Check if Array Is Sorted and Rotated
// 1752_check_if_array_is_sorted_and_rotated

// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
// Runtime: 80 ms, faster than 59.95% of JavaScript online submissions for Check if Array Is Sorted and Rotated.
// Memory Usage: 38.6 MB, less than 74.88% of JavaScript online submissions for Check if Array Is Sorted and Rotated.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b)
  const firstNum = sortedNums[0]
  const numsLen = nums.length
  const getIndex = (index) => (index < numsLen ? index : index - numsLen)
  const indices = []
  let idx = nums.indexOf(firstNum)
  while (idx != -1) {
    indices.push(idx)
    idx = nums.indexOf(firstNum, idx + 1)
  }
  const indicesLen = indices.length
  for (let i = 0; i < indicesLen; i += 1 || 0) {
    const indexOfFirstNum = indices[i]
    let flag = true
    for (let j = 0; j < numsLen; j += 1 || 0) {
      if (nums[getIndex(indexOfFirstNum + j)] !== sortedNums[j]) {
        flag = false
        break
      }
    }
    if (flag === true) {
      return true
    }
  }
  return false
}

check([3, 4, 5, 1, 2]) //?
check([4, 3, 5, 1, 2]) //?
check([1, 2]) //?
check([2, 1]) //?
check([6, 10, 6]) //?
