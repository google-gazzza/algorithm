// [Easy] 1979. Find Greatest Common Divisor of Array
// 1979_find_greatest_common_divisor_of_array

// https://leetcode.com/problems/find-greatest-common-divisor-of-array
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Find Greatest Common Divisor of Array.
// Memory Usage: 40.6 MB, less than 56.25% of TypeScript online submissions for Find Greatest Common Divisor of Array.

const getGCD = (a: number, b: number): number => {
  if (a === 0) {
    return b
  }
  return getGCD(b % a, a)
}

function findGCD(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return getGCD(nums[0], nums[nums.length - 1])
}

findGCD([2, 5, 6, 9, 10]) //?
findGCD([7, 5, 6, 8, 3]) //?
findGCD([3, 3]) //?
