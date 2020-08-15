// get-nth-even-number
// Get Nth Even Number
// difficulty: 8kyu
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/get-nth-even-number

const nthEven = (n) => n * 2 - 2;



console.log(nthEven(1), 0, "Wrong Value!");
console.log(nthEven(2), 2, "Wrong Value!");
console.log(nthEven(3), 4, "Wrong Value!");
console.log(nthEven(100), 198, "Wrong Value!");
console.log(nthEven(1298734), 2597466, "Wrong Value!");
