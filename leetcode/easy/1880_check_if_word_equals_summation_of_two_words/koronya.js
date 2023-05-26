// [Easy] 1880. Check if Word Equals Summation of Two Words
// 1880_check_if_word_equals_summation_of_two_words

// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Check if Word Equals Summation of Two Words.
// Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Check if Word Equals Summation of Two Words.

const CHAR_CODE_AT_A = 'a'.charCodeAt(0)
const getMatchedString = (str) => String(str.charCodeAt(0) - CHAR_CODE_AT_A)
const getTotalNum = (str) => Number(str.split('').reduce((acc, cur) => acc + getMatchedString(cur), ''))

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = function (firstWord, secondWord, targetWord) {
  return getTotalNum(firstWord) + getTotalNum(secondWord) === getTotalNum(targetWord)
}


isSumEqual('acb', 'cba', 'cdb') //?
isSumEqual('aaa', 'a', 'aab') //?
