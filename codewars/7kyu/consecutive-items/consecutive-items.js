// consecutive-items
// Consecutive items
// difficulty: 7kyu
// https://www.codewars.com/kata/5f6d533e1475f30001e47514

const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;


console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
