/*
simple-fun-176-reverse-letter

# codewars/7kyu/Simple Fun #176: Reverse Letter
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('');

// test
console.log(reverseLetter('krishan'), 'nahsirk');
console.log(reverseLetter('ultr53o?n'), 'nortlu');
console.log(reverseLetter('ab23c'), 'cba');
console.log(reverseLetter('krish21an'), 'nahsirk');
