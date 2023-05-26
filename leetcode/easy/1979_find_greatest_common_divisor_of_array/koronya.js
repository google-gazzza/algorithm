// [Easy] 1979. Find Greatest Common Divisor of Array
// 1979_find_greatest_common_divisor_of_array

// https://leetcode.com/problems/find-greatest-common-divisor-of-array
// Runtime: 72 ms, faster than 94.27% of JavaScript online submissions for Find Greatest Common Divisor of Array.
// Memory Usage: 40.5 MB, less than 18.47% of JavaScript online submissions for Find Greatest Common Divisor of Array.

const getGCD = (a, b) => {
  if (a === 0) {
    return b
  }
  return getGCD(b % a, a)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
  nums.sort((a, b) => a - b)
  return getGCD(nums[0], nums[nums.length - 1])
}

findGCD([2, 5, 6, 9, 10]) //?
findGCD([7, 5, 6, 8, 3]) //?
findGCD([3, 3]) //?
