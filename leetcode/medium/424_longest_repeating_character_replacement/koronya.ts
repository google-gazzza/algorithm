// [Medium] 424. Longest Repeating Character Replacement
// 424_longest_repeating_character_replacement

// https://leetcode.com/problems/longest-repeating-character-replacement
// Runtime: 96 ms, faster than 77.55% of TypeScript online submissions for Longest Repeating Character Replacement.
// Memory Usage: 40.9 MB, less than 85.71% of TypeScript online submissions for Longest Repeating Character Replacement.

function characterReplacement(s: string, k: number): number {
  let left: number = 0
  let maxFrequency: number = 0
  const strMap = new Map<string, number>()
  const sLen: number = s.length
  let right: number = 0
  for (right = 0; right < sLen; right += 1) {
    const str = s[right]
    const value = (strMap.get(str) || 0) + 1
    strMap.set(str, value)
    maxFrequency = Math.max(maxFrequency, value)
    if (right - left + 1 - maxFrequency > k) {
      strMap.set(s[left], strMap.get(s[left])! - 1)
      left += 1
    }
  }

  return right - left
}

characterReplacement('ABAB', 2) //?
characterReplacement('AABABBA', 1) //?
