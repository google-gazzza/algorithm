// currying-functions-multiply-all-elements-in-an-array
// Currying functions: multiply all elements in an array
// difficuty: 7kyu
// https://www.codewars.com/kata/586909e4c66d18dd1800009b

const multiplyAll = (arr) => (n) => arr.map((e) => e * n);


multiplyAll([1, 2, 3])(2);
//?
