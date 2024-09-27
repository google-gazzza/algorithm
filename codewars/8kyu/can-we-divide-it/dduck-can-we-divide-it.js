// can-we-divide-it
// Can we divide it?
// difficulty: 8kyu
// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/can-we-divide-it

const isDivideBy = (number, a, b) => Boolean(number % a === 0 && number % b === 0);



console.log(isDivideBy(-12, 2, -6), true);
console.log(isDivideBy(-12, 2, -5), false);
console.log(isDivideBy(45, 1, 6), false);
console.log(isDivideBy(45, 5, 15), true);
console.log(isDivideBy(4, 1, 4), true);
console.log(isDivideBy(15, -5, 3), true);
