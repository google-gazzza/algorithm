// [Medium] 424. Longest Repeating Character Replacement
// 424_longest_repeating_character_replacement

// https://leetcode.com/problems/longest-repeating-character-replacement
// Runtime: 80 ms, faster than 96.51% of JavaScript online submissions for Longest Repeating Character Replacement.
// Memory Usage: 40.2 MB, less than 50.00% of JavaScript online submissions for Longest Repeating Character Replacement.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let left = 0
  let maxFrequency = 0
  const strMap = new Map()
  const sLen = s.length
  let right = 0
  for (right = 0; right < sLen; right += 1 || 0) {
    const str = s[right]
    const value = (strMap.get(str) || 0) + 1
    strMap.set(str, value)
    maxFrequency = Math.max(maxFrequency, value)
    if (right - left + 1 - maxFrequency > k) {
      strMap.set(s[left], strMap.get(s[left]) - 1)
      left += 1
    }
  }

  return right - left
}

characterReplacement('ABAB', 2) //?
characterReplacement('AABABBA', 1) //?
