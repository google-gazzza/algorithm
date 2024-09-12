// [Easy] 594. Longest Harmonious Subsequence
// 594_longest_harmonious_subsequence

// https://leetcode.com/problems/longest-harmonious-subsequence
// Runtime: 124 ms, faster than 81.86% of JavaScript online submissions for Longest Harmonious Subsequence.
// Memory Usage: 49 MB, less than 44.86% of JavaScript online submissions for Longest Harmonious Subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  const numMap = new Map()
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
  }
  const sortedArr = [...numMap].sort((a, b) => a[0] - b[0])
  let maxCount = 0
  let before = sortedArr[0][0]
  let beforeCount = sortedArr[0][1]
  for (let i = 1; i < sortedArr.length; i += 1 || 0) {
    const [now, nowCount] = sortedArr[i]
    if (now - before === 1) {
      maxCount = Math.max(beforeCount + nowCount, maxCount)
    }
    before = now
    beforeCount = nowCount
  }

  return maxCount
}

findLHS([1, 2, 2, 3, 4, 5, 1, 1, 1, 1]) //?
// findLHS([9, 1, 3, 2, 2, 5, 2, 3, 7]) //?
// findLHS([1, 2, 3, 4]) //?
// findLHS([1, 1, 1, 1]) //?
