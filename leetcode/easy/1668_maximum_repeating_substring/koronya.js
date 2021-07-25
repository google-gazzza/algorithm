// [Easy] 1668. Maximum Repeating Substring
// 1668_maximum_repeating_substring

// https://leetcode.com/problems/maximum-repeating-substring
// Runtime: 72 ms, faster than 87.42% of JavaScript online submissions for Maximum Repeating Substring.
// Memory Usage: 40.5 MB, less than 5.30% of JavaScript online submissions for Maximum Repeating Substring.

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function (sequence, word) {
  const sequenceLen = sequence.length
  const wordLen = word.length
  const limit = sequenceLen - 1 - wordLen + 1
  let maxCount = 0
  for (let i = 0; i <= limit; i += 1 || 0) {
    if (sequence.substr(i, wordLen) === word) {
      let count = 1
      let index = i + wordLen
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
