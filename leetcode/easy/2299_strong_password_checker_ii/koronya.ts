// [Easy] 2299. Strong Password Checker II
// 2299_strong_password_checker_ii

// https://leetcode.com/problems/strong-password-checker-ii
// Runtime: 71 ms, faster than 93.75% of TypeScript online submissions for Strong Password Checker II.
// Memory Usage: 43.3 MB, less than 81.25% of TypeScript online submissions for Strong Password Checker II.

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
const CHAR_CODE_OF_0 = '0'.charCodeAt(0)
const CHAR_CODE_OF_9 = '9'.charCodeAt(0)

const isLowerLetter = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_LOWER_A && charCode <= CHAR_CODE_OF_LOWER_Z
}

const isUpperLetter = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_UPPER_A && charCode <= CHAR_CODE_OF_UPPER_Z
}

const isDigitLetter = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_0 && charCode <= CHAR_CODE_OF_9
}

const SPECIAL_LETTERS = '!@#$%^&*()-+'
const isSpecialLetter = (str: string): boolean => SPECIAL_LETTERS.includes(str)

function strongPasswordCheckerII(password: string): boolean {
  const passwordLen = password.length
  if (passwordLen < 8) {
    return false
  }
  let prev = ''
  let hasLowerLetter = false
  let hasUpperLetter = false
  let hasDigitLetter = false
  let hasSpecialLetter = false
  for (let i: number = 0; i < passwordLen; i += 1) {
    const str = password[i]
    if (prev === str) {
      return false
    }
    prev = str

    if (isLowerLetter(str) === true) {
      hasLowerLetter = true
    } else if (isUpperLetter(str) === true) {
      hasUpperLetter = true
    } else if (isDigitLetter(str) === true) {
      hasDigitLetter = true
    } else if (isSpecialLetter(str) === true) {
      hasSpecialLetter = true
    }
  }

  return hasLowerLetter && hasUpperLetter && hasDigitLetter && hasSpecialLetter
}
