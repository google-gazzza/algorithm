// [Medium] 376. Wiggle Subsequence
// 376_wiggle_subsequence

// https://leetcode.com/problems/wiggle-subsequence
// Runtime: 88 ms, faster than 26.09% of JavaScript online submissions for Wiggle Subsequence.
// Memory Usage: 38.6 MB, less than 30.43% of JavaScript online submissions for Wiggle Subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const numsLen = nums.length
  if (numsLen === 1) {
    return 1
  }
  let before = nums[0]
  const arr = []
  for (let i = 1; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    if (before < num) {
      arr.push('U')
    } else if (before > num) {
      arr.push('D')
    }
    before = num
  }
  const arrLen = arr.length
  if (arrLen === 0) {
    return 1
  }
  let beforeStr = arr[0]
  let count = 2

  for (let i = 1; i < arrLen; i += 1 || 0) {
    const str = arr[i]
    if (beforeStr !== str) {
      count += 1
      beforeStr = str
    }
  }

  return count
}

wiggleMaxLength([1, 7, 4, 9, 2, 5]) //?
wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]) //?
wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]) //?
