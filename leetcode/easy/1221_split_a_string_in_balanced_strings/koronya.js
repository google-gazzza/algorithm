// https://leetcode.com/problems/split-a-string-in-balanced-strings
// Runtime: 48 ms, faster than 96.61% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
const balancedStringSplit = s => {
  let count = 0
  let resultCount = 0
  const sLen = s.length
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    if (s[i] === 'L') {
      count -= 1
    } else {
      count += 1
    }
    if (count === 0) {
      resultCount += 1
    }
  }

  return resultCount
}
