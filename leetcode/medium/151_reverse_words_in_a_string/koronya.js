// [Medium] 151. Reverse Words in a String
// 151_reverse_words_in_a_string

// https://leetcode.com/problems/reverse-words-in-a-string/
// Runtime: 66 ms, faster than 85.90% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 44.5 MB, less than 31.54% of JavaScript online submissions for Reverse Words in a String.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .trim()
    .split(' ')
    .filter((item) => item !== '')
    .reverse()
    .reduce((acc, cur) => `${acc} ${cur}`, '')
    .slice(1)
}

reverseWords('the sky is blue')
reverseWords('  hello world  ') === 'world hello'
reverseWords('a good   example')
