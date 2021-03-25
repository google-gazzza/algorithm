// [Easy] 594. Longest Harmonious Subsequence
// 594_longest_harmonious_subsequence

// https://leetcode.com/problems/longest-harmonious-subsequence
// Runtime: 112 ms, faster than 96.00% of TypeScript online submissions for Longest Harmonious Subsequence.
// Memory Usage: 47.9 MB, less than 88.00% of TypeScript online submissions for Longest Harmonious Subsequence.


function findLHS(nums: number[]): number {
  const numMap = new Map<number, number>()
  const numsLen: number = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    const num: number = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
  }
  const sortedArr: [number, number][] = [...numMap].sort((a, b) => a[0] - b[0])
  let maxCount: number = 0
  let before: number = sortedArr[0][0]
  let beforeCount: number = sortedArr[0][1]
  for (let i: number = 1; i < sortedArr.length; i += 1) {
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
