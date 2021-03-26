// [Easy] 1790. Check if One String Swap Can Make Strings Equal
// 1790_check_if_one_string_swap_can_make_strings_equal

// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal
// Runtime: 72 ms, faster than 94.27% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
// Memory Usage: 38.4 MB, less than 95.22% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
  const totalLen = s1.length
  let diffCount = 0
  const diffStrArr = []
  const diffStrArr2 = []
  for (let i = 0; i < totalLen; i += 1 || 0) {
    if (s1[i] !== s2[i]) {
      diffStrArr.push(s1[i])
      diffStrArr2.push(s2[i])
      diffCount += 1
    }
    if (diffCount > 2) {
      break
    }
  }

  return diffCount === 0 || (diffCount === 2 && diffStrArr[0] === diffStrArr2[1] && diffStrArr[1] === diffStrArr2[0])
}

areAlmostEqual('bank', 'kanb') //?
// areAlmostEqual('attack', 'defend') //?
// areAlmostEqual('kelb', 'kelb') //?
// areAlmostEqual('abcd', 'dcba') //?
// areAlmostEqual('aa', 'ac') //?
// areAlmostEqual('caa', 'aaz') //?
