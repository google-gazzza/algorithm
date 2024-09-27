// [JS][8kyu] String cleaning
// string-cleaning
// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

const KEYCODE_OF_0 = '0'.charCodeAt(0)
const KEYCODE_OF_9 = '9'.charCodeAt(0)

const isNumberString = (str) => {
  const charCode = str.charCodeAt(0)
  return KEYCODE_OF_0 <= charCode && charCode <= KEYCODE_OF_9
}

const stringClean = (s) =>
  s
    .split('')
    .filter((item) => isNumberString(item) === false)
    .join('')

stringClean('This looks5 grea8t!')
