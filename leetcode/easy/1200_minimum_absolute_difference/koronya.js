// [Easy] 1200. Minimum Absolute Difference
// 1200_minimum_absolute_difference

// https://leetcode.com/problems/minimum-absolute-difference
// Runtime: 152 ms, faster than 94.53% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 47.4 MB, less than 85.04% of JavaScript online submissions for Minimum Absolute Difference.
const minimumAbsDifference = arr => {
  const arrLen = arr.length
  let min = Number.MAX_SAFE_INTEGER
  let minArr = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arrLen - 1; i = i + 1 | 0) {
    const next = arr[i + 1]
    const present = arr[i]
    const diff = next - present
    if (diff === min) {
      minArr.push([present, next])
    } else if (diff < min) {
      min = diff
      minArr = [[present, next]]
    }
  }

  return minArr
}
