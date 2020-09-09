// [Easy] 696. Count Binary Substrings
// 696_count_binary_substrings

// https://leetcode.com/problems/count-binary-substrings
// Runtime: 100 ms, faster than 37.50% of JavaScript online submissions for Count Binary Substrings.
// Memory Usage: 47.2 MB, less than 12.50% of JavaScript online submissions for Count Binary Substrings.
const countBinarySubstrings = s => {
  const sameStrings = s.match(/(1|0)(\1)*/g)
  const sameStringsLen = sameStrings.length
  let count = 0
  for (let i = 1; i < sameStringsLen; i = i + 1 | 0) {
    count += Math.min(sameStrings[i].length, sameStrings[i - 1].length)
  }

  return count
}
