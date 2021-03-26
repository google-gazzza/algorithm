// [Easy] 1758. Minimum Changes To Make Alternating Binary String
// 1758_minimum_changes_to_make_alternating_binary_string

// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string
// Runtime: 76 ms, faster than 93.33% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.
// Memory Usage: 39.8 MB, less than 37.60% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.

const toggleString = (str) => (str === '1' ? '0' : '1')

/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function (s) {
  const sLen = s.length
  let count = 0
  let before = s[0]
  for (let i = 1; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (before === str) {
      before = toggleString(str)
      count += 1
    } else {
      before = str
    }
  }

  before = toggleString(s[0])
  let count2 = 1
  for (let i = 1; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (before === str) {
      before = toggleString(str)
      count2 += 1
    } else {
      before = str
    }
  }

  return Math.min(count, count2)
}

minOperations('0100') //?
minOperations('01') //?
minOperations('1111') //?
minOperations('10010100') //?
minOperations('01010101') //?
