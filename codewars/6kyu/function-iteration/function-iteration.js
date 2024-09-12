/*
function-iteration

# codewars/6kyu/Function iteration
Difficulty: 6kyu
URL: https://www.codewars.com/kata/54b679eaac3d54e6ca0008c9
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const createIterator = (func, n) => (input) => {
  let sum = func(input);
  
  for (let i = 1; i < n; i += 1) {
    sum = func(sum);
  }
  
  return sum;
};

// test
var getDouble = function (n) {
  return n + n;
};

var doubleIterator = createIterator(getDouble, 1);

console.log(doubleIterator(3), 6, "Returns double of 3 as 6");
console.log(doubleIterator(5), 10, "Returns double of 5 as 10");

var getQuadruple = createIterator(getDouble, 2);

console.log(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
console.log(getQuadruple(5), 20, "Returns quadruple of 5 as 20");


// cleaver solution
function createIterator(func, n) {
  return (n === 1) ? func : (x) => func(createIterator(func, n - 1)(x));
};
