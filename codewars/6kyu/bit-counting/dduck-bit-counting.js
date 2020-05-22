// bit-counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (n) => n.toString(2).split('').filter((v) => v === '1').length;
// const countBits = (n) => n !== 0 ? n.toString(2).match(/1/g).length : 0;

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
