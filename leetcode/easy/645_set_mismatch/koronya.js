// [Easy] 645. Set Mismatch
// 645_set_mismatch

// https://leetcode.com/problems/set-mismatch
// Runtime: 112 ms, faster than 36.52% of JavaScript online submissions for Set Mismatch.
// Memory Usage: 48.3 MB, less than 12.36% of JavaScript online submissions for Set Mismatch.
const findErrorNums = function (nums) {
  const resultArr = []
  const numsLen = nums.length
  const numSet = new Set()
  for (let i = 1; i <= numsLen; i += 1 || 0) {
    numSet.add(i)
  }
  nums.forEach(num => {
    if (numSet.delete(num) === false) {
      resultArr.push(num)
    }
  })
  numSet.forEach(num => resultArr.push(num))

  return resultArr
}
