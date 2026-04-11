// [JS][7kyu] Toggle, Set, and Clear Bits (Bit Manipulation Basics)
// toggle-set-and-clear-bits-bit-manipulation-basics
// https://www.codewars.com/kata/696eacb39271f8aa43b61841/train/javascript

// 1. Toggle a bit at a given position
const toggleBit = (n, position) => n ^ (1 << position)

// 2. Set a bit at a given position
const setBit = (n, position) => n | (1 << position)

// 3. Clear a bit at a given position
const clearBit = (n, position) => n & ~(1 << position)

// 4. Check if a bit at a given position is set
const isBitSet = (n, position) => (n & (1 << position)) !== 0

// 5. Set multiple bits using a mask
const setMultipleBits = (n, mask) => n | mask

// 6. Clear multiple bits using a mask
const clearMultipleBits = (n, mask) => n & ~mask

// 7. Toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) => n ^ mask

toggleBit(5, 1) === 7
setBit(5, 1) === 7
clearBit(7, 1) === 5
isBitSet(5, 0) === true
setMultipleBits(5, 3) === 7
clearMultipleBits(7, 2) === 5
toggleMultipleBits(5, 3) === 6
