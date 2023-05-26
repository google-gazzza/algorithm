// [Medium] 137. Single Number II
// 137_single_number_ii

// https://leetcode.com/problems/single-number-ii
// Runtime: 76 ms, faster than 47.72% of JavaScript online submissions for Single Number II.
// Memory Usage: 37.9 MB, less than 26.67% of JavaScript online submissions for Single Number II.
const singleNumber = nums => {
  const sumOfUniqueNums = [...new Set(nums)].reduce((acc, cur) => acc + cur, 0)
  const sumOfAllNums = nums.reduce((acc, cur) => acc + cur, 0)
  return (sumOfUniqueNums * 3 - sumOfAllNums) / 2
}

// Runtime: 76 ms, faster than 47.72% of JavaScript online submissions for Single Number II.
// Memory Usage: 37.9 MB, less than 26.67% of JavaScript online submissions for Single Number II.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?...
const singleNumber2 = nums => {
  const numSet = new Set()
  const minusSet = new Set()
  nums.forEach(num => {
    if (!numSet.has(num)) {
      numSet.add(num)
    } else {
      minusSet.add(num)
    }
  })
  return nums.filter(num => !minusSet.has(num))[0]
}
