// [Easy] 520. Detect Capital
// 520_detect_capital

// https://leetcode.com/problems/detect-capital
// Runtime: 76 ms, faster than 97.12% of JavaScript online submissions for Detect Capital.
// Memory Usage: 40.5 MB, less than 45.80% of JavaScript online submissions for Detect Capital.
const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)//?
const KEYCODE_OF_UPPER_Z = 'Z'.charCodeAt(0)//?
const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)//?
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0)//?
const isBetween = (num, min, max) => num >= min && num <= max
const isLowerAlphabet = str => isBetween(str.charCodeAt(), KEYCODE_OF_LOWER_A, KEYCODE_OF_LOWER_Z)
const isUpperAlphabet = str => isBetween(str.charCodeAt(), KEYCODE_OF_UPPER_A, KEYCODE_OF_UPPER_Z)

const detectCapitalUse = function (word) {
  const wordLen = word.length
  if (wordLen === 1) {
    return true
  }
  const [first, ...rest] = [...word]
  if (isUpperAlphabet(first) === true) {
    if (rest.every(str => isLowerAlphabet(str)) === true || rest.every(str => isUpperAlphabet(str)) === true) {
      return true
    }
  } else {
    if (rest.every(str => isLowerAlphabet(str)) === true) {
      return true
    }
  }

  return false
}
