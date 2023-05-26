// [Medium] 1540. Can Convert String in K Moves
// 1540_can_convert_string_in_k_moves

// https://leetcode.com/problems/can-convert-string-in-k-moves
// Runtime: 135 ms, faster than 100.00% of TypeScript online submissions for Can Convert String in K Moves.
// Memory Usage: 51 MB, less than 100.00% of TypeScript online submissions for Can Convert String in K Moves.

function canConvertString(s: string, t: string, k: number): boolean {
  const sLen = s.length
  if (sLen !== t.length) {
    return false
  }
  const count = Array.from({ length: 26 }).map((_) => 0)
  for (let i: number = 0; i < sLen; i += 1) {
    const diff = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26
    if (diff !== 0) {
      if (diff + count[diff] * 26 > k) {
        return false
      }
      count[diff] += 1
    }
  }

  return true
}
