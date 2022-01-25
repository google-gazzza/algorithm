// [Medium] 2109. Adding Spaces to a String
// 2109_adding_spaces_to_a_string

// https://leetcode.com/problems/adding-spaces-to-a-string/
// Runtime: 220 ms, faster than 62.95% of JavaScript online submissions for Adding Spaces to a String.
// Memory Usage: 82.1 MB, less than 57.63% of JavaScript online submissions for Adding Spaces to a String.

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function (s, spaces) {
  let resultStr = ''
  let prev = 0
  spaces.forEach((space) => {
    resultStr += `${s.substring(prev, space)} `
    prev = space
  })
  resultStr += s.substring(prev)
  return resultStr
}

// TLE...
const addSpaces2 = function (s, spaces) {
  const sArr = s.split('')
  spaces.reverse().forEach((space) => sArr.splice(space, 0, ' '))
  return sArr.reduce((acc, cur) => acc + cur, '')
}

addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15])
addSpaces('icodeinpython', [1, 5, 7, 9])
addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6])
