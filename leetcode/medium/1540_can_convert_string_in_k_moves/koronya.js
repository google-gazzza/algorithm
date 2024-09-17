// [Medium] 1540. Can Convert String in K Moves
// 1540_can_convert_string_in_k_moves

// https://leetcode.com/problems/can-convert-string-in-k-moves
// Runtime: 124 ms, faster than 63.89% of JavaScript online submissions for Can Convert String in K Moves.
// Memory Usage: 47.7 MB, less than 41.67% of JavaScript online submissions for Can Convert String in K Moves.

/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
const canConvertString = function (s, t, k) {
  const sLen = s.length
  if (sLen !== t.length) {
    return false
  }
  const count = Array.from({ length: 26 }).map((_) => 0)
  for (let i = 0; i < sLen; i += 1 || 0) {
    const diff = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26
    if (diff !== 0) {
      if (diff + count[diff] * 26 > k) {
        return false
      }
      count[diff] += 1
    }
  }

  return true
}

canConvertString('input', 'ouput', 9) === true
// canConvertString('abc', 'bcd', 10) === false
// canConvertString('aab', 'bbb', 27) === true
// canConvertString('abc', 'abcd', 1000) === false
// canConvertString('atmtxzjkz', 'tvbtjhvjd', 35) === false
// canConvertString('mpzzwh', 'kaeblv', 24) === true
// canConvertString('mp', 'ka', 24) === true
// canConvertString('xfypf', 'aycwy', 34) === false
// canConvertString('xff', 'ayy', 34) === false
