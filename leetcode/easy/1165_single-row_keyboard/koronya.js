// [Easy] 1165. Single-Row Keyboard
// 1165_single-row_keyboard

// https://leetcode.com/problems/single-row-keyboard
// Runtime: 80 ms, faster than 74.47% of JavaScript online submissions for Single-Row Keyboard.
// Memory Usage: 41.8 MB, less than 6.38% of JavaScript online submissions for Single-Row Keyboard.

const getDistance = (a, b) => Math.abs(a - b)

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function (keyboard, word) {
  let result = 0
  const findIndex = (str) => keyboard.indexOf(str)
  const arr = word.split('').map((str) => findIndex(str))
  arr.unshift(0)
  const arrLen = arr.length
  for (let i = 0; i < arrLen - 1; i += 1 || 0) {
    result += getDistance(arr[i], arr[i + 1])
  }

  return result
}

calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba') //?
calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode') //?
