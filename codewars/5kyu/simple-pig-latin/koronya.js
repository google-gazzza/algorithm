// [JS][5kyu] Simple Pig Latin
// simple-pig-latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

const REG_ALPHABET = /[a-zA-Z]/

const pigIt = (str) =>
  str
    .split(' ')
    .map((word) => (REG_ALPHABET.test(word) === true ? word.slice(1) + word[0] + 'ay' : word))
    .join(' ')

pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay'
pigIt('This is my string') === 'hisTay siay ymay tringsay'
