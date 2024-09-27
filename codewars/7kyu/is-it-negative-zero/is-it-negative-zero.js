/*
is-it-negative-zero

# codewars/7kyu/Is It Negative Zero (-0)?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5c5086287bc6600001c7589a

## Approach

### en
Omit description.

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

function isNegativeZero(n) {
  return n === 0 && (1 / n) === -Infinity;
}

// test
console.log(isNegativeZero(-0), true);
console.log(isNegativeZero(-Infinity), false);
console.log(isNegativeZero(-5), false);
console.log(isNegativeZero(-4), false);
console.log(isNegativeZero(-3), false);
console.log(isNegativeZero(-2), false);
console.log(isNegativeZero(-1), false);
console.log(isNegativeZero(-Number.MIN_VALUE), false);
console.log(isNegativeZero(0), false);
console.log(isNegativeZero(Number.MIN_VALUE), false);
console.log(isNegativeZero(1), false);
console.log(isNegativeZero(2), false);
console.log(isNegativeZero(3), false);
console.log(isNegativeZero(4), false);
console.log(isNegativeZero(5), false);
console.log(isNegativeZero(Infinity), false);
