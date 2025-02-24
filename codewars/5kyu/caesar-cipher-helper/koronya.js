// [JS][5kyu] Caesar Cipher Helper
// caesar-cipher-helper
// https://www.codewars.com/kata/526d42b6526963598d0004db/train/javascript

const KEYCODE_OF_A = 'A'.charCodeAt(0)
const KEYCODE_OF_Z = 'Z'.charCodeAt(0)

const getNextNChar = (char, n) => {
  const keycode = char.toUpperCase().charCodeAt(0)
  if (keycode < KEYCODE_OF_A || keycode > KEYCODE_OF_Z) {
    return char
  }
  const nextKeyCode = keycode + n
  if (nextKeyCode > KEYCODE_OF_Z) {
    return String.fromCharCode(KEYCODE_OF_A + nextKeyCode - KEYCODE_OF_Z - 1)
  }
  if (nextKeyCode < KEYCODE_OF_A) {
    return String.fromCharCode(KEYCODE_OF_Z - (KEYCODE_OF_A - nextKeyCode - 1))
  }
  return String.fromCharCode(nextKeyCode)
}

class CaesarCipher {
  constructor(shift) {
    this.shift = shift
  }

  encode(str) {
    return str
      .split('')
      .map((char) => getNextNChar(char, this.shift))
      .join('')
  }

  decode(str) {
    return str
      .split('')
      .map((char) => getNextNChar(char, -1 * this.shift))
      .join('')
  }
}

// const CaesarCipher = function (shift) {
//   // TODO: Complete the CaesarCipher object
// }

var c = new CaesarCipher(5) // creates a CipherHelper with a shift of five
c.encode('Codewars') // returns 'HTIJBFWX'
c.decode('BFKKQJX') // returns 'WAFFLES'
