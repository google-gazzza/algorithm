// [Medium] 340. Longest Substring with At Most K Distinct Characters
// 340_longest_substring_with_at_most_k_distinct_characters

// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
// Runtime: 159 ms, faster than 14.71% of TypeScript online submissions for Longest Substring with At Most K Distinct Characters.
// Memory Usage: 42.4 MB, less than 50.00% of TypeScript online submissions for Longest Substring with At Most K Distinct Characters.


function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (k === 0) {
    return 0
  }
  const sLen: number = s.length
  const slidingWindow: string[] = [s[0]]
  const strMap = new Map<string, number>()
  let max: number = 1

  const subtract = (str: string) => {
    const val = strMap.get(str)! - 1
    if (val === 0) {
      strMap.delete(str)
    } else {
      strMap.set(str, val)
    }
  }

  const add = (str: string) => {
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }

  add(s[0])
  for (let end: number = 1; end < sLen; end += 1) {
    const str: string = s[end]
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
        const firstItem = slidingWindow.shift()!
        subtract(firstItem)
      }
    }
  }

  return max
}
