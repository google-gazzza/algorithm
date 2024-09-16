// [JS][6kyu] Binary to Text (ASCII) Conversion
// binary-to-text-ascii-conversion
// https://www.codewars.com/kata/5583d268479559400d000064/train/javascript

const binaryToString = (binary) => {
  const binaryLen = binary.length
  const arr = []
  for (let i = 0; i < binaryLen; i += 8) {
    const byte = binary.slice(i, i + 8)
    arr.push(String.fromCharCode(parseInt(byte, 2)))
  }
  return arr.join('')
}

binaryToString('01100001') === 'a'
binaryToString('01001011010101000100100001011000010000100101100101000101') === 'KTHXBYE'

// //Test numeric
binaryToString('00110001001100000011000100110001') === '1011'

// //Test special chars
binaryToString('001111000011101000101001') === '<:)'
