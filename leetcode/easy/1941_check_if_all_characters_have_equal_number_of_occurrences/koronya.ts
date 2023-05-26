// [Easy] 1941. Check if All Characters Have Equal Number of Occurrences
// 1941_check_if_all_characters_have_equal_number_of_occurrences

// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
// Runtime: 88 ms, faster than 85.71% of TypeScript online submissions for Check if All Characters Have Equal Number of Occurrences.
// Memory Usage: 41.2 MB, less than 14.29% of TypeScript online submissions for Check if All Characters Have Equal Number of Occurrences.


/**
 * @param {string} s
 * @return {boolean}
 */
function areOccurrencesEqual(s: string): boolean {
  const strMap = new Map<string, number>()
  for (let i: number = 0, sLen = s.length; i < sLen; i += 1) {
    const str: string = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const strMapArr: [string, number][] = [...strMap]
  const strMapArrLen: number = strMapArr.length
  let before: number = strMapArr[0][1]
  for (let i: number = 1; i < strMapArrLen; i += 1) {
    if (strMapArr[i][1] !== before) {
      return false
    }
  }
  return true
}

areOccurrencesEqual('abacbc') //?
areOccurrencesEqual('aaabb') //?
