// [Easy] 1844. Replace All Digits with Characters
// 1844_replace_all_digits_with_characters

// https://leetcode.com/problems/replace-all-digits-with-characters
// Runtime: 76 ms, faster than 89.81% of JavaScript online submissions for Replace All Digits with Characters.
// Memory Usage: 38.4 MB, less than 82.87% of JavaScript online submissions for Replace All Digits with Characters.

/**
 * @param {string} s
 * @return {string}
 */

const getShiftStr = (prevStr, shift) => {
  prevStr.charCodeAt(0)
  return String.fromCharCode(prevStr.charCodeAt(0) + Number(shift))
}

const replaceDigits = function (s) {
  const sLen = s.length
  let prev = s[0]
  let result = prev
  for (let i = 1; i < sLen; i += 1 || 0) {
    let str = s[i]
    if (i % 2 === 1) {
      result += getShiftStr(prev, str)
    } else {
      prev = str
      result += prev
    }
  }
  return result
}

replaceDigits('a1c1e1') //?
replaceDigits('a1b2c3d4e') //?
