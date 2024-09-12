/*
exes-and-ohs

# codewars/7kyu/Exes and Ohs
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55908aad6620c066bc00002a/

## Approach

### en
Omit description.

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

function XO(str) {
  return (str.match(/x/ig) || []).length === (str.match(/o/ig) || []).length;
}

// test
console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
