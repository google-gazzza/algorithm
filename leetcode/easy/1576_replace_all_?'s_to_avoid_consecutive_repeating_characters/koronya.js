// [Easy] 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
// 1576_replace_all_?'s_to_avoid_consecutive_repeating_characters

// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
// Runtime: 80 ms, faster than 91.52% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
// Memory Usage: 39.6 MB, less than 96.97% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.

const CHAR_CODE_OF_A = 'a'.charCodeAt(0) //?
const LENGTH_OF_ALPHABET = 26

const getRandomCharExceptCharArr = (charArr) => {
  let randomChar = ''
  while (randomChar === '' || charArr.includes(randomChar) === true) {
    randomChar = String.fromCharCode(Math.floor(Math.random() * LENGTH_OF_ALPHABET) + CHAR_CODE_OF_A)
  }
  return randomChar
}

/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function (s) {
  const sLen = s.length
  let result = ''
  let before = ''
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str !== '?') {
      result += str
      before = str
    } else {
      if (i !== sLen - 1) {
        const next = s[i + 1]
        const now = getRandomCharExceptCharArr([before, next])
        result += now
        before = now
      } else {
        result += getRandomCharExceptCharArr([before])
      }
    }
  }

  return result
}

modifyString('?zs') //?
modifyString('ubv?w') //?
modifyString('j?qg??b') //?
modifyString('??yw?ipkj?') //?
