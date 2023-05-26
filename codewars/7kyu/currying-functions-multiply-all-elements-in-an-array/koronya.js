// [JS][7kyu] Currying functions: multiply all elements in an array
// currying-functions-multiply-all-elements-in-an-array
// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

const multiplyAll = (arr) => (n) => arr.map((item) => item * n)

multiplyAll([1, 2, 3])(2)
