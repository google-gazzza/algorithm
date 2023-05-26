// https://leetcode.com/problems/binary-number-with-alternating-bits
// Runtime: 68 ms, faster than 17.02% of JavaScript online submissions for Binary Number with Alternating Bits.
// Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Binary Number with Alternating Bits.
const hasAlternatingBits = n => {
  const binaryStr = n.toString(2)
  const binaryStrLen = binaryStr.length
  let prev = binaryStr[0]
  for (let i = 1; i < binaryStrLen; i = i + 1 | 0) {
    const current = binaryStr[i]
    if (prev === current) {
      return false
    }
    prev = current
  }
  return true
}
