// https://leetcode.com/problems/reverse-bits
// Runtime: 64 ms, faster than 88.71% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 35.9 MB, less than 83.33% of JavaScript online submissions for Reverse Bits.
const reverseBits = n => {
  const inputBinary = n.toString(2).padStart(32, '0')
  const reverseBinary = inputBinary.split('').reverse().join('')

  return Number.parseInt(reverseBinary, 2)
}
