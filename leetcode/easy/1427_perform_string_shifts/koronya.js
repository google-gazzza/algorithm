// [Easy] 1427. Perform String Shifts
// 1427_perform_string_shifts

// https://leetcode.com/problems/perform-string-shifts/
// Runtime: 68 ms, faster than 89.66% of JavaScript online submissions for Perform String Shifts.
// Memory Usage: 39 MB, less than 10.34% of JavaScript online submissions for Perform String Shifts.

const rotateStr = (str, num, isLeft = false) => {
  const strLen = str.length
  if (num >= strLen) {
    num %= strLen
  }
  if (isLeft === false) {
    const index = strLen - num
    const prev = str.substr(0, index)
    const next = str.substr(index)
    return next + prev
  }
  return str.substr(num) + str.substr(0, num)
}

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function (s, shift) {
  let result = s
  shift.forEach((item) => {
    const [key, value] = item
    result = rotateStr(result, value, key === 0)
  })
  return result
}

stringShift('abc', [
  [0, 1],
  [1, 2],
]) //?
stringShift('abcdefg', [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
]) //?

stringShift('abc', [[0, 4]]) //?
stringShift('mecsk', [
  [1, 15],
  [0, 10],
  [0, 13],
  [1, 24],
  [1, 31],
]) //?
