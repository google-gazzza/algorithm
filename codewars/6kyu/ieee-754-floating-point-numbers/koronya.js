// [JS][6kyu] IEEE 754 floating point numbers
// ieee-754-floating-point-numbers
// https://www.codewars.com/kata/5efcaedf95d7110017896ced/train/javascript

const getIEEE754DoubleBits = (num) => {
  const buffer = new ArrayBuffer(8)
  const view = new DataView(buffer)
  view.setFloat64(0, num)

  const high = view.getUint32(0)
  const low = view.getUint32(4)

  const highStr = high.toString(2).padStart(32, '0')
  const lowStr = low.toString(2).padStart(32, '0')

  return highStr + lowStr
}

const numToIEEE_754 = (num) => {
  const bits = getIEEE754DoubleBits(num)
  return `${bits[0]} ${bits.slice(1, 12)} ${bits.slice(12)}`
}

// numToIEEE_754(0.875)
// numToIEEE_754(-1)
// numToIEEE_754(1)
// numToIEEE_754(15.875)
// numToIEEE_754(NaN)
// numToIEEE_754(-NaN)
// numToIEEE_754(Infinity)
// numToIEEE_754(-Infinity)
// numToIEEE_754(0)
// numToIEEE_754(-0)
// numToIEEE_754(Number.MAX_VALUE)
// numToIEEE_754(Number.MIN_VALUE)
