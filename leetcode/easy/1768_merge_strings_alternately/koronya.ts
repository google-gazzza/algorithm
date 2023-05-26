// [Easy] 1768. Merge Strings Alternately
// 1768_merge_strings_alternately

// https://leetcode.com/problems/merge-strings-alternately
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Merge Strings Alternately.
// Memory Usage: 40.3 MB, less than 100.00% of TypeScript online submissions for Merge Strings Alternately.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1: string, word2: string): string {
  const word1Len: number = word1.length
  const word2Len: number = word2.length
  const diff: number = Math.abs(word1Len - word2Len)
  let result: string = ''
  if (word1Len > word2Len) {
    for (let i: number = 0; i < word2Len; i += 1) {
      result += word1[i]
      result += word2[i]
    }
    for (let i: number = 0; i < diff; i += 1) {
      result += word1[word2Len + i]
    }
  } else {
    for (let i: number = 0; i < word1Len; i += 1) {
      result += word1[i]
      result += word2[i]
    }
    for (let i: number = 0; i < diff; i += 1) {
      result += word2[word1Len + i]
    }
  }
  return result
}

mergeAlternately('abc', 'pqr') //?
mergeAlternately('ab', 'pqrs') //?
mergeAlternately('abcd', 'pq') //?
