// [JS][6kyu] Dbftbs Djqifs
// dbftbs-djqifs
// https://www.codewars.com/kata/546937989c0b6ab3c5000183/train/javascript

const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)
const KEYCODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0)

const isUpperAlpha = (char) => {
  const keyCode = char.charCodeAt(0)
  return keyCode >= KEYCODE_OF_UPPER_A && keyCode <= KEYCODE_OF_UPPER_Z
}

const isLowerAlpha = (char) => {
  const keyCode = char.charCodeAt(0)
  return keyCode >= KEYCODE_OF_LOWER_A && keyCode <= KEYCODE_OF_LOWER_Z
}

const isAlpha = (char) => isUpperAlpha(char) || isLowerAlpha(char)

const getEncryptChar = (char, key) => {
  const keyCode = char.charCodeAt(0)
  const index = isUpperAlpha(char) ? keyCode - KEYCODE_OF_UPPER_A : keyCode - KEYCODE_OF_LOWER_A
  const temp = index + (key % 26)
  const adjustIndex = temp < 0 ? 26 + temp : temp % 26
  return isUpperAlpha(char) ? String.fromCharCode(adjustIndex + KEYCODE_OF_UPPER_A) : String.fromCharCode(adjustIndex + KEYCODE_OF_LOWER_A)
}

const encryptor = (key, message) => {
  return message
    .split('')
    .map((char) => (isAlpha(char) ? getEncryptChar(char, key) : char))
    .join('')
}

encryptor(13, '') === ''
encryptor(0, 'no cypher') === 'no cypher'
encryptor(13, 'Caesar Cipher') === 'Pnrfne Pvcure'
encryptor(-5, 'Hello World!') === 'Czggj Rjmgy!'
encryptor(27, 'Whoopi Goldberg') === 'Xippqj Hpmecfsh'
