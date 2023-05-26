// testing-1-2-3
// Testing 1-2-3
// difficulty: 7kyu
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

const number = (array) => array.map((e, i) => `${i + 1}: ${e}`);


console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
