/*
a-chain-adding-function

# codewars/5kyu/A Chain adding function
Difficulty: 5kyu
URL: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function add(a) {
  const fun = (b) => add(a + b);
  fun.valueOf = () => a;
  
  return fun;
}

// test
console.log(add(1) == 1);
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
