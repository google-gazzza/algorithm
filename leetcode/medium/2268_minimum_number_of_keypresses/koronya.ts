// [Medium] 2268. Minimum Number of Keypresses
// 2268_minimum_number_of_keypresses

// https://leetcode.com/problems/minimum-number-of-keypresses
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Minimum Number of Keypresses.
// Memory Usage: 45.4 MB, less than 100.00% of TypeScript online submissions for Minimum Number of Keypresses.

function minimumKeypresses(s: string): number {
  const strMap = new Map<string, number>()
  const sLen = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const sortedArr = [...strMap].sort((a, b) => b[1] - a[1])

  return sortedArr.reduce((acc, cur, index) => {
    const multi = index < 9 ? 1 : index < 18 ? 2 : 3
    return acc + cur[1] * multi
  }, 0)
}
