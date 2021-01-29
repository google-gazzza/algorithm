// [Easy] 796. Rotate String
// 796_rotate_string

// https://leetcode.com/problems/rotate-string
// Runtime: 72 ms, faster than 91.86% of JavaScript online submissions for Rotate String.
// Memory Usage: 38.9 MB, less than 30.85% of JavaScript online submissions for Rotate String.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

const convertStr = (str) => str.slice(1) + str[0]

const rotateString = function (A, B) {
  if (A === B) {
    return true
  }
  const ALen = A.length
  let adjustB = B
  let count = 0
  while (count < ALen) {
    if (A === adjustB) {
      return true
    }
    adjustB = convertStr(adjustB)
    count += 1
  }

  return false
}

rotateString('abcde', 'cdeab') //?
rotateString('abcde', 'abced') //?
rotateString('', '') //?
