/*
summy

# codewars/7kyu/Summy
Difficulty: 7kyu
URL: https://www.codewars.com/kata/599c20626bd8795ce900001d
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const summy = (str) => str.split(' ').reduce((acc, cur) => acc + Number(cur), 0);

// test
console.log(summy('1 2 3'), 6);
console.log(summy('1 2 3 4'), 10);
console.log(summy('1 2 3 4 5'), 15);
console.log(summy('10 10'), 20);
console.log(summy('0 0'), 0);
