/*
round-up-to-the-next-multiple-of-5

# codewars/7kyu/Round up to the next multiple of 5
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55d1d6d5955ec6365400006d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const roundToNext5 = (n) => Math.ceil(n / 5) * 5;

// test
console.log(roundToNext5(0), 0);
console.log(roundToNext5(1), 5);
console.log(roundToNext5(3), 5);
console.log(roundToNext5(5), 5);
console.log(roundToNext5(7), 10);
console.log(roundToNext5(39), 40);
