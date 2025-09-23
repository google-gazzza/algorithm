// [JS][7kyu] Shared Bit Counter
// shared-bit-counter
// https://www.codewars.com/kata/58a5aeb893b79949eb0000f1/train/javascript

const sharedBits = (a, b) => {
  const aStr = a.toString(2)
  const bStr = b.toString(2)
  const maxLength = Math.max(aStr.length, bStr.length)
  const aPadded = aStr.padStart(maxLength, '0')
  const bPadded = bStr.padStart(maxLength, '0')
  let count = 0
  for (let i = 0; i < maxLength; i += 1) {
    if (aPadded[i] === '1' && bPadded[i] === '1') {
      count += 1
    }
  }
  return count >= 2
}

const a = 7
const b = 10
const c = 15

sharedBits(a, b)
sharedBits(a, c)
sharedBits(b, c)
