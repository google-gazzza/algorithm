/*
fix-string-case

# codewars/7kyu/Fix string case
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5b180e9fedaa564a7000009a/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/
function solve(s) {
  const lowerCount = s.match(/[a-z]/g) ? s.match(/[a-z]/g).length : 0;
  const upperCount = s.match(/[A-Z]/g) ? s.match(/[A-Z]/g).length : 0;
  
  if (lowerCount >= upperCount) {
    return s.toLowerCase();
  }
  return s.toUpperCase();
}

// test
console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
