// [JS][7kyu] Alphabetical Addition
// alphabetical-addition
// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

const CHAR_CODE_A = 'a'.charCodeAt(0)
const getValue = (str) => str.charCodeAt(0) - CHAR_CODE_A + 1
const getStr = (num) => String.fromCharCode(num + CHAR_CODE_A - 1)

const addLetters = (...letters) => {
  const sum = letters.reduce((acc, cur) => acc + getValue(cur), 0)
  return getStr(sum % 26 || 26)
}
