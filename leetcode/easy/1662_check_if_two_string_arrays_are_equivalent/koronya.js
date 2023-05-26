// [Easy] 1662. Check If Two String Arrays are Equivalent 
// 1662_check_if_two_string_arrays_are_equivalent 

// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
// Runtime: 76 ms, faster than 80.10% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 38.6 MB, less than 74.54% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
const arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((acc, cur) => acc + cur, '') === word2.reduce((acc, cur) => acc + cur, '')
}
