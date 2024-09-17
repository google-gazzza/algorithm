// [Easy] 1957. Delete Characters to Make Fancy String
// 1957_delete_characters_to_make_fancy_string

// https://leetcode.com/problems/delete-characters-to-make-fancy-string
// Runtime: 164 ms, faster than 95.15% of JavaScript online submissions for Delete Characters to Make Fancy String.
// Memory Usage: 51.4 MB, less than 89.09% of JavaScript online submissions for Delete Characters to Make Fancy String.

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function (s) {
  const sLen = s.length
  let resultStr = ''
  let prevStr = s[0]
  let prevCount = 1

  for (let i = 1; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str === prevStr) {
      if (prevCount < 2) {
        prevCount += 1
      }
    } else {
      resultStr += prevStr.repeat(prevCount)
      prevCount = 1
      prevStr = str
    }
  }
  resultStr += prevStr.repeat(prevCount)

  return resultStr
}

makeFancyString('leeetcode') //?
makeFancyString('aaabaaaa') //?
makeFancyString('aab') //?
