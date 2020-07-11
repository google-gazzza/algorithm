// stringy-strings
// Stringy Strings
// difficult: 8kyu
// https://www.codewars.com/kata/563b74ddd19a3ad462000054
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/stringy-strings

const stringy = (size) => '10'.repeat(Math.floor(size / 2)) + '1'.repeat(size % 2);

console.log(stringy(6));
console.log(stringy(1));
