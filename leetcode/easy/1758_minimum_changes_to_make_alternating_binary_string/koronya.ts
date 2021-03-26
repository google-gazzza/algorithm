// [Easy] 1758. Minimum Changes To Make Alternating Binary String
// 1758_minimum_changes_to_make_alternating_binary_string

// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string
// Runtime: 88 ms, faster than 52.17% of TypeScript online submissions for Minimum Changes To Make Alternating Binary String.
// Memory Usage: 41.4 MB, less than 13.04% of TypeScript online submissions for Minimum Changes To Make Alternating Binary String.

const toggleString = (str: string): string => (str === '1' ? '0' : '1')

function minOperations(s: string): number {
  const sLen: number = s.length
  let count: number = 0
  let before: string = s[0]
  for (let i: number = 1; i < sLen; i += 1) {
    const str: string = s[i]
    if (before === str) {
      before = toggleString(str)
      count += 1
    } else {
      before = str
    }
  }

  before = toggleString(s[0])
  let count2: number = 1
  for (let i: number = 1; i < sLen; i += 1) {
    const str: string = s[i]
    if (before === str) {
      before = toggleString(str)
      count2 += 1
    } else {
      before = str
    }
  }

  return Math.min(count, count2)
}
