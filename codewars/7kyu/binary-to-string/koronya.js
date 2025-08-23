// [JS][7kyu] Binary to string
// binary-to-string
// https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript

const binaryToString = (binary) => {
  const arr = binary.split('0b')
  arr.shift()
  return arr.map((char) => String.fromCharCode('0b' + char)).join('')
}

binaryToString('0b10000110b11000010b1110100') === 'Cat'
binaryToString('0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001') === 'Hello World!'

binaryToString(
  '0b10100110b11001010b11000110b11100100b11001010b11101000b1000000b11011010b11001010b11100110b11100110b11000010b11001110b11001010b1000000b110001',
) === 'Secret message 1'
