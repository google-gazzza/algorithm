// [Easy] 1880. Check if Word Equals Summation of Two Words
// 1880_check_if_word_equals_summation_of_two_words

// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Check if Word Equals Summation of Two Words.
// Memory Usage: 39.2 MB, less than 100.00% of TypeScript online submissions for Check if Word Equals Summation of Two Words.

const CHAR_CODE_AT_A: number = 'a'.charCodeAt(0)
const getMatchedString = (str: string): string => String(str.charCodeAt(0) - CHAR_CODE_AT_A)
const getTotalNum = (str: string): number => Number(str.split('').reduce((acc, cur) => acc + getMatchedString(cur), ''))

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  return getTotalNum(firstWord) + getTotalNum(secondWord) === getTotalNum(targetWord)
}

isSumEqual('acb', 'cba', 'cdb') //?
isSumEqual('aaa', 'a', 'aab') //?
