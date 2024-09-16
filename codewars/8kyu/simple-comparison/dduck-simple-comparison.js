// simple-comparison
// Simple Comparison?
// https://www.codewars.com/kata/57f6ecdfcca6e045d2001207

const add = (a, b) => String(a) === String(b);


console.log(add('1', 1), true);
console.log(add(1, '1'), true);
console.log(add(1, '0'), false);
console.log(add('11', 11), true);
console.log(add(12, 12), true);
console.log(add(120, '021'), false);
