// [Medium] 1541. Minimum Insertions to Balance a Parentheses String\
// 1541_minimum_insertions_to_balance_a_parentheses_string

// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Minimum Insertions to Balance a Parentheses String.
// Memory Usage: 43.3 MB, less than 33.33% of TypeScript online submissions for Minimum Insertions to Balance a Parentheses String.

function minInsertions(s: string): number {
  let result: number = 0
  const sLen: number = s.length
  let stackCount: number = 0
  let continuousCloseCount: number = 0
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (str === '(') {
      if (continuousCloseCount % 2 === 1 && stackCount > 0) {
        result += 1
        stackCount -= 1
      }
      stackCount += 2
      continuousCloseCount = 0
    } else {
      continuousCloseCount += 1
      if (stackCount > 0) {
        stackCount -= 1
      } else {
        result += 1
        stackCount += 1
      }
    }
  }
  result += stackCount

  return result
}
