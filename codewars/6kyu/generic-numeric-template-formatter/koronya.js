// [JS][6kyu] Generic numeric template formatter
// generic-numeric-template-formatter
// https://www.codewars.com/kata/59901fb5917839fe41000029/train/javascript

function isAlphabet(str) {
  return /^[A-Za-z]+$/.test(str)
}

const numericFormatter = (template, digits = '1234567890') => {
  let digitIndex = 0
  const digitsLen = digits.length
  const increaseDigitIndex = () => {
    digitIndex += 1
    if (digitIndex >= digitsLen) {
      digitIndex = 0
    }
  }
  return template
    .split('')
    .map((char) => {
      if (isAlphabet(char) === true) {
        const result = digits[digitIndex] || ' '
        increaseDigitIndex()
        return result
      }
      return char
    })
    .join('')
}

numericFormatter('xxx xxxxx xx', '5465253289') === '546 52532 89'
numericFormatter('xxx xxxxx xx') === '123 45678 90'
numericFormatter('+555 aaaa bbbb', '18031978') === '+555 1803 1978'
numericFormatter('+555 aaaa bbbb') === '+555 1234 5678'
numericFormatter('xxxx yyyy zzzz') === '1234 5678 9012'
