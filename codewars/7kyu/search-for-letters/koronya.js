// [JS][7kyu] Search for letters
// search-for-letters
// https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript

const CHAR_CODE_LOWER_A = 'a'.charCodeAt(0)
const getIndex = (char) => char.toLowerCase().charCodeAt(0) - CHAR_CODE_LOWER_A
const change = (string) => {
  const indexSet = new Set(
    string
      .replace(/[^a-zA-Z]/g, '')
      .split('')
      .map((char) => getIndex(char)),
  )
  return Array.from({ length: 26 }, (_, i) => (indexSet.has(i) ? 1 : 0)).join('')
}

change('a   **&  cZ') === '10100000000000000000000001'
change('aaaaaaa79345675') === '10000000000000000000000000'
change('&%#*') === '00000000000000000000000000'
