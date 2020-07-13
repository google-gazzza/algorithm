// [Easy] 709. To Lower Case
// 709_to_lower_case

// https://leetcode.com/problems/to-lower-case
// Runtime: 60 ms, faster than 80.72% of JavaScript online submissions for To Lower Case.
// Memory Usage: 32.3 MB, less than 99.54% of JavaScript online submissions for To Lower Case.

/**
 * @param {string} str
 * @return {string}
 */
const CHAR_CODE_UPPER_A = 'A'.charCodeAt()
const CHAR_CODE_UPPER_Z = 'Z'.charCodeAt()
const CHAR_CODE_LOWER_A = 'a'.charCodeAt()
const DIFF_CHAR_CODE = CHAR_CODE_LOWER_A - CHAR_CODE_UPPER_A

const transform = char => {
  const charCode = char.charCodeAt()
  if (charCode >= CHAR_CODE_UPPER_A && charCode <= CHAR_CODE_UPPER_Z) {
    return String.fromCharCode(charCode + DIFF_CHAR_CODE)
  }
  return char
}

const toLowerCase = str => str.split('').map(transform).join('')
