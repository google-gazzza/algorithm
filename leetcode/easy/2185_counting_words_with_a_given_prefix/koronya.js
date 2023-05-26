// [Easy] 2185. Counting Words With a Given Prefix
// 2185_counting_words_with_a_given_prefix

// https://leetcode.com/problems/counting-words-with-a-given-prefix
// Runtime: 77 ms, faster than 64.82% of JavaScript online submissions for Counting Words With a Given Prefix.
// Memory Usage: 42.3 MB, less than 98.49% of JavaScript online submissions for Counting Words With a Given Prefix.

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function (words, pref) {
  return words.filter((word) => word.startsWith(pref) === true).length
}

prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')
prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')
