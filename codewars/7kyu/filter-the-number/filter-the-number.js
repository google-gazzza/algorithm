/*
filter-the-number

# codewars/7kyu/Filter the number
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55b051fac50a3292a9000025/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const FilterString = function (value) {
  return Number(value.match(/[0-9]/g).join(''));
};

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
