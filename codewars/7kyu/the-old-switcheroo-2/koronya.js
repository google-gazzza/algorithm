// [JS][7kyu] The old switcheroo 2
// the-old-switcheroo-2
// https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript

const CHAR_CODE_LOWER_A = 'a'.charCodeAt(0)

const encode = (str) => str.replace(/[a-zA-Z]/g, (char) => char.toLowerCase().charCodeAt(0) - CHAR_CODE_LOWER_A + 1)

encode('abc') === '123'
encode('ABC') === '123'
encode('codewars') === '315452311819'
encode('abc-#@5') === '123-#@5'
