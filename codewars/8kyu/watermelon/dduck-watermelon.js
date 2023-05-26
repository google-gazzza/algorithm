// watermelon
// Watermelon
// difficulty: 8kyu
// https://www.codewars.com/kata/55192f4ecd82ff826900089e/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/watermelon

const divide = (n) => n % 2 === 0 && n > 2;



console.log(divide(4), true);
console.log(divide(2), false);
console.log(divide(5), false);
console.log(divide(88), true);
console.log(divide(100), true);
console.log(divide(67), false);
console.log(divide(90), true);
console.log(divide(10), true);
console.log(divide(99), false);
console.log(divide(32), true);
