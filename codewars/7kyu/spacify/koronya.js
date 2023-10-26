// [JS][7kyu] Spacify
// spacify
// https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript

const spacify = (str) => str.split('').join(' ')

spacify('hello world') === 'h e l l o   w o r l d'
spacify('12345') === '1 2 3 4 5'
