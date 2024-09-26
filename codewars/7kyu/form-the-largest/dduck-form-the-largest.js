// form-the-largest
// Form The Largest
// difficulty: 7kyu
// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/form-the-largest

const maxNumber = (n) => Number([...String(n)].sort((a, b) => b - a).join(''));


console.log(maxNumber(213), 321);
console.log(maxNumber(7389), 9873);
console.log(maxNumber(63792), 97632);
console.log(maxNumber(566797), 977665);
console.log(maxNumber(1000000), 1000000);
