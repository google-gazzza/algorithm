// [Medium] 1664. Ways to Make a Fair Array
// 1664_ways_to_make_a_fair_array

// https://leetcode.com/problems/ways-to-make-a-fair-array
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for Ways to Make a Fair Array.
// Memory Usage: 48.8 MB, less than 100.00% of TypeScript online submissions for Ways to Make a Fair Array.

function waysToMakeFair(nums: number[]): number {
  const numsLen = nums.length
  let count = 0
  let oddSum = 0
  let evenSum = 0
  for (let i: number = 0; i < numsLen; i += 1) {
    if (i % 2 === 0) {
      oddSum += nums[i]
    } else {
      evenSum += nums[i]
    }
  }

  for (let i: number = 0; i < numsLen; i += 1) {
    const num = nums[i]
    if (i % 2 === 0) {
      oddSum -= num
      if (oddSum === evenSum) {
        count += 1
      }
      evenSum += num
    } else if (i % 2 !== 0) {
      evenSum -= num
      if (evenSum === oddSum) {
        count += 1
      }
      oddSum += num
    }
  }
  return count
}

waysToMakeFair([2, 1, 6, 4]) //?
waysToMakeFair([1, 1, 1]) //?
// waysToMakeFair([1, 2, 3]) //?
// waysToMakeFair([2, 1, 6, 4, 3, 5]) //?
