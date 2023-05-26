// [Easy] 2124. Check if All A's Appears Before All B's
// 2124_check_if_all_a's_appears_before_all_b's

// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs
// Runtime: 115 ms, faster than 36.52% of JavaScript online submissions for Check if All A's Appears Before All B's.
// Memory Usage: 38.6 MB, less than 77.93% of JavaScript online submissions for Check if All A's Appears Before All B's.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = function (s) {
  const indexOfB = s.indexOf('b')
  return indexOfB === -1 ? true : s.substring(indexOfB).includes('a') === false
}

checkString('aaabbb') //?
checkString('abab') //?
checkString('bbb') //?
checkString('a') //?
