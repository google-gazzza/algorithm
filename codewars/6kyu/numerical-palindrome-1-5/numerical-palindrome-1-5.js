/*
numerical-palindrome-1-5

# codewars/6kyu/Numerical Palindrome #1.5
Difficulty: 6kyu
URL: https://www.codewars.com/kata/58e09234ca6895c7b300008c/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function palindrome(num, targetCount) {
  if (!Number.isInteger(num) || !Number.isInteger(targetCount) || num < 0) {
    return 'Not valid';
  }
  let palindromeCount = 0;
  const result = [];
  
  if (num < 10) {
    num = 10;
  }
  
  while (palindromeCount < targetCount) {
    if (String(num) === String(num).split('').reverse().join('')) {
      palindromeCount += 1;
      result.push(num);
    }
    num += 1;
  }
  
  return result;
}

// test
console.log(palindrome(6, 4), [11, 22, 33, 44]);
console.log(palindrome(75, 1), [77]);
console.log(palindrome(19, 3), [22, 33, 44]);
console.log(palindrome(101, 2), [101, 111]);
console.log(palindrome("ACCDDCCA", 3), "Not valid");
console.log(palindrome(773, "1551"), "Not valid");
console.log(palindrome(-4505, 15), "Not valid");
