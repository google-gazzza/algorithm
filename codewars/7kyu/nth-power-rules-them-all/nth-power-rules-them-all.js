// nth-power-rules-them-all
// Nth power rules them all!
// difficulty: 7kyu
// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/

const modifiedSum = (a, n) => a.reduce((acc, cur) => acc + (cur ** n), 0) - a.reduce((acc, cur) => acc + cur);

console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);
