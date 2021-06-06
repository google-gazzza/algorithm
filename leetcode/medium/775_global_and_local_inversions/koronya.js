// [Medium] 775. Global and Local Inversions
// 775_global_and_local_inversions

// https://leetcode.com/problems/global-and-local-inversions
// Runtime: 140 ms, faster than 49.57% of JavaScript online submissions for Global and Local Inversions.
// Memory Usage: 49.5 MB, less than 5.22% of JavaScript online submissions for Global and Local Inversions.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isIdealPermutation = function (nums) {
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const diff = i - nums[i]
    if (diff > 1 || diff < -1) {
      return false
    }
  }
  return true
}

// TLE...
const isIdealPermutation2 = function (nums) {
  const numsLen = nums.length
  const limit = numsLen - 1
  let localInversionCount = 0
  let globalInversionCount = 0
  let prev = nums[0]
  for (let i = 1; i < numsLen; i += 1 || 0) {
    if (prev > nums[i]) {
      localInversionCount += 1
    }
    prev = nums[i]
  }

  for (let i = 0; i < limit; i += 1 || 0) {
    let globalCandidate = nums[i]
    for (let j = i + 1; j < numsLen; j += 1 || 0) {
      if (globalCandidate > nums[j]) {
        globalInversionCount += 1
      }
    }
  }

  return localInversionCount === globalInversionCount
}

isIdealPermutation([1, 0, 2]) //?
isIdealPermutation([1, 2, 0]) //?

// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// [5, 3, 2, 8, 7, 0, 1, 4, 6]

// [2, 1, 0, 3, 4]
// [1, 2, 0, 3, 4]
