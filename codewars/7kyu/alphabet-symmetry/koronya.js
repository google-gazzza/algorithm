// [JS][7kyu] Alphabet symmetry
// alphabet-symmetry
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

const CHAR_CODE_OF_A = 'A'.charCodeAt(0)

const calc = (str) =>
  str.split('').filter((char, index) => {
    return char.toUpperCase().charCodeAt(0) - CHAR_CODE_OF_A === index
  }).length

const solve = (arr) => {
  return arr.map(calc)
}

solve(['abode', 'ABc', 'xyzD'])
solve(['abide', 'ABc', 'xyz'])
solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
solve(['encode', 'abc', 'xyzD', 'ABmD'])
