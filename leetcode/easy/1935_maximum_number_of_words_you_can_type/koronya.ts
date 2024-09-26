// [Easy] 1935. Maximum Number of Words You Can Type
// 1935_maximum_number_of_words_you_can_type

// https://leetcode.com/problems/maximum-number-of-words-you-can-type
// Runtime: 68 ms, faster than 96.77% of TypeScript online submissions for Maximum Number of Words You Can Type.
// Memory Usage: 40.6 MB, less than 77.42% of TypeScript online submissions for Maximum Number of Words You Can Type.

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text: string, brokenLetters: string): number {
  const wordArr: string[] = text.split(' ')
  return wordArr.reduce((acc, cur) => {
    const arr: string[] = brokenLetters.split('')
    return arr.every((char) => cur.includes(char) === false) ? acc + 1 : acc
  }, 0)
}

canBeTypedWords('hello world', 'ad') //?
canBeTypedWords('leet code', 'lt') //?
canBeTypedWords('leet code', 'e') //?
