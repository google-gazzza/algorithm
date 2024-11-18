// [JS][6kyu] HTML Complementary Color
// html-complementary-color
// https://www.codewars.com/kata/56be4affc5dc03b84b001d2d/train/javascript

const convert = (str) => (16 - parseInt(str, 16) - 1).toString(16).toUpperCase()
const REGEXP = /^[0-9A-Fa-f]*$/
const getReversedColor = (hexColor) => {
  if (typeof hexColor !== 'string') {
    throw new Error('Incorrect type (not a string)')
  }
  if (hexColor.length > 6) {
    throw new Error('Incorrect string length')
  }
  if (REGEXP.test(hexColor) === false) {
    throw new Error('Incorrect string format')
  }

  return `#${hexColor
    .padStart(6, '0')
    .split('')
    .map((char) => convert(char))
    .join('')}`
}

getReversedColor('01fD08')
getReversedColor('a23')
getReversedColor('')

getReversedColor('') === '#FFFFFF'
getReversedColor('0')
getReversedColor('1234567')
getReversedColor('AA00ZZ')
getReversedColor('#AAFFAA')
getReversedColor(0)
