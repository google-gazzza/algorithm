// [Easy] 520. Detect Capital
// 520_detect_capital

// https://leetcode.com/problems/detect-capital
// Runtime: 96 ms, faster than 55.56% of TypeScript online submissions for Detect Capital.
// Memory Usage: 40.3 MB, less than 66.67% of TypeScript online submissions for Detect Capital.
const KEYCODE_OF_UPPER_A: number = 'A'.charCodeAt(0)
const KEYCODE_OF_UPPER_Z: number = 'Z'.charCodeAt(0)
const KEYCODE_OF_LOWER_A: number = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z: number = 'z'.charCodeAt(0)
type IsBetween = (num: number, min: number, max: number) => boolean
type IsAlphabet = (str: string) => boolean
const isBetween: IsBetween = (num, min, max) => num >= min && num <= max
const isLowerAlphabet: IsAlphabet = str => isBetween(str.charCodeAt(0), KEYCODE_OF_LOWER_A, KEYCODE_OF_LOWER_Z)
const isUpperAlphabet: IsAlphabet = str => isBetween(str.charCodeAt(0), KEYCODE_OF_UPPER_A, KEYCODE_OF_UPPER_Z)

const detectCapitalUse = function (word: string): boolean {
  const wordLen: number = word.length
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
