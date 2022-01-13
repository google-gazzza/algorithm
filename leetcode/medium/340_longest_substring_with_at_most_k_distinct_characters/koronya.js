// [Medium] 340. Longest Substring with At Most K Distinct Characters
// 340_longest_substring_with_at_most_k_distinct_characters

// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
// Runtime: 104 ms, faster than 53.70% of JavaScript online submissions for Longest Substring with At Most K Distinct Characters.
// Memory Usage: 41.9 MB, less than 50.97% of JavaScript online submissions for Longest Substring with At Most K Distinct Characters.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function (s, k) {
  if (k === 0) {
    return 0
  }
  const sLen = s.length
  const slidingWindow = [s[0]]
  const strMap = new Map()
  let max = 1

  const subtract = (str) => {
    const val = strMap.get(str) - 1
    if (val === 0) {
      strMap.delete(str)
    } else {
      strMap.set(str, val)
    }
  }

  const add = (str) => {
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }

  add(s[0])
  for (let end = 1; end < sLen; end += 1 || 0) {
    const str = s[end]
    if (strMap.has(str) === true) {
      slidingWindow.push(str)
      add(str)
      max = Math.max(max, slidingWindow.length)
    } else if (strMap.size < k) {
      slidingWindow.push(str)
      add(str)
      max = Math.max(max, slidingWindow.length)
    } else {
      slidingWindow.push(str)
      add(str)
      while (strMap.size > k) {
        const firstItem = slidingWindow.shift()
        subtract(firstItem)
      }
    }
  }

  return max
}

lengthOfLongestSubstringKDistinct('eceba', 2) //?
lengthOfLongestSubstringKDistinct('aa', 1) //?
lengthOfLongestSubstringKDistinct('a', 0) //?
lengthOfLongestSubstringKDistinct('abaccc', 2) //?
