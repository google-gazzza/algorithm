// [Easy] 1446. Consecutive Characters
// 1446_consecutive_characters

// https://leetcode.com/problems/consecutive-characters/
// Runtime: 76 ms, faster than 97.01% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 39.6 MB, less than 34.56% of JavaScript online submissions for Consecutive Characters.
const maxPower = function (s) {
  const sLen = s.length
  let max = 1
  let count = 1
  let beforeStr = s[0]
  for (let i = 1; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str !== beforeStr) {
      beforeStr = str
      count = 1
    } else {
      count += 1
      max = Math.max(max, count)
    }
  }

  return max
}
