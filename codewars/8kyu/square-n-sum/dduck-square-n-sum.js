// square-n-sum
// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/square-n-sum

const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + cur ** 2, 0);



console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
