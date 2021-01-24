// [Medium] 1023. Camelcase Matching
// 1023_camelcase_matching

// https://leetcode.com/problems/camelcase-matching
// Runtime: 76 ms, faster than 84.00% of JavaScript online submissions for Camelcase Matching.
// Memory Usage: 38.6 MB, less than 60.00% of JavaScript online submissions for Camelcase Matching.

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
const CHAR_CODE_OF_BELOW_A = 'a'.charCodeAt(0)

const isUpperAlphabet = (str) => str.charCodeAt(0) < CHAR_CODE_OF_BELOW_A
const getNextUpperAlphabet = (str, lastIndex) => {
  const strLen = str.length
  for (let i = lastIndex + 1; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (isUpperAlphabet(char) === true) {
      return { upper: char, index: i }
    }
  }
  return { upper: '', index: -1 }
}
const getNextMatchBelowAlphabet = (str, lastIndex, findBelowChar) => {
  const strLen = str.length
  for (let i = lastIndex + 1; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (isUpperAlphabet(char) === true) {
      return { below: '', index: -1 }
    }
    if (isUpperAlphabet(char) === false && findBelowChar === char) {
      return { below: char, index: i }
    }
  }
  return { below: '', index: -1 }
}

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const camelMatch = function (queries, pattern) {
  const patternLen = pattern.length

  return queries.map((query) => {
    let lastIndex = -1
    for (let i = 0; i < patternLen; i += 1 || 0) {
      const str = pattern[i]
      if (isUpperAlphabet(str)) {
        const { upper, index } = getNextUpperAlphabet(query, lastIndex)
        if (upper === '' || upper !== str) {
          return false
        }
        lastIndex = index
      } else {
        const { below, index } = getNextMatchBelowAlphabet(query, lastIndex, str)
        if (below === '') {
          return false
        }
        lastIndex = index
      }
    }

    return getNextUpperAlphabet(query, lastIndex).upper === ''
  })
}

camelMatch(['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FB') //?
camelMatch(['FooBar', 'FiroeBar', 'FooBarTest', 'FrameBuffer'], 'FoB') //?
