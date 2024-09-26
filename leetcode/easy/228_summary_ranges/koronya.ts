// [Easy] 228. Summary Ranges
// 228_summary_ranges

// https://leetcode.com/problems/summary-ranges
// Runtime: 80 ms, faster than 73.53% of TypeScript online submissions for Summary Ranges.
// Memory Usage: 39 MB, less than 88.24% of TypeScript online submissions for Summary Ranges.
function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return []
  }
  let start: number = nums[0]
  let candidate: number[] = [start]
  const resultArr: string[] = []
  const numsLen: number = nums.length
  for (let i: number = 1; i < numsLen; i += 1) {
    const candidateLen: number = candidate.length
    const num: number = nums[i]
    const last: number = candidate[candidateLen - 1]
    if (num === last + 1) {
      candidate.push(num)
    } else {
      if (candidateLen === 1) {
        resultArr.push(`${candidate[0]}`)
      } else {
        resultArr.push(`${candidate[0]}->${last}`)
      }
      candidate = [num]
    }
  }
  const candidateLen: number = candidate.length
  if (candidateLen === 1) {
    resultArr.push(`${candidate[0]}`)
  } else {
    resultArr.push(`${candidate[0]}->${candidate[candidateLen - 1]}`)
  }
  return resultArr
}

summaryRanges([0, 1, 2, 4, 5, 7]) //?
summaryRanges([0, 1, 2, 4, 6, 7]) //?
summaryRanges([]) //?
