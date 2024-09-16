// [Easy] 717. 1-bit and 2-bit Characters\
// 717_1-bit_and_2-bit_characters

// https://leetcode.com/problems/1-bit-and-2-bit-characters
// Runtime: 88 ms, faster than 50.00% of TypeScript online submissions for 1-bit and 2-bit Characters.
// Memory Usage: 40.5 MB, less than 7.14% of TypeScript online submissions for 1-bit and 2-bit Characters.

/**
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits: number[]): boolean {
  const bitsLen: number = bits.length
  let index: number = 0
  let isOneBit: boolean = false
  while (index < bitsLen) {
    const num: number = bits[index]
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
