// [Medium] 1664. Ways to Make a Fair Array
// 1664_ways_to_make_a_fair_array

// https://leetcode.com/problems/ways-to-make-a-fair-array
// Runtime: 96 ms, faster than 93.75% of JavaScript online submissions for Ways to Make a Fair Array.
// Memory Usage: 48.5 MB, less than 87.50% of JavaScript online submissions for Ways to Make a Fair Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function (nums) {
  const numsLen = nums.length
  let count = 0
  let oddSum = 0
  let evenSum = 0
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (i % 2 === 0) {
      oddSum += nums[i]
    } else {
      evenSum += nums[i]
    }
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
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

// TLE...
const waysToMakeFair2 = function (nums) {
  let count = 0
  const numsLen = nums.length
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0)
  const isValidIndex = (index) => {
    const nums2 = [...nums]
    const extractNum = nums2.splice(index, 1)
    const nums2Len = numsLen - 1
    let oddSum = 0
    for (let i = 0; i < nums2Len; i += 1 || 0) {
      if (i % 2 === 0) {
        oddSum += nums2[i]
      }
    }
    let evenSum = totalSum - oddSum - extractNum
    if (oddSum === evenSum) {
      return true
    }
    return false
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (isValidIndex(i) === true) {
      count += 1
    }
  }
  return count
}

waysToMakeFair([2, 1, 6, 4]) //?
waysToMakeFair([1, 1, 1]) //?
// waysToMakeFair([1, 2, 3]) //?
// waysToMakeFair([2, 1, 6, 4, 3, 5]) //?
