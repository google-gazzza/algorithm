// [Easy] 1941. Check if All Characters Have Equal Number of Occurrences
// 1941_check_if_all_characters_have_equal_number_of_occurrences

// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
// Runtime: 80 ms, faster than 82.47% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
// Memory Usage: 41.1 MB, less than 25.97% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.

/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function (s) {
  const strMap = new Map()
  for (let i = 0, sLen = s.length; i < sLen; i += 1 || 0) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const strMapArr = [...strMap] //?
  const strMapArrLen = strMapArr.length
  let before = strMapArr[0][1]
  for (let i = 1; i < strMapArrLen; i += 1 || 0) {
    if (strMapArr[i][1] !== before) {
      return false
    }
  }
  return true
}

areOccurrencesEqual('abacbc') //?
areOccurrencesEqual('aaabb') //?
