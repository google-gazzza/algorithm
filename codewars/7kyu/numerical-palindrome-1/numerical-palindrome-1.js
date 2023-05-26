/*
numerical-palindrome-1

# codewars/7kyu/Numerical Palindrome #1
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58ba6fece3614ba7c200017f/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) {
    return 'Not valid';
  }
  
  return String(num) === String(num).split('').reverse().join('');
}

// test
console.log(palindrome(1221), true);
console.log(palindrome(123322), false);
console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1221"), "Not valid");
console.log(palindrome(-450), "Not valid");
