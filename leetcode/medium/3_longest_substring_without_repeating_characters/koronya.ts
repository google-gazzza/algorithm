// [Medium] 3. Longest Substring Without Repeating Characters
// 3_longest_substring_without_repeating_characters

// https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime: 112 ms, faster than 72.22% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 44.1 MB, less than 69.61% of TypeScript online submissions for Longest Substring Without Repeating Characters.


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
  if (s === '') {
    return 0
  }
  const sLen: number = s.length
  const slidingWindow: string[] = [s[0]]
  const strSet = new Set<string>([s[0]])
  let max: number = 1
  for (let end: number = 1; end < sLen; end += 1) {
    const str: string = s[end]
    while (strSet.has(str) === true) {
      strSet.delete(slidingWindow.shift()!)
    }
    strSet.add(str)
    slidingWindow.push(str)
    max = Math.max(slidingWindow.length, max)
  }

  return max
}
