// https://leetcode.com/problems/move-zeroes
// Runtime: 52 ms, faster than 98.98% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 36.3 MB, less than 17.02% of JavaScript online submissions for Move Zeroes.
const moveZeroes = nums => {
  const numsLen = nums.length
  let count = 0
  let index = 0
  while (count < numsLen) {
    if (nums[index] === 0) {
      nums.push(0)
      nums.splice(index, 1)
    } else {
      index += 1
    }
    count += 1
  }
  return nums
}
