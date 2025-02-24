// [Easy] 1768. Merge Strings Alternately
// 1768_merge_strings_alternately

// https://leetcode.com/problems/merge-strings-alternately
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Merge Strings Alternately.
// Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Merge Strings Alternately.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 const mergeAlternately = function (word1, word2) {
  const word1Len = word1.length
  const word2Len = word2.length
  const diff = Math.abs(word1Len - word2Len)
  let result = ''
  if (word1Len > word2Len) {
    for (let i = 0; i < word2Len; i += 1 || 0) {
      result += word1[i]
      result += word2[i]
    }
    for (let i = 0; i < diff; i += 1 || 0) {
      result += word1[word2Len + i]
    }
  } else {
    for (let i = 0; i < word1Len; i += 1 || 0) {
      result += word1[i]
      result += word2[i]
    }
    for (let i = 0; i < diff; i += 1 || 0) {
      result += word2[word1Len + i]
    }
  }
  return result
}

mergeAlternately('abc', 'pqr') //?
mergeAlternately('ab', 'pqrs') //?
mergeAlternately('abcd', 'pq') //?
