// [Easy] 1790. Check if One String Swap Can Make Strings Equal
// 1790_check_if_one_string_swap_can_make_strings_equal

// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal
// Runtime: 76 ms, faster than 88.24% of TypeScript online submissions for Check if One String Swap Can Make Strings Equal.
// Memory Usage: 39.2 MB, less than 100.00% of TypeScript online submissions for Check if One String Swap Can Make Strings Equal.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  const totalLen: number = s1.length
  let diffCount: number = 0
  const diffStrArr: string[] = []
  const diffStrArr2: string[] = []
  for (let i: number = 0; i < totalLen; i += 1) {
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
