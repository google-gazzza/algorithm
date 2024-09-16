// [Easy] 717. 1-bit and 2-bit Characters
// 717_1-bit_and_2-bit_characters

// https://leetcode.com/problems/1-bit-and-2-bit-characters
// Runtime: 72 ms, faster than 94.71% of JavaScript online submissions for 1-bit and 2-bit Characters.
// Memory Usage: 38.9 MB, less than 41.27% of JavaScript online submissions for 1-bit and 2-bit Characters.

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
  const bitsLen = bits.length
  let index = 0
  let isOneBit = false
  while (index < bitsLen) {
    const num = bits[index]
    if (num === 1) {
      index += 2
      isOneBit = false
    } else {
      index += 1
      isOneBit = true
    }
  }
  return isOneBit
}

isOneBitCharacter([1, 0, 0])
isOneBitCharacter([1, 1, 1, 0])
