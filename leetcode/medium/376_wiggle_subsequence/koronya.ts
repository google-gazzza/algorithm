// [Medium] 376. Wiggle Subsequence
// 376_wiggle_subsequence

// https://leetcode.com/problems/wiggle-subsequence
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Wiggle Subsequence.
// Memory Usage: 40.8 MB, less than 100.00% of TypeScript online submissions for Wiggle Subsequence.

function wiggleMaxLength(nums: number[]): number {
  const numsLen: number = nums.length
  if (numsLen === 1) {
    return 1
  }
  let before: number = nums[0]
  const arr: string[] = []
  for (let i: number = 1; i < numsLen; i += 1) {
    const num: number = nums[i]
    if (before < num) {
      arr.push('U')
    } else if (before > num) {
      arr.push('D')
    }
    before = num
  }
  const arrLen: number = arr.length
  if (arrLen === 0) {
    return 1
  }
  let beforeStr: string = arr[0]
  let count: number = 2

  for (let i: number = 1; i < arrLen; i += 1) {
    const str: string = arr[i]
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
