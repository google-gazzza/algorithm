// [Easy] 1935. Maximum Number of Words You Can Type
// 1935_maximum_number_of_words_you_can_type

// https://leetcode.com/problems/maximum-number-of-words-you-can-type
// Runtime: 72 ms, faster than 89.93% of JavaScript online submissions for Maximum Number of Words You Can Type.
// Memory Usage: 40.3 MB, less than 45.21% of JavaScript online submissions for Maximum Number of Words You Can Type.

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = function (text, brokenLetters) {
  const wordArr = text.split(' ')
  return wordArr.reduce((acc, cur) => {
    const arr = brokenLetters.split('')
    return arr.every((char) => cur.includes(char) === false) ? acc + 1 : acc
  }, 0)
}

canBeTypedWords('hello world', 'ad') //?
canBeTypedWords('leet code', 'lt') //?
canBeTypedWords('leet code', 'e') //?
