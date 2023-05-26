// [JS][5kyu] Rot13
// rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
const LENGTH_OF_ALPHABET = 26

const isLowerAlphabet = (char) => {
  const charCode = char.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_LOWER_A && charCode <= CHAR_CODE_OF_LOWER_Z
}
const isUpperAlphabet = (char) => {
  const charCode = char.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_UPPER_A && charCode <= CHAR_CODE_OF_UPPER_Z
}

const getTransformValue = (char) => {
  const charCode = char.charCodeAt(0)
  if (isLowerAlphabet(char)) {
    return String.fromCharCode(CHAR_CODE_OF_LOWER_A + ((charCode - CHAR_CODE_OF_LOWER_A + 13) % LENGTH_OF_ALPHABET))
  } else if (isUpperAlphabet(char)) {
    return String.fromCharCode(CHAR_CODE_OF_UPPER_A + ((charCode - CHAR_CODE_OF_UPPER_A + 13) % LENGTH_OF_ALPHABET))
  }
  return char
}

const rot13 = (message) => {
  let result = ''
  for (const s of message) {
    result += getTransformValue(s)
  }

  return result
}

rot13('tesT')
rot13('Ruby is cool!')
