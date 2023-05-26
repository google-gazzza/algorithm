// [Easy] 1614. Maximum Nesting Depth of the Parentheses
// 1614_maximum_nesting_depth_of_the_parentheses

// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
const maxDepth = s => {
  let depth = 0
  let maxDepth = 0
  const sLen = s.length
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const str = s[i]
    if (str === '(') {
      depth += 1
      maxDepth = Math.max(maxDepth, depth)
    } else if (str === ')') {
      depth -= 1
    }
  }

  return maxDepth
}
