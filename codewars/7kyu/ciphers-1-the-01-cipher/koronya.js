// [JS][7kyu] Ciphers #1 - The 01 Cipher
// ciphers-1-the-01-cipher
// https://www.codewars.com/kata/593f50f343030bd35e0000c6/train/javascript

const REGEX_ALPHABET = /^[a-zA-Z]+$/
const isAlphabet = (str) => REGEX_ALPHABET.test(str)

const encode = (plaintext) => {
  return plaintext
    .split('')
    .map((str) => {
      if (isAlphabet(str) === true) {
        return str.charCodeAt(0) % 2 === 0 ? 1 : 0
      }
      return str
    })
    .join('')
}

encode('Hello World!') // => "10110 00111!"
