// [Easy] 2255. Count Prefixes of a Given String
// 2255_count_prefixes_of_a_given_string

// https://leetcode.com/problems/count-prefixes-of-a-given-string
// Runtime: 61 ms, faster than 100.00% of JavaScript online submissions for Count Prefixes of a Given String.
// Memory Usage: 42.1 MB, less than 100.00% of JavaScript online submissions for Count Prefixes of a Given String.

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = function (words, s) {
  return words.reduce((acc, cur) => (s.startsWith(cur) === true ? acc + 1 : acc), 0)
}

countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')
countPrefixes(['a', 'a'], 'aa')
