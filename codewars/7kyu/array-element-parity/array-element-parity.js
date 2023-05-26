// array-element-parity
// Array element parity
// difficuty: 7kyu
// https://www.codewars.com/kata/5a092d9e46d843b9db000064

const solve = (arr) => [...new Set(arr).values()].reduce((acc, cur) => acc + cur);


console.log(solve([1, -1, 2, -2, 3]), 3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
console.log(solve([1, -1, 2, -2, 3, 3]), 3);
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
console.log(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
