// reverse-a-number
// Reverse a Number
// difficulty: 7kyu
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

const reverseNumber = (n) => Math.sign(n) * Number([...String(Math.abs(n))].reverse().join(''));



console.log(reverseNumber(123), 321);
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved');
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"');
console.log(reverseNumber(4321234), 4321234);
console.log(reverseNumber(5), 5);
console.log(reverseNumber(0), 0);
console.log(reverseNumber(98989898), 89898989);
