// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

const sumDigits = (number) => `${Math.abs(number)}`.split('').reduce((a, c) => a + parseInt(c, 10), 0);

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
