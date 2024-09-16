// [Easy] 1668. Maximum Repeating Substring
// 1668_maximum_repeating_substring

// https://leetcode.com/problems/maximum-repeating-substring
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Maximum Repeating Substring.
// Memory Usage: 41 MB, less than 10.00% of TypeScript online submissions for Maximum Repeating Substring.

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
function maxRepeating(sequence: string, word: string): number {
  const sequenceLen: number = sequence.length
  const wordLen: number = word.length
  const limit: number = sequenceLen - 1 - wordLen + 1
  let maxCount: number = 0
  for (let i: number = 0; i <= limit; i += 1) {
    if (sequence.substr(i, wordLen) === word) {
      let count: number = 1
      let index: number = i + wordLen
      maxCount = Math.max(count, maxCount)
      while (index <= limit) {
        if (sequence.substr(index, wordLen) === word) {
          count += 1
          maxCount = Math.max(count, maxCount)
          index += wordLen
        } else {
          break
        }
      }
    }
  }
  return maxCount
}

maxRepeating('ababc', 'ab') //?
maxRepeating('ababc', 'ba') //?
maxRepeating('ababc', 'ac') //?
