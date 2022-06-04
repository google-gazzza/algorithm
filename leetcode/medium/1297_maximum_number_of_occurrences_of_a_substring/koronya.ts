// [Medium] 1297. Maximum Number of Occurrences of a Substring
// 1297_maximum_number_of_occurrences_of_a_substring

// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
// Runtime: 193 ms, faster than 83.33% of TypeScript online submissions for Maximum Number of Occurrences of a Substring.
// Memory Usage: 51.4 MB, less than 91.67% of TypeScript online submissions for Maximum Number of Occurrences of a Substring.

function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
  let result = 0
  let index = 0
  const freqMap = new Map<string, number>()
  const limit = s.length + 1 - minSize
  while (index < limit) {
    const word = s.slice(index, index + minSize)
    const wordSet = new Set(word)
    if (wordSet.size <= maxLetters) {
      const value = (freqMap.get(word) || 0) + 1
      freqMap.set(word, value)
      result = Math.max(result, value)
    }
    index += 1
  }

  return result
}

