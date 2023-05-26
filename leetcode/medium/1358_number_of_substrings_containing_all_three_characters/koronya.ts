// [Medium] 1358. Number of Substrings Containing All Three Characters
// 1358_number_of_substrings_containing_all_three_characters

// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
// Runtime: 124 ms, faster than 57.14% of TypeScript online submissions for Number of Substrings Containing All Three Characters.
// Memory Usage: 45.6 MB, less than 14.29% of TypeScript online submissions for Number of Substrings Containing All Three Characters.

function numberOfSubstrings(s: string): number {
  const sLen: number = s.length
  const countMap = new Map<string, number>()
  let result: number = 0
  let left: number = 0
  for (let right: number = 0; right < sLen; right += 1 || 0) {
    const rightStr: string = s[right]
    countMap.set(rightStr, (countMap.get(rightStr) || 0) + 1)
    while (countMap.size > 2) {
      const leftStr: string = s[left]
      result += sLen - right
      const leftStrCount: number = countMap.get(leftStr)!
      if (leftStrCount === 1) {
        countMap.delete(leftStr)
      } else {
        countMap.set(leftStr, leftStrCount - 1)
      }
      left += 1
    }
  }

  return result
}
