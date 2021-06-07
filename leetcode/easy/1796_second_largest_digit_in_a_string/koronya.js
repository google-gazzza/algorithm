// [Easy] 1796. Second Largest Digit in a String
// 1796_second_largest_digit_in_a_string

// https://leetcode.com/problems/second-largest-digit-in-a-string
// Runtime: 80 ms, faster than 95.60% of JavaScript online submissions for Second Largest Digit in a String.
// Memory Usage: 40.7 MB, less than 34.40% of JavaScript online submissions for Second Largest Digit in a String.

const CHAR_CODE_OF_0 = '0'.charCodeAt(0) //?
const CHAR_CODE_OF_9 = '9'.charCodeAt(0) //?

const isNumber = (str) => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_0 && charCode <= CHAR_CODE_OF_9
}

/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
  const numSet = new Set()
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (isNumber(str) === true) {
      numSet.add(Number(str))
    }
  }

  const numSetArr = [...numSet]
  return numSetArr.length < 2 ? -1 : numSetArr.sort((a, b) => b - a)[1]
}

secondHighest('dfa12321afd') //?
secondHighest('abc1111') //?
