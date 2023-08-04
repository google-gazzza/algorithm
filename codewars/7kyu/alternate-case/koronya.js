// [JS][7kyu] Alternate case
// alternate-case
// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

const alternateCase = (s) =>
  s
    .split('')
    .map((char) => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    })
    .join('')

alternateCase('abc') === 'ABC'
alternateCase('ABC') === 'abc'
alternateCase('Hello World') === 'hELLO wORLD'
