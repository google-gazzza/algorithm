// is-it-even
// Is it even?
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/is-it-even

const testEven = (n) => n % 2 === 0;



console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");
