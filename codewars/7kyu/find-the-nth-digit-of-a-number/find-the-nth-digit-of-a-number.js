/*
find-the-nth-digit-of-a-number

# codewars/7kyu/Find the nth Digit of a Number
Difficulty: 7kyu
URL: https://www.codewars.com/kata/577b9960df78c19bca00007e/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1;
  }
  return Number([...String(Math.abs(num))].reverse()[nth - 1]) || 0;
};

// test
console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);
