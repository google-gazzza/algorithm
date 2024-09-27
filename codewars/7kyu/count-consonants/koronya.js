// [JS][7kyu] Count consonants
// count-consonants
// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const isAlphabet = (char) => char.match(/[a-zA-Z]/)

const consonantCount = (str) => str.split('').filter((char) => !VOWEL_LIST.includes(char) && isAlphabet(char)).length

// consonantCount('aeiouAEIOU') === 0
// consonantCount('aaa') === 0

// consonantCount('bcdfghjklmnpqrstvwxyz') === 21
// consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') === 42
