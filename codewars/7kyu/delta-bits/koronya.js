// [JS][7kyu] Delta Bits
// delta-bits
// https://www.codewars.com/kata/538948d4daea7dc4d200023f/train/javascript

const convertBits = (a, b) => {
  const xor = a ^ b
  return xor
    .toString(2)
    .split('')
    .filter((bit) => bit === '1').length
}

convertBits(31, 14) === 2
