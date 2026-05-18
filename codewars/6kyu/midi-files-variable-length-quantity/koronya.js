// [JS][6kyu] MIDI Files: Variable Length Quantity
// midi-files-variable-length-quantity
// https://www.codewars.com/kata/6a020680357f9fb3614e6502/train/javascript

const convertHexToBinary = (n) => n.toString(2).padStart(8, '0')
const convertBinaryToDecimal = (binary) => parseInt(binary, 2)

const encode = (n) => {
  if (n === 0) {
    return [0]
  }
  const resultArr = []

  let num = n
  while (num > 0) {
    const remainder = num % 128
    resultArr.push(remainder)
    num = Math.floor(num / 128)
  }

  return resultArr.map((value, index) => (index === 0 ? value : value + 128)).reverse()
}

const decode = (data) => {
  const resultArr = []
  let resultStr = ''
  const dataLength = data.length
  for (let i = 0; i < dataLength; i += 1 || 0) {
    const binary = convertHexToBinary(data[i])
    const continuationBit = binary[0]
    const valueBits = binary.slice(1)
    resultArr.push(valueBits)
    resultStr += valueBits
    if (continuationBit === '0') {
      break
    }
  }

  return convertBinaryToDecimal(resultStr)
}

// assert.deepEqual = function (actual, expected) {
//   if (JSON.stringify(actual) !== JSON.stringify(expected)) {
//     throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)
//   }
// }

// assert.strictEqual = function (actual, expected) {
//   if (actual !== expected) {
//     throw new Error(`Expected ${expected}, but got ${actual}`)
//   }
// }

// assert.deepEqual(encode(0), [0x00])
// assert.deepEqual(encode(127), [0x7f])
// assert.deepEqual(encode(55), [0x37])
// assert.deepEqual(encode(69), [0x45])

// assert.strictEqual(decode([0x00]), 0)
// assert.strictEqual(decode([0x7f]), 127)
// assert.strictEqual(decode([0x37]), 55)
// assert.strictEqual(decode([0x45]), 69)
// // Extra data in input:
// assert.strictEqual(decode([0x00, 0x7f, 0x7f]), 0)
// assert.strictEqual(decode([0x7f, 0x81, 0x00]), 127)
// assert.strictEqual(decode([0x45, 0x45, 0x45]), 69)
// assert.strictEqual(decode([0x37, 0xff, 0xff, 0x7f]), 55)

// assert.deepEqual(encode(128), [0x81, 0x00])
// assert.deepEqual(encode(16383), [0xff, 0x7f])
// assert.deepEqual(encode(8192), [0xc0, 0x00])
// assert.deepEqual(encode(6969), [0xb6, 0x39])

// assert.strictEqual(decode([0x81, 0x00]), 128)
// assert.strictEqual(decode([0xff, 0x7f]), 16383)
// assert.strictEqual(decode([0xc0, 0x00]), 8192)
// assert.strictEqual(decode([0xb6, 0x39]), 6969)
// // Extra data in input:
// assert.strictEqual(decode([0x81, 0x00, 0xff]), 128)
// assert.strictEqual(decode([0xff, 0x7f, 0x00]), 16383)
// assert.strictEqual(decode([0xc0, 0x00, 0x81, 0x80, 0x00]), 8192)
// assert.strictEqual(decode([0xb6, 0x39, 0xff, 0xff]), 6969)

// assert.deepEqual(encode(2097152), [0x81, 0x80, 0x80, 0x00])
// assert.deepEqual(encode(268435455), [0xff, 0xff, 0xff, 0x7f])
// assert.deepEqual(encode(134217728), [0xc0, 0x80, 0x80, 0x00])
// assert.deepEqual(encode(69696969), [0xa1, 0x9d, 0xfb, 0x49])

// assert.strictEqual(decode([0x81, 0x80, 0x80, 0x00]), 2097152)
// assert.strictEqual(decode([0xff, 0xff, 0xff, 0x7f]), 268435455)
// assert.strictEqual(decode([0xc0, 0x80, 0x80, 0x00]), 134217728)
// assert.strictEqual(decode([0xa1, 0x9d, 0xfb, 0x49]), 69696969)
// // Extra data in input:
// assert.strictEqual(decode([0x81, 0x80, 0x80, 0x00, 0x7f]), 2097152)
// assert.strictEqual(decode([0xff, 0xff, 0xff, 0x7f, 0x81, 0x00]), 268435455)
// assert.strictEqual(decode([0xc0, 0x80, 0x80, 0x00, 0xff, 0xff, 0x7f]), 134217728)
// assert.strictEqual(decode([0xa1, 0x9d, 0xfb, 0x49, 0x00, 0x00]), 69696969)
