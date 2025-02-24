// [JS][7kyu] Interlocking Binary Pairs
// interlocking-binary-pairs
// https://www.codewars.com/kata/628e3ee2e1daf90030239e8a/train/javascript

const interlockable = (a, b) => {
  const aStr = a.toString(2)
  const bStr = b.toString(2)
  const maxLength = Math.max(aStr.length, bStr.length)
  const aArr = aStr.padStart(maxLength, '0').split('')
  const bArr = bStr.padStart(maxLength, '0').split('')
  return aArr.every((_, i) => aArr[i] === '0' || bArr[i] === '0')
}

interlockable(9n, 4n) === true
interlockable(3n, 6n) === false
interlockable(2n, 5n) === true
interlockable(7n, 1n) === false
interlockable(0n, 8n) === true
