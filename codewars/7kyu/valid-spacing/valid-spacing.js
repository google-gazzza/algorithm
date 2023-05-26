/*
valid-spacing

# codewars/7kyu/Valid Spacing
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function validSpacing(s) {
  if (s.length === 0) {
    return true;
  }
  
  return !s.split(' ').some((e) => e.length === 0);
}

// test
console.log(validSpacing('Hello world'), true);
console.log(validSpacing(' Hello world'), false);
console.log(validSpacing('Hello  world '), false);
console.log(validSpacing('Hello'), true);
console.log(validSpacing('Helloworld'), true);
console.log(validSpacing(''), true);
