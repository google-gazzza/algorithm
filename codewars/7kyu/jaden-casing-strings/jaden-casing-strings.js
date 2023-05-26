/*
jaden-casing-strings

# codewars/7kyu/Jaden Casing Strings
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5390bac347d09b7da40006f6/

## Approach

### en
Omit description.

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

String.prototype.toJadenCase = function () {
  return this.split(' ').map((e) => `${e[0].toUpperCase()}${e.slice(1)}`).join(' ');
};

// test
const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
