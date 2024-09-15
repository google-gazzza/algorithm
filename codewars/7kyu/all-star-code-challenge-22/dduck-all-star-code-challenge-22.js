// all-star-code-challenge-22
// All Star Code Challenge #22
// difficulty: 7kyu
// https://www.codewars.com/kata/5865cff66b5699883f0001aa/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/all-star-code-challenge-22

const toTime = (s) => `${Math.floor(s / 3600)} hour(s) and ${Math.floor(s % 3600 / 60)} minute(s)`;

console.log(toTime(3600), '1 hour(s) and 0 minute(s)');
console.log(toTime(3601), '1 hour(s) and 0 minute(s)');
console.log(toTime(3500), '0 hour(s) and 58 minute(s)');
console.log(toTime(323500), '89 hour(s) and 51 minute(s)');
console.log(toTime(0), '0 hour(s) and 0 minute(s)');
