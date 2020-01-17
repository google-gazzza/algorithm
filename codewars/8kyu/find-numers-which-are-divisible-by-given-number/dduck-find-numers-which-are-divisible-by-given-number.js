// https://www.codewars.com/kata/55edaba99da3a9c84000003b/

const divisibleBy = (numbers, divisor) => numbers.filter((v) => (v % divisor) === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1, 3, 5], 2), []);


// best practice in codewars
// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }
