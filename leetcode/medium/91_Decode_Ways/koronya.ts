// [Medium] 91. Decode Ways
// 91_decode_ways

// https://leetcode.com/problems/decode-ways
// Runtime: 128 ms, faster than 12.90% of TypeScript online submissions for Decode Ways.
// Memory Usage: 40.3 MB, less than 54.84% of TypeScript online submissions for Decode Ways.
function numDecodings(s: string, i = 0, strMap = new Map<number, number>()): number {
  if (strMap.has(i)) {
    return strMap.get(i)!
  }
  if (s[i] === '0') {
    return 0
  }
  if (i >= s.length - 1) {
    return 1
  }
  const value: number = Number(s[i] + s[i + 1]) < 27 ? numDecodings(s, i + 1, strMap) + numDecodings(s, i + 2, strMap) : numDecodings(s, i + 1, strMap)
  strMap.set(i, value)
  return strMap.get(i)!
}
