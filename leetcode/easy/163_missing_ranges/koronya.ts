// [Easy] 163. Missing Ranges
// 163_missing_ranges

// https://leetcode.com/problems/missing-ranges
// Runtime: 80 ms, faster than 66.67% of TypeScript online submissions for Missing Ranges.
// Memory Usage: 43.2 MB, less than 48.15% of TypeScript online submissions for Missing Ranges.

function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
  const numsLen = nums.length
  if (upper - lower + 1 === numsLen) {
    return []
  }
  const resultArr = []
  let targetStart = lower
  let targetEnd = upper
  for (let i: number = 0; i < numsLen; i += 1) {
    const num = nums[i]
    if (num === targetStart) {
      targetStart = num + 1
    } else {
      break
    }
  }
  for (let i: number = numsLen - 1; i >= 0; i -= 1) {
    const num = nums[i]
    if (num === targetEnd) {
      targetEnd = num - 1
    } else {
      break
    }
  }
  const filteredNums = nums.filter((num) => num >= targetStart && num <= targetEnd)
  let prevTarget = targetStart
  filteredNums.forEach((num) => {
    if (num - prevTarget === 1) {
      resultArr.push(String(prevTarget))
    } else if (num !== prevTarget) {
      resultArr.push(`${prevTarget}->${num - 1}`)
    }
    prevTarget = num + 1
  })
  if (prevTarget === targetEnd) {
    resultArr.push(`${prevTarget}`)
  } else {
    resultArr.push(`${prevTarget}->${targetEnd}`)
  }

  return resultArr
}
