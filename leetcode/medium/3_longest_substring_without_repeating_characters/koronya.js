// [Medium] 3. Longest Substring Without Repeating Characters
// 3_longest_substring_without_repeating_characters

// https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime: 138 ms, faster than 49.29% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 42.6 MB, less than 84.22% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s === '') {
    return 0
  }
  const sLen = s.length
  const slidingWindow = [s[0]]
  const strSet = new Set([s[0]])
  let max = 1
  for (let end = 1; end < sLen; end += 1 || 0) {
    const str = s[end]
    while (strSet.has(str) === true) {
      strSet.delete(slidingWindow.shift())
    }
    strSet.add(str)
    slidingWindow.push(str)
    max = Math.max(slidingWindow.length, max)
  }

  return max
}

// lengthOfLongestSubstring('abcabcbb') //?
// lengthOfLongestSubstring('bbbbb') //?
// lengthOfLongestSubstring('abcabcbb') //?
lengthOfLongestSubstring('') //?
