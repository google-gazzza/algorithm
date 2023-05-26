// [Medium] 1023. Camelcase Matching
// 1023_camelcase_matching

// https://leetcode.com/problems/camelcase-matching
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Camelcase Matching.
// Memory Usage: 40.7 MB, less than 66.67% of TypeScript online submissions for Camelcase Matching.

const CHAR_CODE_OF_UPPER_A: number = 'A'.charCodeAt(0)
const CHAR_CODE_OF_BELOW_A: number = 'a'.charCodeAt(0)

interface nextUpperAlphabet {
  upper: string
  index: number
}

interface nextMatchBelowAlphabet {
  below: string
  index: number
}

const isUpperAlphabet = (str: string): boolean => str.charCodeAt(0) < CHAR_CODE_OF_BELOW_A
const getNextUpperAlphabet = (str: string, lastIndex: number): nextUpperAlphabet => {
  const strLen: number = str.length
  for (let i: number = lastIndex + 1; i < strLen; i += 1) {
    const char: string = str[i]
    if (isUpperAlphabet(char) === true) {
      return { upper: char, index: i }
    }
  }
  return { upper: '', index: -1 }
}
const getNextMatchBelowAlphabet = (str: string, lastIndex: number, findBelowChar: string): nextMatchBelowAlphabet => {
  const strLen: number = str.length
  for (let i: number = lastIndex + 1; i < strLen; i += 1) {
    const char: string = str[i]
    if (isUpperAlphabet(char) === true) {
      return { below: '', index: -1 }
    }
    if (isUpperAlphabet(char) === false && findBelowChar === char) {
      return { below: char, index: i }
    }
  }
  return { below: '', index: -1 }
}

function camelMatch(queries: string[], pattern: string): boolean[] {
  const patternLen: number = pattern.length

  return queries.map((query: string): boolean => {
    let lastIndex = -1
    for (let i: number = 0; i < patternLen; i += 1 || 0) {
      const str: string = pattern[i]
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
