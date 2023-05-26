/*
thinkful-stringdrills-repeater

# codewars/7kyu/Thinkful - String Drills: Repeater
Difficulty: 7kyu
URL: https://www.codewars.com/kata/585a1a227cb58d8d740001c3
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function repeater(string, n) {
  return string.repeat(n);
}

console.log(repeater('a', 5), 'aaaaa');
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ');
