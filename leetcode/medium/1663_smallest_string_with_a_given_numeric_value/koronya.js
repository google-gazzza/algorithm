// [Medium] 1663. Smallest String With A Given Numeric Value
// 1663_smallest_string_with_a_given_numeric_value

// https://leetcode.com/problems/smallest-string-with-a-given-numeric-value
// Runtime: 135 ms, faster than 95.00% of JavaScript online submissions for Smallest String With A Given Numeric Value.
// Memory Usage: 61 MB, less than 60.00% of JavaScript online submissions for Smallest String With A Given Numeric Value.

const CHAR_CODE_OF_A = 'a'.charCodeAt(0)
const LENGTH_OF_ALPHABET = 26

const getCharFromNumber = (num) => {
  return String.fromCharCode(num - 1 + CHAR_CODE_OF_A)
}

const getString = (num, len) => {
  let str = ''
  const limit = len - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    str += 'a'
  }
  return str + getCharFromNumber(num - len + 1)
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  let target = k
  let 몫 = Math.floor(target / LENGTH_OF_ALPHABET)
  let 나머지 = target % LENGTH_OF_ALPHABET
  if (나머지 === 0 && 몫 === n) {
    return 'z'.repeat(몫)
  }
  while (true) {
    if (나머지 + 몫 >= n) {
      return getString(나머지, n - 몫) + 'z'.repeat(몫)
    } else {
      몫 -= 1
      나머지 += 26
    }
  }
}

// getSmallestString(3, 27)
// getSmallestString(2, 27)
// getSmallestString(5, 73)
// getSmallestString(5, 130)
// getSmallestString(85, 2159)
// getSmallestString(80, 576)
// getSmallestString(4, 32)
// getSmallestString(4, 30)
// getSmallestString(8, 129)
