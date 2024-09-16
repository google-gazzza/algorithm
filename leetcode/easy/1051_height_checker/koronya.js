// https://leetcode.com/problems/height-checker
// Runtime: 56 ms, faster than 84.01% of JavaScript online submissions for Height Checker.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Height Checker.
const heightChecker = heights => {
  const sortedHeights = [...heights].sort((a, b) => a - b)
  const heightsLen = heights.length
  let count = 0
  for (let i = 0; i < heightsLen; i = i + 1 | 0) {
    if (heights[i] !== sortedHeights[i]) {
      count += 1
    }
  }
  return count
}
