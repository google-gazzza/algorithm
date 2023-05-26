// [Easy] 1446. Consecutive Characters
// 1446_consecutive_characters

// https://leetcode.com/problems/consecutive-characters/
// Runtime: 88 ms, faster than 75.51% of TypeScript online submissions for Consecutive Characters.
// Memory Usage: 40.4 MB, less than 38.78% of TypeScript online submissions for Consecutive Characters.
function maxPower(s: string): number {
  const sLen: number = s.length
  let max: number = 1
  let count: number = 1
  let beforeStr: string = s[0]
  for (let i: number = 1; i < sLen; i += 1) {
    const str: string = s[i]
    if (str !== beforeStr) {
      beforeStr = str
      count = 1
    } else {
      count += 1
      max = Math.max(max, count)
    }
  }

  return max
}
