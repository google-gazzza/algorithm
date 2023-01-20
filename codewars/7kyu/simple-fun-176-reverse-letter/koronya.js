// [JS][7kyu] Simple Fun #176: Reverse Letter
// simple-fun-176-reverse-letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

const REG_ALPHABET = /[a-zA-Z]/

const reverseLetter = (str) =>
  str
    .split('')
    .filter((item) => REG_ALPHABET.test(item))
    .reverse()
    .join('')

reverseLetter('krishan') === 'nahsirk'

reverseLetter('ultr53o?n') === 'nortlu'

reverseLetter('ab23c') === 'cba'

reverseLetter('krish21an') === 'nahsirk'
