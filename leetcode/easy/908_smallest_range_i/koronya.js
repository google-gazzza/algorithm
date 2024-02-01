// https://leetcode.com/problems/smallest-range-i
// Runtime: 52 ms, faster than 94.59% of JavaScript online submissions for Smallest Range I.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Smallest Range I.
const smallestRangeI = (A, K) => {
  const min = Math.min(...A)
  const max = Math.max(...A)
  const diff = max - min
  const result = diff - 2 * K
  return result > 0
    ? result
    : 0
}
