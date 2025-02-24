// [JS][7kyu] All Star Code Challenge #3
// all-star-code-challenge-3
// https://www.codewars.com/kata/58640340b3a675d9a70000b9/train/javascript

const removeVowels = (str) => str.replace(/[aeiou]/g, '')

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']
const removeVowels2 = (str) =>
  str
    .split('')
    .filter((char) => !VOWEL_LIST.includes(char))
    .join('')

removeVowels('drake') === 'drk'
removeVowels('aeiou') === ''
