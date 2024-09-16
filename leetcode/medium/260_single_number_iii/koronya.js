// [Medium] 260. Single Number III
// 260_single_number_iii

// https://leetcode.com/problems/single-number-iii
// Runtime: 72 ms, faster than 93.74% of JavaScript online submissions for Single Number III.
// Memory Usage: 40.1 MB, less than 75.34% of JavaScript online submissions for Single Number III.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const singleNumber = function (nums) {
  const aXorB = nums.reduce((acc, cur) => acc ^ cur, 0)
  const firstBitPosition = aXorB.toString(2).length - 1
  const a = nums.filter((num) => ((num >> firstBitPosition) & 1) == 0).reduce((acc, cur) => acc ^ cur, 0)
  const b = aXorB ^ a
  return [a, b]
}

// not - uses only constant extra space
const singleNumber2 = function (nums) {
  const numSet = new Set()
  nums.forEach((num) => {
    if (numSet.has(num) === true) {
      numSet.delete(num)
    } else {
      numSet.add(num)
    }
  })

  return [...numSet]
}

singleNumber([1, 2, 1, 3, 2, 5]) //?
