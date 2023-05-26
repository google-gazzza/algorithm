// [Easy] 1805. Number of Different Integers in a String
// 1805_number_of_different_integers_in_a_string

// https://leetcode.com/problems/number-of-different-integers-in-a-string
// Runtime: 76 ms, faster than 82.55% of JavaScript online submissions for Number of Different Integers in a String.
// Memory Usage: 41.5 MB, less than 16.98% of JavaScript online submissions for Number of Different Integers in a String.

const removeLeadingZeros = (str) => {
  const strLen = str.length
  let endZero = false
  let resultStr = ''
  for (let i = 0; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (endZero === true) {
      resultStr += char
    } else if (char !== '0') {
      endZero = true
      resultStr += char
    }
  }
  return resultStr
}

/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
  const wordLen = word.length
  let accStr = ''
  const strSet = new Set()
  for (let i = 0; i < wordLen; i += 1 || 0) {
    const str = word[i]
    if (isNaN(Number(str)) === false) {
      accStr += str
    } else {
      if (accStr !== '' && strSet.has(accStr) === false) {
        strSet.add(accStr)
      }
      accStr = ''
    }
  }
  if (accStr !== '' && strSet.has(accStr) === false) {
    strSet.add(accStr)
  }

  return new Set([...strSet].map((str) => removeLeadingZeros(str))).size //?
}

numDifferentIntegers('a123bc34d8ef34') //?
numDifferentIntegers('leet1234code234') //?
numDifferentIntegers('a1b01c001') //?
