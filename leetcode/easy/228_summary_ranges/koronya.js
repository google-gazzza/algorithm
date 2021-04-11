// [Easy] 228. Summary Ranges
// 228_summary_ranges

// https://leetcode.com/problems/summary-ranges
// Runtime: 72 ms, faster than 84.89% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 38.3 MB, less than 90.11% of JavaScript online submissions for Summary Ranges.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 0) {
    return []
  }
  let start = nums[0]
  let candidate = [start]
  const resultArr = []
  const numsLen = nums.length
  for (let i = 1; i < numsLen; i += 1 || 0) {
    const candidateLen = candidate.length
    const num = nums[i]
    const last = candidate[candidateLen - 1]
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
  const candidateLen = candidate.length
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
