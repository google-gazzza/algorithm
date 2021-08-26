// [Easy] 1967. Number of Strings That Appear as Substrings in Word
// 1967_number_of_strings_that_appear_as_substrings_in_word

// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
// Runtime: 68 ms, faster than 92.36% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.
// Memory Usage: 40.1 MB, less than 28.24% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = function (patterns, word) {
  return patterns.filter((pattern) => word.includes(pattern)).length
}

numOfStrings(['a', 'abc', 'bc', 'd'], 'abc') //?
numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb') //?
numOfStrings(['a', 'a', 'a'], 'ab') //?
