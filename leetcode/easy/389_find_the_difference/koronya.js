// [Easy] 389. Find the Difference
// 389_find_the_difference

// https://leetcode.com/problems/find-the-difference
// Runtime: 72 ms, faster than 92.71% of JavaScript online submissions for Find the Difference.
// Memory Usage: 37.6 MB, less than 58.13% of JavaScript online submissions for Find the Difference.
const findTheDifference = (s, t) => {
  const strMap = new Map()
  s.split('').forEach(str => strMap.set(str, (strMap.get(str) | 0) + 1))
  const tLen = t.length
  for (let i = 0; i < tLen; i = i + 1 | 0) {
    const str = t[i]
    const matchStrCount = strMap.get(str)
    if (!strMap.has(str)) {
      return str
    } else {
      if (matchStrCount === 1) {
        strMap.delete(str)
      } else {
        strMap.set(str, matchStrCount - 1)
      }
    }
  }
}
