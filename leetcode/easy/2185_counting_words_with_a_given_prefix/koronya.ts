// [Easy] 2185. Counting Words With a Given Prefix
// 2185_counting_words_with_a_given_prefix

// https://leetcode.com/problems/counting-words-with-a-given-prefix
// Runtime: 89 ms, faster than 66.67% of TypeScript online submissions for Counting Words With a Given Prefix.
// Memory Usage: 44.6 MB, less than 88.89% of TypeScript online submissions for Counting Words With a Given Prefix.

function prefixCount(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref) === true).length
}
