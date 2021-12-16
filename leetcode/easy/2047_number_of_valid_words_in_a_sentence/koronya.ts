// [Easy] 2047. Number of Valid Words in a Sentence
// 2047_number_of_valid_words_in_a_sentence

// https://leetcode.com/problems/number-of-valid-words-in-a-sentence
// Runtime: 92 ms, faster than 76.92% of TypeScript online submissions for Number of Valid Words in a Sentence.
// Memory Usage: 44.7 MB, less than 25.64% of TypeScript online submissions for Number of Valid Words in a Sentence.

const CHAR_CODE_AT_LOWER_A = 'a'.charCodeAt(0)
const CHAR_CODE_AT_LOWER_Z = 'z'.charCodeAt(0)
const CHAR_CODE_AT_0 = '0'.charCodeAt(0)
const CHAR_CODE_AT_9 = '9'.charCodeAt(0)
const isLowerAlphabet = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_AT_LOWER_A && charCode <= CHAR_CODE_AT_LOWER_Z
}

const isNumeric = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_AT_0 && charCode <= CHAR_CODE_AT_9
}

const getAllIndexOfStr = (str: string, target: string): number[] => {
  let accStr = str
  let findIndex = accStr.indexOf(target)
  if (findIndex === -1) {
    return []
  }
  const result = [findIndex]
  accStr = accStr.slice(findIndex + 1)
  findIndex = accStr.indexOf(target)

  while (findIndex !== -1) {
    result.push(result[result.length - 1] + 1 + findIndex)
    accStr = accStr.slice(findIndex + 1)
    findIndex = accStr.indexOf(target)
  }

  return result
}

const isValid = (str: string): boolean => {
  const strLen = str.length
  const indexOfHyphen = getAllIndexOfStr(str, '-')
  const indexOfPunc_1 = getAllIndexOfStr(str, '!')
  const indexOfPunc_2 = getAllIndexOfStr(str, ',')
  const indexOfPunc_3 = getAllIndexOfStr(str, '.')
  const sumOfPunc = indexOfPunc_1.length + indexOfPunc_2.length + indexOfPunc_3.length

  if (indexOfHyphen.length > 1 || sumOfPunc > 1) {
    return false
  }

  if (indexOfHyphen.length === 1) {
    const index = indexOfHyphen[0]
    if (index === 0 || index === strLen - 1 || isLowerAlphabet(str[index - 1]) === false || isLowerAlphabet(str[index + 1]) === false) {
      return false
    }
  }
  if (sumOfPunc === 1) {
    const indexOfPunc = indexOfPunc_1[0] || indexOfPunc_2[0] || indexOfPunc_3[0]
    if (strLen !== 1 && indexOfPunc !== strLen - 1) {
      return false
    }
  }

  for (let i = 0; i < strLen; i += 1 || 0) {
    if (isNumeric(str[i]) === true) {
      return false
    }
  }

  return true
}

function countValidWords(sentence: string): number {
  const candidates = sentence.split(' ').filter((item) => item !== '')
  let count = 0
  candidates.forEach((candidate) => {
    if (isValid(candidate) === true) {
      count += 1
    }
  })
  return count
}

// countValidWords('cat and  dog') //?
// countValidWords('-!this  1-s b8d!') //?
// countValidWords('-!th-is  1-s b8d!') //?
// countValidWords('!this  1-s b8d!') //?
// countValidWords('alice and  bob are playing stone-game10') //?
// countValidWords('he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.') //?
