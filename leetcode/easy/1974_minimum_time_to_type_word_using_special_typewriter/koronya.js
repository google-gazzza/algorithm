// [Easy] 1974. Minimum Time to Type Word Using Special Typewriter
// 1974_minimum_time_to_type_word_using_special_typewriter

// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter
// Runtime: 64 ms, faster than 97.89% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
// Memory Usage: 41.2 MB, less than 12.63% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.

const ALPHABET_LENGTH = 26

const getMinimumDistance = (a, b) => {
  const charCodeA = a.charCodeAt(0)
  const charCodeB = b.charCodeAt(0)
  const smallerCode = Math.min(charCodeA, charCodeB)
  const biggerCode = Math.max(charCodeA, charCodeB)
  const candidateA = [smallerCode, smallerCode + ALPHABET_LENGTH]

  return Math.min(...candidateA.map((item) => Math.abs(biggerCode - item)))
}

getMinimumDistance('a', 'a') //?
getMinimumDistance('a', 'c') //?
getMinimumDistance('a', 'x') //?

getMinimumDistance('a', 'b') //?
getMinimumDistance('b', 'z') //?
getMinimumDistance('z', 'a') //?

/**
 * @param {string} word
 * @return {number}
 */
const minTimeToType = function (word) {
  let prevStr = 'a'
  const wordLen = word.length
  let result = wordLen
  for (let i = 0; i < wordLen; i += 1 || 0) {
    const str = word[i]
    result += getMinimumDistance(prevStr, str)
    prevStr = str
  }

  return result
}

minTimeToType('abc') //?
minTimeToType('bza') //?
minTimeToType('zjpc') //?
